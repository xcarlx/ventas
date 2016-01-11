from django.shortcuts import render
from django.http import HttpResponse
import json
from django.contrib.auth import authenticate, login, logout
from .models import *
from apps.pedido.models import * 
from django.core.paginator import Paginator
from django.utils import timezone

# Create your views here.

def Inicio(request):
	return render(
		request, 
		'inicio.html',
	)

def Login(request):
	_result = {}
	_result["success"] = False
	if request.method == 'POST':
		user = authenticate(
			username = request.POST["user"],
			password = request.POST["password"]
		)
		if user is not None:
			if user.is_active:
				login(request, user)
				_result["id"] = user.id
				_result["username"] = user.username.title() # capfirst
				_result["success"] = True
				_result["msg"] = "Usuario autenticado"
			else:
				_result["msg"] = "La cuenta de usuario no está activa"
		else:
			_result["msg"] = "Usuario o contraseña no válidos"

	_result = HttpResponse(json.dumps(_result, ensure_ascii=False), content_type="application/json; encoding=utf-8")

	return _result

def Logout(request):
	_result = {}
	_result["success"] = False
	# Hacer TRY
	logout(request)
	_result["success"] = True
	_result["msg"] = "Usuario Desconectado"

	_result = HttpResponse(json.dumps(_result, ensure_ascii=False), content_type="application/json; encoding=utf-8")

	return _result

def Menus(request):
	menus = Menu.objects.all()
	modulos = Modulo.objects.filter(id__in=menus.values_list("modulo_id"))

	return render(
		request,
		'inicio/menus.json',
		{
			'modulos':modulos,
			'menus':menus,
		},
		content_type ="application/json"
		)


def PedidoVencidosListar(request):

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
			filtros = filtros[:-1] + ", fecha_entrega__lt = timezone.now(), estado=False)"
			pedidos = eval(filtros)
		else:
			pedidos = Pedido.objects.filter(fecha_entrega__lt = timezone.now(), estado=False)
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
		pedidos = Pedido.objects.filter(fecha_entrega__lt = timezone.now(), estado=False)
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

def PedidoPendienteListar(request):

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
			filtros = filtros[:-1] + ", fecha_entrega__gte = timezone.now(), estado=False)"
			pedidos = eval(filtros)
		else:
			pedidos = Pedido.objects.filter(fecha_entrega__gte= timezone.now(), estado=False)
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
		pedidos = Pedido.objects.filter(fecha_entrega__gte = timezone.now(), estado=False)
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