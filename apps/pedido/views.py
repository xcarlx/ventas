from django.shortcuts import render, get_object_or_404
from .models import *
from apps.producto.models import Producto
from  django.http import HttpResponse
import json
# from .forms import ProductoForm
from django.core.paginator import Paginator


def PedidoListar(request):

	limite = int(request.GET.get("limit","10"))
	pagina = int(request.GET.get("page","1"))
	orden = request.GET.get("sort","")
	filtros = request.GET.get("filter","")
	if len(filtros) == 0:
		pedido = Pedido.objects.filter(estado=False)	
	else:
		filtros = json.loads(filtros)
		cadFil = ""
		for filtro in filtros:
			cadFil = cadFil+filtro["property"]+"__icontains='"+filtro["value"]+"',"

		cadFil = cadFil[:-1]
		pedido = eval("Pedido.objects.filter("+cadFil+", estado=False)")
	total = pedido.count()
	if len(orden)>0:
		orden = json.loads(orden)[0]
		signo = "-" if orden["direction"] == "DESC" else ""
		orden = signo+orden["property"]
		pedido = pedido.order_by(orden)
	pedido = Paginator(pedido, limite) 
	pedido = pedido.page(pagina)

	return render(
		request, 
		"pedido/pedido.json",
		{
			'pedidos': pedido,
			'total':total
		},
		content_type= "application/json",
	)

def ProductoListar(request,idPe):
	idp = Pedido.objects.filter(id=idPe)
	idpe =  DetallePedido.objects.filter(pedido_id=idp).values('producto_id')
	producto = Producto.objects.exclude(id__in=idpe)
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

def DetallePedidoListar(request,idPe):
	idp = Pedido.objects.filter(id=idPe)
	detallepedido =  DetallePedido.objects.filter(pedido_id=idp)
	total = detallepedido.count()

	return render(
		request, 
		"pedido/detallepedido.json",
		{
			'detallepedidos': detallepedido,
			'total':total
		},
		content_type= "application/json",
	)
