from django.shortcuts import render, get_object_or_404
from .models import Producto
from  django.http import HttpResponse
import json
from .forms import ProductoForm
from django.core.paginator import Paginator
# Create your views here.
def ProductoListar(request):

	limite = int(request.GET.get("limit","10"))
	pagina = int(request.GET.get("page","1"))
	orden = request.GET.get("sort","")
	filtros = request.GET.get("filter","")
	if len(filtros) == 0:
		producto = Producto.objects.all()	
	else:
		filtros = json.loads(filtros)
		cadFil = ""
		for filtro in filtros:
			cadFil = cadFil+filtro["property"]+"__icontains='"+filtro["value"]+"',"

		cadFil = cadFil[:-1]
		producto = eval("Producto.objects.filter("+cadFil+")")
	total = producto.count()
	if len(orden)>0:
		orden = json.loads(orden)[0]
		signo = "-" if orden["direction"] == "DESC" else ""
		orden = signo+orden["property"]
		producto = producto.order_by(orden)
	producto = Paginator(producto, limite) 
	producto = producto.page(pagina)

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