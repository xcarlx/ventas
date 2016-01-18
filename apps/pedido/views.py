from django.shortcuts import render, get_object_or_404
from .models import *
from apps.producto.models import Producto
from django.http import HttpResponse, JsonResponse
from apps.cliente.models import Cliente
from apps.venta.models import *
import json, datetime
from django.core.paginator import Paginator
from django.db.models import Sum
from datetime import date, time, timedelta
from django.utils import timezone
from decimal import Decimal

def PedidoListar(request):
	
	findID = request.GET.get("id", 0)

	if findID == 0:
		# Campos
		orden = request.GET.get("sort", "")
		filtro = request.GET.get("filter", "")
		limite = int(request.GET.get("limit", "0"))
		pagina = int(request.GET.get("page", "0"))
		# Filtro
		if len(filtro) > 0:
			filtros = "Pedido.objects.filter("
			filtro = json.loads(filtro)
			for f in filtro:
				filtros = filtros + f["property"] + "__icontains='" + f["value"] + "',"
			filtros = filtros[:-1] + ", estado=False).order_by('-id')"
			pedidos = eval(filtros)
		else:
			pedidos = Pedido.objects.filter(estado=False).order_by('-id')
		# Orden
		if len(orden) > 0:
			orden = json.loads(orden)[0]
			tipo_orden = "-" if orden["direction"] == "DESC" else ""
			campo_orden = orden["property"]
			pedidos = pedidos.order_by(tipo_orden+campo_orden)
		total = pedidos.count()
		# Paginacion
		if pagina > 0:
			pedidos = Paginator(pedidos, limite)
			pedidos = pedidos.page(pagina)
	else:
		pedidos = Pedido.objects.filter(pk=findID).order_by('-id')
		total = pedidos.count()
	
	return render(
		request,
		'pedido/pedido.json',
		{
			'pedidos': pedidos,
			'total' : total,
		},
		content_type="application/json",
	)

def PedidoCrear(request):
	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		idc = registros[0]['clienteid']
		nrodias = int(registros[0]['nro_dias'])
		idcliente = Cliente.objects.get(pk=idc)
		p = Pedido.objects.all()
		hoy = date.today()
		fentrega = hoy + timedelta(days=nrodias)
		try:
			pedido = Pedido.objects.create(
					fecha_entrega = fentrega,
					nro_dias = nrodias,
					nro_pedido = NroPedido(str(p.count()+1)),
					cliente = idcliente,
					estado = False,
					creador = request.user,
				)
			pedido.save()
			response_data = {
				"success": "Pedido agregada correctamente",
			}

		except Exception:
			response_data = {"error": "Error al crear el Pedido"}
			raise
	else:
		response_data = {"error": "Error al crear el módulo"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)

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


def PedidoEliminar(request):
	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		for reg in registros:
			ids = reg["id"]
			reg = Pedido.objects.get(pk=ids)
			reg.delete()

		response_data = {"success": "Los Pedidos se eliminaron correctamente"}
	else:
		response_data = {"error": "Error al eliminar los Pedidos"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)

def PedidoEditar(request):

	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		idReg = registros[0]["id"]
		fecha = datetime.datetime.fromtimestamp(int(registros[0]['fecha_pedido'])).date()
		fentrega = fecha + timedelta(days=int(registros[0]["nro_dias"]))
		registro = Pedido.objects.get(pk=idReg)
		registro.cliente = Cliente.objects.get(pk = int(registros[0]["clienteid"]))
		registro.nro_dias = int(registros[0]["nro_dias"])
		registro.fecha_entrega = fentrega
		try:
			registro.save()
			response_data = {"success": "Registro actualizado correctamente"}
		except ValueError:
			response_data = {"success": sys.exc_info()[0]}
			raise

	else:
		response_data = {"error": "Error al actualizar el registro"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)



def ProductoListar(request,idPe):
	idp = Pedido.objects.filter(id=idPe)
	idpe =  DetallePedido.objects.filter(pedido_id=idp).values('producto_id')
	producto = Producto.objects.exclude(id__in=idpe)
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

def DetallePedidoListar(request,idPe):
	findID = request.GET.get("id", 0)
	idp = Pedido.objects.filter(id=idPe)
	if findID == 0:
		# Campos
		orden = request.GET.get("sort", "")
		filtro = request.GET.get("filter", "")
		limite = int(request.GET.get("limit", "0"))
		pagina = int(request.GET.get("page", "0"))
		# Filtro
		if len(filtro) > 0:
			filtros = "DetallePedido.objects.filter("
			filtro = json.loads(filtro)
			for f in filtro:
				filtros = filtros + f["property"] + "__icontains='" + f["value"] + "',"
			filtros = filtros[:-1] + ", pedido_id=idp)"
			detallepedidos = eval(filtros)
		else:
			detallepedidos = DetallePedido.objects.filter(pedido_id=idp)
		# Orden
		if len(orden) > 0:
			orden = json.loads(orden)[0]
			tipo_orden = "-" if orden["direction"] == "DESC" else ""
			campo_orden = orden["property"]
			detallepedidos = detallepedidos.order_by(tipo_orden+campo_orden)
		total = detallepedidos.count()

		if pagina > 0:
			detallepedidos = Paginator(detallepedidos, limite)
			detallepedidos = detallepedidos.page(pagina)
	else:
		detallepedidos = DetallePedido.objects.filter(pk=findID)
		total = detallepedidos.count()
	
	return render(
		request, 
		"pedido/detallepedido.json",
		{
			'detallepedidos': detallepedidos,
			'total':total
		},
		content_type= "application/json",
	)

