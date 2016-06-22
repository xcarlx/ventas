from django.shortcuts import render, get_object_or_404
from .models import Cliente
from django.db import models
from  django.http import HttpResponse
import json
from .forms import ClienteForm
from django.core.paginator import Paginator
from django.db.models import Q

def ClienteListar(request):

	idtp = int(request.GET.get("id","0"))
	query = request.GET.get("query","")
	if idtp > 0 :
		cliente = Cliente.objects.filter(pk=idtp)
		total = 1
	elif len(query)>0:
		if type(query)==type(1):
			cliente =  Cliente.objects.filter(id=int(query)) 
			total = cliente.count()
		else:
			cliente =  Cliente.objects.filter(
												Q(nombres__icontains=str(query)) | 
												Q(apellidos__icontains = str(query)) | 
												Q(nro_documento__icontains=str(query)) 
											)
			total = cliente.count()
	else:
		limite = int(request.GET.get("limit","99999"))
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
		cliente = Paginator(cliente, 99999) 
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
	try:
		if request.method == "POST":
			registros = json.loads(request.POST["data"])
			idc = []
			for registro in registros:
				idc.append(registro["id"])
			try:
				cliente = Cliente.objects.filter(id__in=idc)
				cliente.delete()
				respuesta = {"success": "los registros se eliminaron"}
			except models.ProtectedError:
				respuesta = {"success": "los registros no se eliminaron"}	
		else:
			 respuesta = {"error": "Debe usar el Metodo Post"}
	except models.ProtectedError:
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

def ClienteDuplicar(request):
	respuesta = {}

	nombres = str(request.GET.get("nombres",""))
	apellidos = str(request.GET.get("apellidos",""))
	tipo_documento = str(request.GET.get("tipo_documento",""))
	nro_documento = str(request.GET.get("nro_documento",""))
	email = str(request.GET.get("email",""))
	telefono = str(request.GET.get("telefono",""))
	direccion = str(request.GET.get("direccion",""))
	area = str(request.GET.get("area",""))
	responsable = str(request.GET.get("responsable",""))
	referencia = str(request.GET.get("referencia",""))
	frecuencia = str(request.GET.get("frecuencia",""))
	zona_sector = str(request.GET.get("zona_sector",""))
	try:
		cliente = Cliente.objects.create(
					nombres = nombres,
					apellidos = apellidos,
					tipo_documento = tipo_documento,
					nro_documento = nro_documento,
					email = email,
					telefono = telefono,
					direccion = direccion,
					area = area,
					responsable = responsable,
					referencia = referencia,
					frecuencia = frecuencia,
					zona_sector = zona_sector,
					creador = request.user,
				)
		cliente.save()
		respuesta = {
				"success": "El Cliente se creo correctamenta", 
				"id": cliente.id
			}
		
	except Exception:
			respuesta = {"success": "Error al Agregar al Cliente"}
			raise

	return HttpResponse(
		json.dumps(respuesta),
		content_type="application/json"
	)