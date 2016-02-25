# -*- coding: utf-8 -*-
from django.shortcuts import render, get_object_or_404
from .models import GuiaRemision, DetalleGuia
from .forms import GuiaForm
from apps.producto.models import Producto
from django.http import HttpResponse, JsonResponse
from apps.cliente.models import Cliente
from django.core.paginator import Paginator
from django.db.models import Sum
import json, datetime
from django.utils import timezone
from decimal import Decimal
from datetime import date, time, timedelta
from apps.venta.models import *


def GuiaListar(request):
	findID = request.GET.get("id", 0)

	if findID == 0:
		# Campos
		orden = request.GET.get("sort", "")
		filtro = request.GET.get("filter", "")
		limite = int(request.GET.get("limit", "0"))
		pagina = int(request.GET.get("page", "0"))
		# Filtro
		if len(filtro) > 0:
			filtros = "GuiaRemision.objects.filter("
			filtro = json.loads(filtro)
			for f in filtro:
				filtros = filtros + f["property"] + "__icontains='" + f["value"] + "',"
			filtros = filtros[:-1] + ", pedido__isnull=True).order_by('-pk')"
			guias = eval(filtros)
		else:
			guias = GuiaRemision.objects.filter(pedido__isnull=True).order_by('-pk')
		# Orden
		if len(orden) > 0:
			orden = json.loads(orden)[0]
			tipo_orden = "-" if orden["direction"] == "DESC" else ""
			campo_orden = orden["property"]
			guias = guias.order_by(tipo_orden+campo_orden)
		total = guias.count()
		# Paginacion
		if pagina > 0:
			guias = Paginator(guias, limite)
			guias = guias.page(pagina)
	else:
		guias = GuiaRemision.objects.filter(pk=findID).order_by('-pk')
		total = guias.count()
	
	return render(
		request,
		'guia/guias.json',
		{
			'guias': guias,
			'total' : total,
		},
		content_type="application/json",
	)

def GuiaCrear(request):
	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		idc = registros[0]['clienteid']
		punto_partida = registros[0]['punto_partida']
		punto_llegada = registros[0]['punto_llegada']
		fecha_emision = datetime.datetime.fromtimestamp(int(registros[0]['fecha_emision'])).date()
		fecha_translado = datetime.datetime.fromtimestamp(int(registros[0]['fecha_translado'])).date()
		idcliente = Cliente.objects.get(pk=idc)
		g = GuiaRemision.objects.filter(pedido__isnull=True)
		try:
			guia = GuiaRemision.objects.create(
					punto_partida = punto_partida,
					punto_llegada = punto_llegada,
					fecha_emision = fecha_emision,
					fecha_translado = fecha_translado,
					cliente = idcliente,
					creador = request.user,
				)
			guia.save()
			response_data = {
				"success": "Guia de Remision agregada correctamente",
			}

		except Exception:
			response_data = {"error": "Error al crear la Guia de Remision"}
			raise
	else:
		response_data = {"error": "Error al crear la Guia de Remision"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)

def GuiaEliminar(request):
	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		for reg in registros:
			ids = reg["id"]
			reg = GuiaRemision.objects.get(pk=ids)
			reg.delete()

		response_data = {"success": "Las Guias se eliminaron correctamente"}
	else:
		response_data = {"error": "Error al eliminar las Guias"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)


def GuiaEditar(request):

	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		idReg = registros[0]["id"]
		punto_partida = registros[0]['punto_partida']
		punto_llegada = registros[0]['punto_llegada']
		fecha_emision = datetime.datetime.fromtimestamp(int(registros[0]['fecha_emision'])).date()
		fecha_translado = datetime.datetime.fromtimestamp(int(registros[0]['fecha_translado'])).date()
		registro = GuiaRemision.objects.get(pk=idReg)
		registro.cliente = Cliente.objects.get(pk = int(registros[0]["clienteid"]))
		registro.punto_partida = str(punto_partida)
		registro.punto_llegada = str(punto_llegada)
		registro.fecha_emision = fecha_emision
		registro.fecha_translado = fecha_translado
		try:
			registro.save()
			response_data = {"success": "Registro actualizado correctamente"}
		except ValueError:
			response_data = {"error": sys.exc_info()[0]}
			raise
	else:
		response_data = {"error": "Error al actualizar el registro"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)

