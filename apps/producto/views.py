from django.shortcuts import render, get_object_or_404
from .models import Producto
from  django.http import HttpResponse
import json
from .forms import ProductoForm
from django.core.paginator import Paginator
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
			filtros = filtros[:-1] + ", venta__isnull="+True+")"
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