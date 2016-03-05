
# -*- coding: utf-8 -*-
from django.shortcuts import render, get_object_or_404
from .models import Vale, DetalleVale
from .forms import ValeForm
from apps.producto.models import Producto
from django.http import HttpResponse, JsonResponse
from apps.cliente.models import Cliente
from django.core.paginator import Paginator
from django.db.models import Sum
import json, datetime
from datetime import date, time, timedelta
from django.utils import timezone
from decimal import Decimal
from apps.venta.models import *

def ValeListar(request):
	findID = request.GET.get("id", 0)

	if findID == 0:
		# Campos
		orden = request.GET.get("sort", "")
		filtro = request.GET.get("filter", "")
		limite = int(request.GET.get("limit", "0"))
		pagina = int(request.GET.get("page", "0"))
		# Filtro
		if len(filtro) > 0:
			filtros = "Vale.objects.filter("
			filtro = json.loads(filtro)
			for f in filtro:
				filtros = filtros + f["property"] + "__icontains='" + f["value"] + "',"
			filtros = filtros[:-1] + ", pedido__isnull=True).order_by('-id')"
			vales = eval(filtros)
		else:
			vales = Vale.objects.filter(pedido__isnull=True).order_by('-id')
		# Orden
		if len(orden) > 0:
			orden = json.loads(orden)[0]
			tipo_orden = "-" if orden["direction"] == "DESC" else ""
			campo_orden = orden["property"]
			vales = vales.order_by(tipo_orden+campo_orden)
		total = vales.count()
		# Paginacion
		if pagina > 0:
			vales = Paginator(vales, 999999)
			vales = vales.page(pagina)
	else:
		vales = Vale.objects.filter(pk=findID).order_by('-id')
		total = vales.count()
	
	return render(
		request,
		'vale/vales.json',
		{
			'vales': vales,
			'total' : total,
		},
		content_type="application/json",
	)

def ValeCrear(request):
	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		idc = registros[0]['clienteid']
		obsevaciones = registros[0]['observaciones']
		idcliente = Cliente.objects.get(pk=idc)
		v = Vale.objects.filter()
		try:
			vale = Vale.objects.create(
					cliente = idcliente,
					numero = NroVale(str(v.count()+1)),
					observaciones = obsevaciones,
					creador = request.user,
				)
			vale.save()
			response_data = {
				"success": "Vale agregada correctamente",
			}

		except Exception:
			response_data = {"error": "Error al crear el Vale"}
			raise
	else:
		response_data = {"error": "Error al crear el Vale"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)

def NroVale(numero):
	if(len(numero)==6):
		n = numero
	elif(len(numero)==5):
		n = "0"+str(numero)
	elif(len(numero)==4):
		n = "00"+str(numero)
	elif(len(numero)==3):
		n = "000"+str(numero)
	elif(len(numero)==2):
		n = "0000"+str(numero)
	elif(len(numero)==1):
		n = "00000"+str(numero)

	return n


def ValeEliminar(request):
	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		for reg in registros:
			ids = reg["id"]
			reg = Vale.objects.get(pk=ids)
			reg.delete()

		response_data = {"success": "Los Vales se eliminaron correctamente"}
	else:
		response_data = {"error": "Error al eliminar los Vales"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)

def ValeEditar(request):
	response_data = {}
	cont = 0
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		idReg = registros[0]["id"]
		registro = Vale.objects.get(pk=idReg)
		registro.cliente = Cliente.objects.get(pk = int(registros[0]["clienteid"]))
		registro.observaciones = str(registros[0]["observaciones"])
		try:
			registro.save()
			response_data = {"success": "Registro actualizado correctamente"}
		except ValueError:
			response_data = {"error": sys.exc_info()[0]}
			raise
	else:
		response_data = {"success": "Error al actualizar el registro"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)



