# -*- coding: utf-8 -*-
from django.shortcuts import render, get_object_or_404
from .models import Vale
# from ..formstotal.modulo import ModuloForm
from django.http import HttpResponse, JsonResponse
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
			filtros = filtros[:-1] + ", venta__isnull="+True+")"
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
		vales = Vale.objects.filter(pk=findID, venta__isnull=True)
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