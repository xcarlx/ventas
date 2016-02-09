from django.shortcuts import render, get_object_or_404
from .models import Producto
from apps.cliente.models import *
from  django.http import HttpResponse
import json
from .forms import ProductoForm,ProductoFotoForm
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.db.models import Count
# Create your views here.
def ProductoListar(request):

	findID = request.GET.get("id", 0)

	if findID == 0:
		# Campos
		orden = request.GET.get("sort", "")
		filtro = request.GET.get("filter", "")
		limite = int(request.GET.get("limit", "0"))
		pagina = int(request.GET.get("page", "0"))
		# Filtro
		if len(filtro) > 0:
			filtros = "Producto.objects.filter("
			filtro = json.loads(filtro)
			for f in filtro:
				filtros = filtros + f["property"] + "__icontains='" + f["value"] + "',"
			filtros = filtros[:-1] + ")"
			producto = eval(filtros)
		else:
			producto = Producto.objects.all()
		# Orden
		if len(orden) > 0:
			orden = json.loads(orden)[0]
			tipo_orden = "-" if orden["direction"] == "DESC" else ""
			campo_orden = orden["property"]
			producto = producto.order_by(tipo_orden+campo_orden)
		total = producto.count()
		# Paginacion
		if pagina > 0:
			producto = Paginator(producto, limite)
			producto = producto.page(pagina)
	else:
		producto = Producto.objects.filter(pk=findID)
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

def ProductoEliminar(request):
	respuesta = {}
	if request.method == "POST":
		registros = json.loads(request.POST["data"])
		ids = []
		for registro in registros:
			ids.append(registro["id"])
		try:
			tp = Producto.objects.filter(id__in=ids)
			tp.delete()
			respuesta = {"success": "los registros se eliminaron"}
		except Exception:
			respuesta = {"error": "los registros no se eliminaron"}	
			raise
	else:
		 respuesta = {"error": "Debe usar el Metodo Post"}

	return HttpResponse(
		json.dumps(respuesta),
		content_type="application/json"
		)

def ProductoCrear(request):
	
	respuesta = {}
	if request.method == "POST":
		registros = json.loads(request.POST["data"])
		try:
			pForm = ProductoForm(registros[0])
			if pForm.is_valid():
				tp = pForm.save(commit=False)
				tp.creador = request.user
				tp.save()
				respuesta = {
								"success": "El producto se creo correctamenta", 
								"id": tp.id
							}
			else:
				respuesta = {"error": [(k, v[0].__str__()) for k, v in pForm.errores.items()]}
		except Exception:
			respuesta = {"error": "Al crear el registro"}	
			raise
	else:
		 respuesta = {"error": "Debe usar el Metodo Post"}

	return HttpResponse(
		json.dumps(respuesta),
		content_type="application/json"
		)

def ProductoEditar(request):
	respuesta = {}
	if request.method == "POST":
		registros = json.loads(request.POST["data"])
		try:
			tpInst = get_object_or_404(Producto, id= registros[0]["id"])
			pForm = ProductoForm(registros[0] or None, instance=tpInst)
			if pForm.is_valid():
				tp = pForm.save(commit=False)
				tp.editor = request.user
				tp.save()
				respuesta = {
								"success": "El tipo de producto se modifico correctamenta", 
								"id": tp.id
							}
		except Exception:
			respuesta = {"error": "Al actualizar el registro"}	
			raise
	else:
		 respuesta = {"error": "Debe usar el Metodo Post"}

	return HttpResponse(
		json.dumps(respuesta),
		content_type="application/json"
		)


def ProductoFotoSubir(request):
	respuesta = {}
	if request.method == 'POST':
		form = ProductoFotoForm(request.POST, request.FILES)
		idprod = json.loads(request.POST["id"])
		if form.is_valid():
			product = Producto.objects.get(pk=idprod)
			product.imagen = form.cleaned_data['imagen']
			product.save()
			respuesta = {
						"success": "Se subio la foto correctamenta", 
						"id": product.id
					}
	else:
		 respuesta = {"error": "Debe usar el Metodo Post"}

	return HttpResponse(
		json.dumps(respuesta),
		content_type="application/json"
		)

def ControlProductoListar(request):
	
	findID = request.GET.get("id", 0)

	if findID == 0:
		# Campos
		clienteid = int(request.GET.get("clienteid", 0))
		orden = request.GET.get("sort", "")
		filtro = request.GET.get("filter", "")
		limite = int(request.GET.get("limit", "0"))
		pagina = int(request.GET.get("page", "0"))
		# Filtro
		if len(filtro) > 0:
			filtros = "Prestamo.objects.filter("
			filtro = json.loads(filtro)
			for f in filtro:
				filtros = filtros + f["property"] + "__icontains='" + f["value"] + "',"
			filtros = filtros[:-1] + ", cliente_id = "+clienteid+")"
			prestamo = eval(filtros)
		else:
			prestamo = Prestamo.objects.filter(cliente_id=clienteid)
		# Orden
		if len(orden) > 0:
			orden = json.loads(orden)[0]
			tipo_orden = "-" if orden["direction"] == "DESC" else ""
			campo_orden = orden["property"]
			prestamo = prestamo.order_by(tipo_orden+campo_orden)
		total = prestamo.count()
		# Paginacion
		if pagina > 0:
			prestamo = Paginator(prestamo, limite)
			prestamo = prestamo.page(pagina)
	else:
		prestamo = Prestamo.objects.filter(pk=findID)
		total = prestamo.count()

	return render(
		request, 
		"producto/prestamo.json",
		{
			'prestamos': prestamo,
			'total':total
		},
		content_type= "application/json",
	)