def ProductoListar(request):
	idVa = int(request.GET.get("idvale", 0))
	idv = Vale.objects.filter(id=idVa)
	iddv =  DetalleVale.objects.filter(vale_id=idv).values('producto_id')
	producto = Producto.objects.exclude(id__in=iddv)
	total = producto.count()

	return render(
		request, 
		"producto/producto.json",
		{
			'productos': producto,
			'total':total
		},
		content_type= "application/json",
	)

def DetalleValeListar(request):
	idVa = int(request.GET.get("idvale", 0))
	findID = request.GET.get("id", 0)
	idv = Vale.objects.filter(id=idVa)
	if findID == 0:
		# Campos
		orden = request.GET.get("sort", "")
		filtro = request.GET.get("filter", "")
		limite = int(request.GET.get("limit", "0"))
		pagina = int(request.GET.get("page", "0"))
		# Filtro
		if len(filtro) > 0:
			filtros = "DetalleVale.objects.filter("
			filtro = json.loads(filtro)
			for f in filtro:
				filtros = filtros + f["property"] + "__icontains='" + f["value"] + "',"
			filtros = filtros[:-1] + ", vale_id=idv)"
			detallevales = eval(filtros)
		else:
			detallevales = DetalleVale.objects.filter(vale_id=idv)
		# Orden
		if len(orden) > 0:
			orden = json.loads(orden)[0]
			tipo_orden = "-" if orden["direction"] == "DESC" else ""
			campo_orden = orden["property"]
			detallevales = detallevales.order_by(tipo_orden+campo_orden)
		total = detallevales.count()
		# Paginacion
		if pagina > 0:
			detallevales = Paginator(detallevales, 999999)
			detallevales = detallevales.page(pagina)
	else:
		detallevales = DetalleVale.objects.filter(pk=findID)
		total = detallevales.count()
	
	return render(
		request,
		'vale/detallevales.json',
		{
			'detallevales': detallevales,
			'total' : total,
		},
		content_type="application/json",
	)

def DetalleValeCrear(request):

	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		idvale = int(registros[0]['valeid'])
		idproducto = int(registros[0]['productoid'])
		cantidad = int(registros[0]['cantidad'])
		precio = float(registros[0]['precio'])
		idp = Producto.objects.get(pk = idproducto)
		vale=Vale.objects.get(pk=idvale)
		try:
			detallevale = DetalleVale.objects.create(
					vale = vale,
					producto = idp,
					cantidad = cantidad,
					precio = precio,
					creador = request.user,
				)
			detallevale.save()

			vale.total = GenerarTotalVale(idvale)
			vale.save()
			response_data = {
				"success": "Producto agregado al Vale correctamente",
			}

		except Exception:
			response_data = {"success": "Error al Agregar al Producto"}
	else:
		response_data = {"error": "Error al Agregar al Producto"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)


def DetalleValeEliminar(request):
	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		idvale = int(registros[0]['valeid'])
		for reg in registros:
			ids = reg["id"]
			reg = DetalleVale.objects.get(pk=ids)
			reg.delete()

		vale=Vale.objects.get(pk=idvale)
		vale.total = GenerarTotalVale(idvale)
		vale.save()

		response_data = {"success": "Los Productos se eliminaron correctamente"}
	else:
		response_data = {"error": "Error al eliminar los Productos"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)




