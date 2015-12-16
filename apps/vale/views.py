# -*- coding: utf-8 -*-
from django.shortcuts import render, get_object_or_404
from .models import Vale, DetalleVale
from .forms import ValeForm
from apps.producto.models import Producto
from django.http import HttpResponse, JsonResponse
from apps.cliente.models import Cliente
import json
from django.core.paginator import Paginator

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
			filtros = filtros[:-1] + ", venta__isnull=True)"
			vales = eval(filtros)
		else:
			vales = Vale.objects.filter(venta__isnull=True)
		# Orden
		if len(orden) > 0:
			orden = json.loads(orden)[0]
			tipo_orden = "-" if orden["direction"] == "DESC" else ""
			campo_orden = orden["property"]
			vales = vales.order_by(tipo_orden+campo_orden)
		total = vales.count()
		# Paginacion
		if pagina > 0:
			vales = Paginator(vales, limite)
			vales = vales.page(pagina)
	else:
		vales = Vale.objects.filter(pk=findID)
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
		v = Vale.objects.filter(venta__isnull=True)
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
		response_data = {"error": "Error al crear el módulo"}

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
		response_data = {"error": "Error al actualizar el registro"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)


def ProductoListar(request,idVa):
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

def DetalleValeListar(request,idVa):
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
			detallevales = Paginator(detallevales, limite)
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