def ControlProductoCrear(request):
	response_data = {}
	if request.method == 'POST':
		idcliente =int(request.POST["clienteid"])
		registros = json.loads(request.POST["data"])
		producto = registros[0]['productoid']
		entregado = registros[0]['entregado']
		devuelto = registros[0]['devuelto'] 
		prest = Prestamo.objects.filter(cliente_id=idcliente, producto_id=producto)
		if(len(prest) < 1):
			try:
				prestamo = Prestamo.objects.create(
						cliente_id = idcliente,
						producto_id = producto,
						entregado = entregado,
						devuelto = devuelto,
						creador = request.user,
					)
				prestamo.save()
				response_data = {
					"success": "Registro agregado correctamente",
				}

			except Exception:
				response_data = {"error": "Error al crear el Registro"}
				raise
		else:
			prestamo = Prestamo.objects.get(cliente_id=idcliente, producto_id=producto)
			prestamo.entregado = entregado + prestamo.entregado
			prestamo.devuelto = devuelto + prestamo.devuelto
			try:
				prestamo.save()
				response_data = {"success": "Registro actualizado correctamente"}
			except ValueError:
				response_data = {"error": sys.exc_info()[0]}
				raise

	else:
		response_data = {"error": "Error al crear el Registro"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)

def ControlProductoEditar(request):
	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		idReg = registros[0]["id"]
		entregado = registros[0]['entregado']
		devuelto = registros[0]['devuelto'] 
		registro = Prestamo.objects.get(pk=idReg)
		registro.entregado = entregado
		registro.devuelto = devuelto
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

def ControlProductoEliminar(request):
	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		for reg in registros:
			ids = reg["id"]
			reg = Prestamo.objects.get(pk=ids)
			reg.delete()

		response_data = {"success": "Los Registros se eliminaron correctamente"}
	else:
		response_data = {"error": "Error al eliminar los Registros"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)


def ReporteEnvaceListar(request):
	prestamos = Cliente.objects.filter(id__in = Prestamo.objects.all().values("cliente_id"))

	findID = request.GET.get("id", 0)

	if findID == 0:
		# Campos
		orden = request.GET.get("sort", "")
		filtro = request.GET.get("filter", "")
		limite = int(request.GET.get("limit", "0"))
		pagina = int(request.GET.get("page", "0"))
		# Filtro
		if len(filtro) > 0:
			filtros = "Cliente.objects.filter("
			filtro = json.loads(filtro)
			for f in filtro:
				filtros = filtros + f["property"] + "__icontains='" + f["value"] + "',"
			filtros = filtros[:-1] + ",id__in = Prestamo.objects.all().values('cliente_id'))"
			prestamos = eval(filtros)
		else:
			prestamos = Cliente.objects.filter(id__in = Prestamo.objects.all().values('cliente_id'))
		# Orden
		if len(orden) > 0:
			orden = json.loads(orden)[0]
			tipo_orden = "-" if orden["direction"] == "DESC" else ""
			campo_orden = orden["property"]
			prestamos = prestamos.order_by(tipo_orden+campo_orden)
		total = prestamos.count()
		# Paginacion
		if pagina > 0:
			paginador = Paginator(prestamos, limite)
			total = prestamos.count
			try:
				prestamos = paginador.page(pagina)
			except PageNotAnInteger:
				prestamos = paginador.page(1)
			except EmptyPage:
				prestamos = paginator.page(paginator.num_pages)
	else:
		prestamos = Cliente.objects.filter(pk=findID,id__in = Prestamo.objects.all().values('cliente_id'))
		total = prestamos.count()

	return render(
		request, 
		"cliente/cliente.json",
		{
			'cliente': prestamos,
			'total':total
		},
		content_type= "application/json",
	)
def DetalleReporteEnvace(request):
	findID = request.GET.get("id", 0)

	if findID == 0:
		# Campos
		clienteid = int(request.GET.get("idcliente", 0))
		orden = request.GET.get("sort", "")
		filtro = request.GET.get("filter", "")
		limite = int(request.GET.get("limit", "0"))
		pagina = int(request.GET.get("page", "0"))
		# Filtro
		if len(filtro) > 0:
			filtros = "Prestamo.objects.filter("
			filtro = json.loads(filtro)
			for f in filtro:
				filtros = filtros + f["property"] + "__icontains='" + f["value"] + "',"
			filtros = filtros[:-1] + ", cliente_id = "+clienteid+")"
			prestamo = eval(filtros)
		else:
			prestamo = Prestamo.objects.filter(cliente_id=clienteid)
		# Orden
		if len(orden) > 0:
			orden = json.loads(orden)[0]
			tipo_orden = "-" if orden["direction"] == "DESC" else ""
			campo_orden = orden["property"]
			prestamo = prestamo.order_by(tipo_orden+campo_orden)
		total = prestamo.count()
		# Paginacion
		if pagina > 0:
			prestamo = Paginator(prestamo, limite)
			prestamo = prestamo.page(pagina)
	else:
		prestamo = Prestamo.objects.filter(pk=findID)
		total = prestamo.count()

	return render(
		request, 
		"producto/prestamo.json",
		{
			'prestamos': prestamo,
			'total':total
		},
		content_type= "application/json",
	)