def VentaValeCrear(request):
	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		idsvales = eval(registros[0]['valesid'])
		tipodoc = registros[0]['tipo_documento']
		nro_corre = registros[0]['numero_correlativo']
		nro_doc = registros[0]['numero_documento']
		credito = registros[0]['credito']
		dv = DetalleVale.objects.filter(vale_id__in = idsvales).values("producto_id", "cantidad","precio","vale__cliente_id")
		idcliente = dv[0]['vale__cliente_id']
		verificarDetalle = True
		for idv in idsvales:
			dv1 = DetalleVale.objects.filter(vale_id = idv)
			if dv1.count() == 0:
				verificarDetalle = False
		if verificarDetalle == True:
			idproductos= []
			prod = []
			for p in dv:
				prod.append(p["producto_id"])

			for i in prod :
				if i not in idproductos:
					idproductos.append(i)
			idpedido = GenerarPedido(idcliente,request)
			cont = 0
			for idp in idproductos:
				cantidad = 0
				precio = 0
				for i in dv:
					if int(i["producto_id"]) == idp:
						cantidad = cantidad+i["cantidad"]
						precio = precio + i["precio"]
						cont = cont+1
				GenerarDetallePedido(idpedido,idp, cantidad, (precio/cont), request)
				cont = 0
			for i in idsvales:
				registro = Vale.objects.get(pk=i)
				registro.pedido = Pedido.objects.get(pk=idpedido)
				registro.save()
			total = GenerarTotalPedido(idpedido)
			subtotal = total / Decimal(1.18)
			igv = total - subtotal
			dp1 = DetallePedido.objects.filter(pedido_id=idpedido)
			if dp1.count()>0:
				try:
					venta = Venta.objects.create(
							tipo_documento = tipodoc,
							numero_documento = NroPedido(str(nro_doc)),
							numero_correlativo = NroCorrelativo(str(nro_corre)),
							sub_total = subtotal,
							igv = igv,
							total = total,
							pedido_id = idpedido,
							credito = credito,
							creador = request.user,
						)
					venta.save()
					GenerarDetalleVenta(idpedido, venta.id,request)
					registro = Pedido.objects.get(pk=int(idpedido))
					registro.estado = True
					registro.save()

					response_data = {
						"success": "Venta generada correctamente",
					}

				except ValueError:
					response_data = {"success":"Error al crear la Venta"}
			else:
				response_data = {"success":"No hay Productos del Pedido Seleccionado"}


			response_data = {"success": "Pedido Generado Correctamente"}
		else:
			response_data = {"success": "Hay Algunos Vales sin Productos"}


	else:
		response_data = {"error": "Error al crear el Vale"}
	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)

def GenerarTotalVale(id_vale):
	total = 0
	for v in DetalleVale.objects.filter(vale_id=id_vale):
		subtotal = v.precio *v.cantidad
		total = total+subtotal
	return total  

def GenerarTotalPedido(id_pedido):
	total = 0
	for v in DetallePedido.objects.filter(pedido_id=id_pedido):
		subtotal = v.precio * v.cantidad
		total = total+subtotal
	return total  

def GenerarDetalleVenta(id_pedido, id_venta, request):
	for dp in DetallePedido.objects.filter(pedido_id=id_pedido):
		dv = DetalleVenta.objects.create(
				venta_id = id_venta,
				producto_id = dp.producto.id,
				cantidad = dp.cantidad,
				precio = dp.precio,
				creador = request.user,
			)
		dv.save()

def NroPedido(numero):
	if(len(numero)==6):
		n = numero
	elif(len(numero)==5):
		n = "0"+str(numero)
	elif(len(numero)==4):
		n = "00"+str(numero)
	elif(len(numero)==3):
		n = "000"+str(numero)
	elif(len(numero)==2):
		n = "0000"+str(numero)
	elif(len(numero)==1):
		n = "00000"+str(numero)

	return n

def NroCorrelativo(numero):
	if(len(numero)==4):
		n = numero
	elif(len(numero)==3):
		n = "0"+str(numero)
	elif(len(numero)==2):
		n = "00"+str(numero)
	elif(len(numero)==1):
		n = "000"+str(numero)

	return n


def GenerarPedido(idcliente, request):
	p = Pedido.objects.all()
	hoy = date.today()
	fentrega = hoy + timedelta(days=0)
	pedido = Pedido.objects.create(
			fecha_entrega = fentrega,
			nro_dias = 0,
			nro_pedido = NroPedido(str(p.count()+1)),
			cliente_id = idcliente,
			estado = False,
			creador = request.user,
		)
	pedido.save()
	return int(pedido.id)

def GenerarDetallePedido(idpedido, idproducto, cantidad, precio,request):
	dp1 = DetallePedido.objects.create(
			pedido_id = idpedido,
			producto_id = idproducto,
			cantidad = cantidad,
			precio = precio,
			creador = request.user,
		)
	dp1.save()

