from django.shortcuts import render
from django.http import HttpResponse
import json
from django.contrib.auth import authenticate, login, logout
from .models import *

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