def ProductoListar(request):
	idGuia = request.GET.get("idguia", 0)
	idg = GuiaRemision.objects.filter(id=idGuia)
	iddg =  DetalleGuia.objects.filter(guia_remision_id=idg).values('producto_id')
	producto = Producto.objects.exclude(id__in=iddg)
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

def DetalleGuiaListar(request):
	findID = request.GET.get("id", 0)
	idGuia = request.GET.get("idguia", 0)
	idg = GuiaRemision.objects.filter(id=idGuia)
	if findID == 0:
		# Campos
		orden = request.GET.get("sort", "")
		filtro = request.GET.get("filter", "")
		limite = int(request.GET.get("limit", "0"))
		pagina = int(request.GET.get("page", "0"))
		# Filtro
		if len(filtro) > 0:
			filtros = "DetalleGuia.objects.filter("
			filtro = json.loads(filtro)
			for f in filtro:
				filtros = filtros + f["property"] + "__icontains='" + f["value"] + "',"
			filtros = filtros[:-1] + ", guia_remision_id=idg)"
			detalleguias = eval(filtros)
		else:
			detalleguias = DetalleGuia.objects.filter(guia_remision_id=idg)
		# Orden
		if len(orden) > 0:
			orden = json.loads(orden)[0]
			tipo_orden = "-" if orden["direction"] == "DESC" else ""
			campo_orden = orden["property"]
			detalleguias = detalleguias.order_by(tipo_orden+campo_orden)
		total = detalleguias.count()
		# Paginacion
		if pagina > 0:
			detalleguias = Paginator(detalleguias, limite)
			detalleguias = detalleguias.page(pagina)
	else:
		detalleguias = DetalleGuia.objects.filter(pk=findID)
		total = detalleguias.count()
	
	return render(
		request,
		'guia/detalleguias.json',
		{
			'detalleguias': detalleguias,
			'total' : total,
		},
		content_type="application/json",
	)


def DetalleGuiaCrear(request):

	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		idguia = int(registros[0]['guia_remisionid'])
		idproducto = int(registros[0]['productoid'])
		cantidad = int(registros[0]['cantidad'])
		precio = float(registros[0]['precio'])
		idp = Producto.objects.get(pk = idproducto)
		guia=GuiaRemision.objects.get(pk=idguia)
		try:
			detalleguia = DetalleGuia.objects.create(
					guia_remision = guia,
					producto = idp,
					cantidad = cantidad,
					precio = precio,
					creador = request.user,
				)
			detalleguia.save()
			response_data = {
				"success": "Producto agregado a la Guia de Remision correctamente",
			}

		except Exception:
			response_data = {"success": "Error al Agregar al Producto"}
	else:
		response_data = {"error": "Error al Agregar al Producto"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)


def DetalleGuiaEliminar(request):
	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		for reg in registros:
			ids = reg["id"]
			reg = DetalleGuia.objects.get(pk=ids)
			reg.delete()

		response_data = {"success": "Los Productos se eliminaron correctamente"}
	else:
		response_data = {"error": "Error al eliminar Los Productos "}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)




def VentaGuiaCrear(request):
	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		idsguias = eval(registros[0]['guiasid'])
		tipodoc = registros[0]['tipo_documento']
		nro_corre = registros[0]['numero_correlativo']
		nro_doc = registros[0]['numero_documento']
		credito = registros[0]['credito']
		dv = dg = DetalleGuia.objects.filter(guia_remision_id__in = idsguias).values("producto_id", "cantidad","precio","guia_remision__cliente_id")
		idcliente = dv[0]['guia_remision__cliente_id']
		verificarDetalle = True
		for idv in idsguias:
			dv1 = DetalleGuia.objects.filter(guia_remision_id = idv)
			if dv1.count() == 0:
				verificarDetalle = False
		if verificarDetalle == True:
			idproductos= []
			prod = []
			for p in dg:
				prod.append(p["producto_id"])

			for i in prod :
				if i not in idproductos:
					idproductos.append(i)
			idpedido = GenerarPedido(idcliente,request)
			cont = 0
			for idp in idproductos:
				cantidad = 0
				precio = 0
				for i in dg:
					if int(i["producto_id"]) == idp:
						cantidad = cantidad+i["cantidad"]
						precio = precio + i["precio"]
						cont = cont+1
				GenerarDetallePedido(idpedido,idp, cantidad, (precio/cont),request)
				cont = 0
			for i in idsguias:
				registro = GuiaRemision.objects.get(pk=i)
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

