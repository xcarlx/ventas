from django.shortcuts import render, get_object_or_404
from .models import Cliente
from  django.http import HttpResponse
import json
from .forms import ClienteForm
from django.core.paginator import Paginator

def ClienteListar(request):

	idtp = int(request.GET.get("id","0"))
	if idtp > 0 :
		cliente = Cliente.objects.filter(pk=idtp)
		total = 1
	else:
		limite = int(request.GET.get("limit","10"))
		pagina = int(request.GET.get("page","1"))
		orden = request.GET.get("sort","")
		filtros = request.GET.get("filter","")
		if len(filtros) == 0:
			cliente = Cliente.objects.all()	
		else:
			filtros = json.loads(filtros)
			cadFil = ""
			for filtro in filtros:
				cadFil = cadFil+filtro["property"]+"__icontains='"+filtro["value"]+"',"

			cadFil = cadFil[:-1]
			cliente = eval("Cliente.objects.filter("+cadFil+")")
		total = cliente.count()
		if len(orden)>0:
			orden = json.loads(orden)[0]
			signo = "-" if orden["direction"] == "DESC" else ""
			orden = signo+orden["property"]
			cliente = cliente.order_by(orden)
		cliente = Paginator(cliente, limite) 
		cliente = cliente.page(pagina)

	return render(
		request, 
		"cliente/cliente.json",
		{
			'cliente': cliente,
			'total':total
		},
		content_type= "application/json",
	)

def ClienteEliminar(request):
	respuesta = {}
	if request.method == "POST":
		registros = json.loads(request.POST["data"])
		idc = []
		for registro in registros:
			idc.append(registro["id"])
		try:
			cliente = Cliente.objects.filter(id__in=idc)
			cliente.delete()
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

def ClienteCrear(request):
	
	respuesta = {}
	if request.method == "POST":
		registros = json.loads(request.POST["data"])
		try:
			pForm = ClienteForm(registros[0])
			if pForm.is_valid():
				cliente = pForm.save(commit=False)
				cliente.creador = request.user
				cliente.save()
				respuesta = {
								"success": "El Cliente se creo correctamenta", 
								"id": cliente.id
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


def ClienteEditar(request):
	respuesta = {}
	if request.method == "POST":
		registros = json.loads(request.POST["data"])
		try:
			cInst = get_object_or_404(Cliente, id= registros[0]["id"])
			pForm = ClienteForm(registros[0] or None, instance=cInst)
			if pForm.is_valid():
				cliente = pForm.save(commit=False)
				cliente.editor = request.user
				cliente.save()
				respuesta = {
								"success": "El Cliente se modifico correctamenta", 
								"id": cliente.id
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