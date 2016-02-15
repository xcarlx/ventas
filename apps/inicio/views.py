from django.shortcuts import render
from django.http import HttpResponse
import json, datetime   
from datetime import datetime   
from django.contrib.auth import authenticate, login, logout
from .models import *
from apps.pedido.models import * 
from apps.venta.models import * 
from django.core.paginator import Paginator
from django.utils import timezone
from apps.inicio.stylesheet import getStyleSheet 
from django.db.models import Sum

# Create your views here.

from reportlab.pdfgen import canvas
from apps.cliente.models import *
from reportlab.platypus import SimpleDocTemplate, Paragraph, TableStyle, Spacer,Table
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle, StyleSheet1
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.pagesizes import A4,A5, inch, landscape
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY
from reportlab.lib.units import inch
from reportlab.lib import colors
from io import BytesIO



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

def ReporteProductoListar(request):
	idp = request.GET.get("idproducto", None)
	fechaI = request.GET.get("finicio", None)
	fechaF = request.GET.get("ffin", None)
	detalleventa = DetalleVenta.objects.all().order_by('-id')
	totales = DetalleVenta.objects.all().aggregate(Sum('cantidad'), Sum('precio'))
	if fechaI != None and fechaF != None and idp != None:
		fechai = datetime.strptime(fechaI,  "%Y-%m-%dT%H:%M:%S")
		fechaf = datetime.strptime(fechaF,  "%Y-%m-%dT%H:%M:%S")
		detalleventa = DetalleVenta.objects.filter(producto_id = int(idp), venta__fecha__gte = fechai,  venta__fecha__lte = fechaf).order_by('-id')
		totales = DetalleVenta.objects.filter(producto_id = idp, venta__fecha__gte = fechai,  venta__fecha__lte = fechaf).aggregate(Sum('cantidad'), Sum('precio'))

	total = detalleventa.count()
	print(totales)
	return render(
		request,'inicio/reporteproducto.json',
		{
			'detalleventas': detalleventa,
			'total' : total,
			'totalcantidad' : totales['cantidad__sum'],
			'totalprecio' : totales['precio__sum'],
		},
		content_type="application/json",
	)

def ImprimirProductoListar(request, idproducto, fechaI, fechaF):
	
	response = HttpResponse(content_type='application/pdf')

	finicio = datetime.fromtimestamp(int(fechaI) / 1e3)
	ffin = datetime.fromtimestamp(int(fechaF) / 1e3)
	print(ffin)
	pdf_name = "reporte_producto.pdf" 
	buff = BytesIO()
	
	doc = SimpleDocTemplate(buff,
							pagesize=letter,
							rightMargin=50,
							leftMargin=50,
							topMargin=20,
							bottomMargin=18,
							)
	doc.pagesize = landscape(A5)
	productos = []
	producto = Producto.objects.get(id = int(idproducto))
	totales = DetalleVenta.objects.filter(producto_id = idproducto, venta__fecha__gte = finicio,  venta__fecha__lte = ffin).aggregate(Sum('cantidad'), Sum('precio'))
	styles = getSampleStyleSheet()
	header = Paragraph("GRUPOEJ - SRL." , getStyleSheet()['Title'])
	pro = Paragraph(producto.descripcion, getStyleSheet()['TopicTitle8'])
	productos.append(header)
	productos.append(Spacer(1, 0.2 * inch))	
	productos.append(Paragraph("REPORTE POR PRODUCTO." , getStyleSheet()['TopicTitle14']))
	productos.append(Spacer(1, 0.05 * inch))
	productos.append(pro)
	productos.append(Paragraph("<para>Fecha Inicio: "+finicio.strftime('%d/%m/%Y')+" &nbsp;&nbsp;&nbsp;"+" Fecha Fin:"+ffin.strftime('%d/%m/%Y')+"</para>", getStyleSheet()['TopicTitle8']))
	productos.append(Spacer(1, 0.05 * inch))

	productos.append(Paragraph("DETALLE", getStyleSheet()['TopicTitle10']))
	productos.append(Spacer(1, 0.1 * inch))

	headings = ('CLIENTE', "CANTIDAD", 'PRECIO')
	detalleventa = [
			(str(dv.venta.pedido.cliente.nombres)+" "+str(dv.venta.pedido.cliente.apellidos)+" / "+str(dv.venta.pedido.cliente.area)+ " / "+ str(dv.venta.pedido.cliente.responsable), 
			str(dv.cantidad), str(dv.precio)) for dv in DetalleVenta.objects.filter(producto_id=idproducto, venta__fecha__gte = finicio,  venta__fecha__lte = ffin)]
	data = ([headings] + detalleventa)

	data2 = [[Paragraph(cell, getStyleSheet()['TopicItemq0']) for cell in row] for row in data]
	t=Table(data2)
	style = TableStyle(
		[
			('BACKGROUND', (0, 0), (-1, 0), colors.gray),
			('LINEABOVE', (0,0), (-1,0), 2, colors.green),
			('LINEABOVE', (0,1), (-1,-1), 0.25, colors.black),
			('LINEBELOW', (0,-1), (-1,-1), 2, colors.green),
			('ALIGN', (1,1), (-1,-1), 'CENTER'),
		]
	)

	t.setStyle(style)
	t._argW[0]=4.5*inch
	t._argW[1]=0.8*inch
	t._argW[2]=0.8*inch
	productos.append(t)
	productos.append(Paragraph("CANTIDAD - TOTAL:( "+str(totales['cantidad__sum'])+" ) &nbsp;&nbsp;&nbsp;"+"PRECIO - TOTAL: ( "+str(totales['precio__sum'])+" S/)", getStyleSheet()['TopicTitle8Right']))
	doc.build(productos)
	response.write(buff.getvalue())
	buff.close()
	return response
