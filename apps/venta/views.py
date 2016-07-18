# -*- coding: utf-8 -*-
from django.shortcuts import render, get_object_or_404
from .models import *
from apps.producto.models import Producto
from django.http import HttpResponse, JsonResponse
import json,datetime
from datetime import datetime   
from django.core.paginator import Paginator

from django.db.models import F, FloatField, Sum

from apps.inicio.stylesheet import getStyleSheet 

 #report lab
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

def VentaListar(request):
	totalVentas = Venta.objects.filter(credito = False, estado = 'ACTIVO').aggregate(Sum('total'))
	findID = request.GET.get("id", 0)
	if findID == 0:
		# Campos
		fechaI = request.GET.get("finicio", None)
		fechaF = request.GET.get("ffin", None)
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
			filtros = filtros[:-1] + ", credito = False, estado = 'ACTIVO').order_by('-id')"
			ventas = eval(filtros)
		else:
			ventas = Venta.objects.filter(credito = False, estado = 'ACTIVO').order_by('-id')
			totalVentas = Venta.objects.filter(credito = False, estado = 'ACTIVO').aggregate(Sum('total'))

		if fechaI != None and fechaF != None:
			fechai = datetime.strptime(fechaI,  "%Y-%m-%dT%H:%M:%S")
			fechaf = datetime.strptime(fechaF,  "%Y-%m-%dT%H:%M:%S")
			ventas = Venta.objects.filter(credito = False, estado = 'ACTIVO', fecha__gte = fechai, fecha__lte = fechaf).order_by('-id')
			total = ventas.count()
			totalVentas = Venta.objects.filter(credito = False, estado = 'ACTIVO', fecha__gte = fechai, fecha__lte = fechaf).aggregate(Sum('total'))
			
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
		ventas = Venta.objects.filter(pk=findID, credito = False, estado = 'ACTIVO').order_by('-id')
		total = ventas.count()
		totalVentas = Venta.objects.filter(credito = False, estado = 'ACTIVO').aggregate(Sum('total'))
	
	return render(
		request,
		'venta/venta.json',
		{
			'ventas': ventas,
			'total' : total,
			'totalventas' : totalVentas['total__sum'],
		},
		content_type="application/json",
	)

def VentaCreditoListar(request):
	totalVentas = Venta.objects.filter(credito = True, estado = 'ACTIVO').aggregate(Sum('total'))
	findID = request.GET.get("id", 0)

	if findID == 0:
		# Campos
		fechaI = request.GET.get("finicio", None)
		fechaF = request.GET.get("ffin", None)
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
			filtros = filtros[:-1] + ", credito = True, estado = 'ACTIVO').order_by('-id')"
			ventas = eval(filtros)
		else:
			ventas = Venta.objects.filter(credito = True, estado = 'ACTIVO').order_by('-id')
			totalVentas = Venta.objects.filter(credito = True, estado = 'ACTIVO').aggregate(Sum('total'))

		if fechaI != None and fechaF != None:
			fechai = datetime.strptime(fechaI,  "%Y-%m-%dT%H:%M:%S")
			fechaf = datetime.strptime(fechaF,  "%Y-%m-%dT%H:%M:%S")
			ventas = Venta.objects.filter(credito = True, estado = 'ACTIVO', fecha__gte = fechai, fecha__lte = fechaf).order_by('-id')
			total = ventas.count()
			totalVentas = Venta.objects.filter(credito = True, estado = 'ACTIVO', fecha__gte = fechai, fecha__lte = fechaf).aggregate(Sum('total'))
			
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
		ventas = Venta.objects.filter(pk=findID, credito = True, estado = 'ACTIVO').order_by('-id')
		total = ventas.count()
		totalVentas = Venta.objects.filter(credito = True, estado = 'ACTIVO').aggregate(Sum('total'))
	
	return render(
		request,
		'venta/venta.json',
		{
			'ventas': ventas,
			'total' : total,
			'totalventas' : totalVentas['total__sum'],
		},
		content_type="application/json",
	)