def DetallePedidoCrear(request):

	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		idpedido = int(registros[0]['pedidoid'])
		idproducto = int(registros[0]['productoid'])
		cantidad = int(registros[0]['cantidad'])
		idp = Producto.objects.get(pk = idproducto)
		precio = Producto.objects.filter(pk = idproducto)
		pedido=Pedido.objects.get(pk=idpedido)
		try:
			detallepedido = DetallePedido.objects.create(
					pedido = pedido,
					producto = idp,
					cantidad = cantidad,
					creador = request.user,
				)
			detallepedido.save()
			response_data = {
				"success": "Producto agregado al Pedido correctamente",
			}

		except Exception:
			response_data = {"success": "Error al Agregar al Producto"}
	else:
		response_data = {"error": "Error al Agregar al Producto"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)


def DetallePedidoEliminar(request):
	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		idpedido = int(registros[0]['pedidoid'])
		for reg in registros:
			ids = reg["id"]
			reg = DetallePedido.objects.get(pk=ids)
			reg.delete()

		response_data = {"success": "Los Productos se eliminaron correctamente"}
	else:
		response_data = {"error": "Error al eliminar los Productos"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)

def VentaPedidoCrear(request):
	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		idpedido = registros[0]['pedidoid']
		tipodoc = registros[0]['tipo_documento']
		nro_corre = registros[0]['numero_correlativo']
		nro_doc = registros[0]['numero_documento']
		reprogramar = registros[0]['reprogramar']
		nro_dias = registros[0]['nro_dias']
		total = GenerarTotalPedido(idpedido)
		subtotal = total / Decimal(1.18)
		igv = total - subtotal

		try:
			if reprogramar == False :
				venta = Venta.objects.create(
						tipo_documento = tipodoc,
						numero_documento = NroPedido(str(nro_doc)),
						numero_correlativo = NroCorrelativo(str(nro_corre)),
						sub_total = subtotal,
						igv = igv,
						total = total,
						pedido_id = idpedido,
						creador = request.user,
					)
				venta.save()
				GenerarDetalleVenta(idpedido, venta.id,request)
			else:
				venta = Venta.objects.create(
						tipo_documento = tipodoc,
						numero_documento = NroPedido(str(nro_doc)),
						numero_correlativo = NroCorrelativo(str(nro_corre)),
						sub_total = subtotal,
						igv = igv,
						total = total,
						pedido_id = idpedido,
						creador = request.user,
					)
				venta.save()
				GenerarDetalleVenta(idpedido, venta.id, request)
				Reprogramar(idpedido, nro_dias, request)
			registro = Pedido.objects.get(pk=int(idpedido))
			registro.estado = True
			registro.save()

			response_data = {
				"success": "Venta generada correctamente",
			}

		except ValueError:
			response_data = {"success":"Error al crear la Venta"}
			raise

	else:
		response_data = {"error": "Error al crear el la Venta"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)

def GenerarDetalleVenta(id_pedido, id_venta, request):
	for dp in DetallePedido.objects.filter(pedido_id=id_pedido):
		dv = DetalleVenta.objects.create(
				venta_id = id_venta,
				producto_id = dp.producto.id,
				cantidad = dp.cantidad,
				precio = dp.producto.precio,
				creador = request.user,
			)
		dv.save()

def Reprogramar(id_pedido, nrodias, request):
	pedido = Pedido.objects.filter(id=id_pedido)
	hoy = date.today()
	fentrega = hoy + timedelta(days=nrodias)

	pe = Pedido.objects.all()
	p = Pedido.objects.create(
			fecha_entrega = fentrega,
			nro_dias = nrodias,
			nro_pedido = NroPedido(str(pe.count()+1)),
			cliente_id = pedido[0].cliente.id,
			estado = False,
			creador = request.user,
		)
	p.save()

	for dp in DetallePedido.objects.filter(pedido_id=id_pedido):
		dp1 = DetallePedido.objects.create(
				pedido_id = p.id,
				producto_id = dp.producto.id,
				cantidad = dp.cantidad,
				creador = request.user,
			)
		dp1.save()
			

def GenerarTotalPedido(id_pedido):
	total = 0
	for v in DetallePedido.objects.filter(pedido_id=id_pedido):
		subtotal = v.producto.precio * v.cantidad
		total = total+subtotal
	return total  


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
def VentaPedidoListar(request):
	return HttpResponse("",
		content_type="application/json"
	)