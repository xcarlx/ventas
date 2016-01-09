from django.shortcuts import render, get_object_or_404
from .models import *
from apps.producto.models import Producto
from django.http import HttpResponse, JsonResponse
import json, datetime
from django.core.paginator import Paginator

def VentaListar(request):
	
	findID = request.GET.get("id", 0)

	if findID == 0:
		# Campos
		orden = request.GET.get("sort", "")
		filtro = request.GET.get("filter", "")
		limite = int(request.GET.get("limit", "0"))
		pagina = int(request.GET.get("page", "0"))
		# Filtro
		if len(filtro) > 0:
			filtros = "Venta.objects.filter("
			filtro = json.loads(filtro)
			for f in filtro:
				filtros = filtros + f["property"] + "__icontains='" + f["value"] + "',"
			filtros = filtros[:-1] + ")"
			ventas = eval(filtros)
		else:
			ventas = Venta.objects.all()
		# Orden
		if len(orden) > 0:
			orden = json.loads(orden)[0]
			tipo_orden = "-" if orden["direction"] == "DESC" else ""
			campo_orden = orden["property"]
			ventas = ventas.order_by(tipo_orden+campo_orden)
		total = ventas.count()
		# Paginacion
		if pagina > 0:
			ventas = Paginator(ventas, limite)
			ventas = ventas.page(pagina)
	else:
		ventas = Venta.objects.filter(pk=findID)
		total = ventas.count()
	
	return render(
		request,
		'venta/venta.json',
		{
			'ventas': ventas,
			'total' : total,
		},
		content_type="application/json",
	)

def DetalleVentaListar(request):

	ventaid = request.GET.get("idventa", 0)
	detalleventas = DetalleVenta.objects.filter(venta_id=ventaid)
	total = detalleventas.count()
	return render(
		request,
		'venta/detalleventa.json',
		{
			'detalleventas': detalleventas,
			'total' : total,
		},
		content_type="application/json",
	)