def VentaAnuladoListar(request):

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
			filtros = filtros[:-1] + ", estado = 'ANULADO').order_by('-id')"
			ventas = eval(filtros)
		else:
			ventas = Venta.objects.filter(estado = 'ANULADO').order_by('-id')
		# Orden
		if len(orden) > 0:
			orden = json.loads(orden)[0]
			tipo_orden = "-" if orden["direction"] == "DESC" else ""
			campo_orden = orden["property"]
			ventas = ventas.order_by(tipo_orden+campo_orden)
		total = ventas.count()
		totalVentas = Venta.objects.filter(estado = 'ANULADO').aggregate(Sum('total'))
		# Paginacion
		if pagina > 0:
			ventas = Paginator(ventas, limite)
			ventas = ventas.page(pagina)
	else:
		ventas = Venta.objects.filter(pk=findID, estado = 'ANULADO').order_by('-id')
		total = ventas.count()
	
	return render(
		request,
		'venta/venta.json',
		{
			'ventas': ventas,
			'total' : total,
			'totalventas' : totalVentas['total__sum'],
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

def DetalleVentaCreditoListar(request):

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

def DetalleVentaAnuladoListar(request):
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

def VentaCreditoPagar(request):

	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		idventa = int(registros[0]['id'])
		for reg in registros:
			ids = reg["id"]
			reg = Venta.objects.get(pk=ids)
			reg.credito = False
			reg.save()

		response_data = {"success": "EL pago se genero correctamente"}
	else:
		response_data = {"error": "Error al generar el Pago"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)

def VentaAnular(request):

	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		idventa = int(registros[0]['id'])
		for reg in registros:
			ids = reg["id"]
			reg = Venta.objects.get(pk=ids)
			reg.estado = "ANULADO"
			reg.save()

		response_data = {"success": "La Venta se anulo correctamente"}
	else:
		response_data = {"error": "Error al Anular la Venta"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)

def VentaAnuladaActivar(request):

	response_data = {}
	if request.method == 'POST':
		registros = json.loads(request.POST["data"])
		idventa = int(registros[0]['id'])
		for reg in registros:
			ids = reg["id"]
			reg = Venta.objects.get(pk=ids)
			reg.estado = "ACTIVO"
			reg.save()

		response_data = {"success": "La Venta se activo correctamente"}
	else:
		response_data = {"error": "Error al Activar la Venta"}

	return HttpResponse(
		json.dumps(response_data),
		content_type="application/json"
	)


def ImprimirVenta(request, idventa):
	
	response = HttpResponse(content_type='application/pdf')
	pdf_name = "ventas.pdf" 
	buff = BytesIO()
	
	doc = SimpleDocTemplate(buff,
							pagesize=letter,
							rightMargin=50,
							leftMargin=50,
							topMargin=20,
							bottomMargin=18,
							)
	doc.pagesize = landscape(A5)
	ventas = []
	venta = Venta.objects.get(id = idventa)

	styles = getSampleStyleSheet()
	header = Paragraph("GRUPOEJ - SRL." , getStyleSheet()['Title'])
	documento = Paragraph("DOCUMENTO: "+(str(venta.tipo_documento))+" "+(str(venta.numero_correlativo))+"-"+(str(venta.numero_documento)) , getStyleSheet()['TopicItem1'])
	cliente = Paragraph("CLIENTE / RAZON SOCIAL: "+(str(venta.pedido.cliente.nombres))+" "+(str(venta.pedido.cliente.apellidos))+" - "+(str(venta.pedido.cliente.area)) , getStyleSheet()['TopicItem1'])
	ventas.append(header)
	ventas.append(Spacer(1, 0.2 * inch))
	ventas.append(documento)
	ventas.append(Spacer(1, 0.05 * inch))
	ventas.append(cliente)
	ventas.append(Spacer(1, 0.05 * inch))
	ventas.append(Paragraph(venta.pedido.cliente.tipo_documento+": "+venta.pedido.cliente.nro_documento+" ",getStyleSheet()['TopicItem1']))
	ventas.append(Spacer(1, 0.05 * inch))
	ventas.append(Paragraph("DIRECCION: "+venta.pedido.cliente.direccion+" ",getStyleSheet()['TopicItem1']))
	ventas.append(Spacer(1, 0.05 * inch))
	ventas.append(Paragraph("FECHA DE COMPRA: "+datetime.strftime(venta.fecha, "%d-%m-%Y")+" ",getStyleSheet()['TopicItem1']))
	ventas.append(Spacer(1, 0.1 * inch))
	ventas.append(Paragraph("DETALLE DE LA COMPRA", getStyleSheet()['TopicTitle10']))
	ventas.append(Spacer(1, 0.1 * inch))

	headings = ('DESCRIPCION', 'PRECIO', "CANTIDAD", 'SUBTOTAL')
	detalleventa = [(str(dv.producto.descripcion), str(dv.precio), str(dv.cantidad), str(dv.precio*dv.cantidad)) for dv in DetalleVenta.objects.filter(venta_id=idventa)]
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
	t._argW[0]=4*inch
	t._argW[1]=0.8*inch
	t._argW[2]=0.8*inch
	t._argW[3]=0.8*inch
	ventas.append(t)
	ventas.append(Paragraph("Sub total:__ "+str(venta.sub_total)+" S/", getStyleSheet()['TopicTitle8Right']))
	ventas.append(Paragraph("IGV:___"+str(venta.igv)+" S/", getStyleSheet()['TopicTitle8Right']))
	ventas.append(Paragraph("Total:__ "+str(venta.total)+" S/", getStyleSheet()['TopicTitle8Right']))
	doc.build(ventas)
	response.write(buff.getvalue())
	buff.close()
	return response

def ImprimirVentasCreditos(request, fechaI, fechaF):
	
	response = HttpResponse(content_type='application/pdf')
	finicio = datetime.fromtimestamp(int(fechaI) / 1e3)
	ffin = datetime.fromtimestamp(int(fechaF) / 1e3)

	pdf_name = "ventasacredito.pdf" 
	buff = BytesIO()
	
	doc = SimpleDocTemplate(buff,
							pagesize=letter,
							rightMargin=50,
							leftMargin=50,
							topMargin=20,
							bottomMargin=18,
							)
	doc.pagesize = landscape(A4)
	ventas = []

	totales = Venta.objects.filter(fecha__gte = finicio,  fecha__lte = ffin, credito = True , estado = 'ACTIVO').aggregate(precio_total=Sum(F('total')))
	
	ventas.append(Spacer(1, 0.05 * inch))

	header = Paragraph("GRUPOEJ - SRL." , getStyleSheet()['Title'])
	subtitel = Paragraph("Ventas al credito." , getStyleSheet()['Subtitle'])
	ventas.append(header)
	ventas.append(Spacer(1, 0.05 * inch))
	ventas.append(subtitel)
	ventas.append(Spacer(1, 0.05 * inch))
	ventas.append(Paragraph("<para>Fecha Inicio: "+finicio.strftime('%d/%m/%Y')+" &nbsp;&nbsp;&nbsp;"+" Fecha Fin:"+ffin.strftime('%d/%m/%Y')+"</para>", getStyleSheet()['TopicTitle8']))
	ventas.append(Spacer(1, 0.05 * inch))
	ventas.append(Paragraph("DETALLE", getStyleSheet()['TopicTitle10']))
	ventas.append(Spacer(1, 0.1 * inch))
	styles = getSampleStyleSheet()

	headings = ('DNI/RUC', 'CLIENTE', "RESPONSABLE", 'NRO_VENTA','FECHA' ,'TOTAL')
	venta = [(str(v.pedido.cliente.nro_documento), str(v.pedido.cliente.nombres)+"/"+str(v.pedido.cliente.apellidos), str(v.pedido.cliente.responsable), str(v.numero_correlativo)+"-"+str(v.numero_documento), str(v.fecha), str(v.total)) for v in Venta.objects.filter(fecha__gte = finicio,  fecha__lte = ffin, credito = True , estado = 'ACTIVO')]
	data = ([headings] + venta)

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
	t._argW[0]=0.8*inch
	t._argW[1]=2.8*inch
	t._argW[2]=2.8*inch
	t._argW[3]=0.9*inch
	t._argW[4]=0.9*inch
	t._argW[5]=0.9*inch
	ventas.append(t)
	ventas.append(Paragraph("Total: S/  "+str(totales['precio_total']), getStyleSheet()['TopicTitle8Right']))
	# ventas.append(Paragraph("IGV:___"+str(venta.igv)+" S/", getStyleSheet()['TopicTitle8Right']))
	# ventas.append(Paragraph("Total:__ "+str(venta.total)+" S/", getStyleSheet()['TopicTitle8Right']))
	doc.build(ventas)
	response.write(buff.getvalue())
	buff.close()
	return response





