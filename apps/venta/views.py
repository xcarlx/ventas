# -*- coding: utf-8 -*-
from django.shortcuts import render, get_object_or_404
from .models import *
from apps.producto.models import Producto
from django.http import HttpResponse, JsonResponse
import json,datetime
from datetime import datetime   
from django.core.paginator import Paginator

from django.db.models import Sum
 #report lab
from reportlab.pdfgen import canvas
from apps.cliente.models import *
from reportlab.platypus import SimpleDocTemplate, Paragraph, TableStyle, Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle, StyleSheet1
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.pagesizes import A4,A5, inch, landscape
from reportlab.platypus import Table
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
	pdf_name = "ventas.pdf"  # llamado clientes
	# la linea 26 es por si deseas descargar el pdf a tu computadora
	# response['Content-Disposition'] = 'attachment; filename=%s' % pdf_name
	buff = BytesIO()
	
	doc = SimpleDocTemplate(buff,
							pagesize=letter,
							rightMargin=20,
							leftMargin=20,
							topMargin=20,
							bottomMargin=18,
							)
	doc.pagesize = landscape(A5)
	ventas = []
	venta = Venta.objects.get(id = idventa)

	styles = getSampleStyleSheet()
	header = Paragraph("REPORTE DE VENTA" , getStyleSheet()['Title'])
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
	detalleventa = [(dv.producto.descripcion, dv.precio, dv.cantidad, (dv.precio*dv.cantidad)) for dv in DetalleVenta.objects.filter(venta_id=idventa)]

	t = Table([headings] + detalleventa)
	t.setStyle(TableStyle(
		# [
		#     ('GRID', (0, 0), (3, -1), 1, colors.dodgerblue),
		#     ('LINEBELOW', (0, 0), (-1, 0), 2, colors.darkblue),
		#     ('BACKGROUND', (0, 0), (-1, 0), colors.dodgerblue)
		# ]
		# [
		# 	('INNERGRID', (0, 0), (-1, -1), 0.25, colors.black),
		# 	('BOX', (0, 0), (-1, -1), 0.5, colors.black),
		# 	('VALIGN', (0, 0), (-1, 0), 'MIDDLE'),
		# 	('BACKGROUND', (0, 0), (-1, 0), colors.gray)
		# ]
		# [
		# 	('BACKGROUND',(1,1),(-2,-2),colors.green),
		# 	('TEXTCOLOR',(0,0),(1,-1),colors.red)
		# ]

			[
				('BACKGROUND', (0, 0), (-1, 0), colors.gray),
				('LINEABOVE', (0,0), (-1,0), 2, colors.green),
				('LINEABOVE', (0,1), (-1,-1), 0.25, colors.black),
				('LINEBELOW', (0,-1), (-1,-1), 2, colors.green),
				('ALIGN', (1,1), (-1,-1), 'CENTER')
			]
		))
	t._argW[0]=4.5*inch
	# t.wrapOn(, 50, 50)
	# t.drawOn(, 100,600)
	ventas.append(t)
	ventas.append(Paragraph("Sub total:__ "+str(venta.sub_total)+" S/", getStyleSheet()['TopicTitle10Right']))
	ventas.append(Paragraph("IGV:___"+str(venta.igv)+" S/", getStyleSheet()['TopicTitle10Right']))
	ventas.append(Paragraph("Total:__ "+str(venta.total)+" S/", getStyleSheet()['TopicTitle10Right']))
	doc.build(ventas)
	response.write(buff.getvalue())
	buff.close()
	return response



def getStyleSheet():
	"""Returns a stylesheet object"""
	stylesheet = StyleSheet1()

	stylesheet.add(ParagraphStyle(name='Normal',
								  fontName='Times-Roman',
								  fontSize=10,
								  leading=12,
								  spaceBefore=4,
								  spaceAfter=4)
				   )

	stylesheet.add(ParagraphStyle(name='DocInfo',
								  parent=stylesheet['Normal'],
								  leading=12,
								  spaceBefore=0,
								  spaceAfter=0)
				   )

	stylesheet.add(ParagraphStyle(name='Comment',
								  fontName='Times-Italic')
				   )

	stylesheet.add(ParagraphStyle(name='Indent1',
								  leftIndent=36,
								  firstLineIndent=0)
				   )
	
	stylesheet.add(ParagraphStyle(name='BodyText',
								  parent=stylesheet['Normal'],
								  spaceBefore=6)
				   )
	stylesheet.add(ParagraphStyle(name='Italic',
								  parent=stylesheet['BodyText'],
								  fontName = 'Times-Italic')
				   )

	stylesheet.add(ParagraphStyle(name='Heading1',
								  parent=stylesheet['Normal'],
								  fontName = 'Times-Bold',
								  fontSize=20,
								  leading=20,
								  spaceBefore=10,
								  spaceAfter=6),
				   alias='h1')

	stylesheet.add(ParagraphStyle(name='Heading2',
								  parent=stylesheet['Normal'],
								  fontName = 'Times-Bold',
								  fontSize=18,
								  leading=18,
								  spaceBefore=10,
								  spaceAfter=6),
				   alias='h2')
	
	stylesheet.add(ParagraphStyle(name='Heading3',
								  parent=stylesheet['Normal'],
								  fontName = 'Times-BoldItalic',
								  fontSize=16,
								  leading=16,
								  spaceBefore=10,
								  spaceAfter=6),
				   alias='h3')

	stylesheet.add(ParagraphStyle(name='Heading4',
								  parent=stylesheet['Normal'],
								  fontName = 'Times-BoldItalic',
								  fontsize=14,
								  leading=14,
								  spaceBefore=8,
								  spaceAfter=4),
				   alias='h4')

	stylesheet.add(ParagraphStyle(name='Heading5',
								  parent=stylesheet['Normal'],
								  fontName = 'Times-BoldItalic',
								  fontsize=13,
								  leading=13,
								  spaceBefore=8,
								  spaceAfter=4),
				   alias='h5')

	stylesheet.add(ParagraphStyle(name='Heading6',
								  parent=stylesheet['Normal'],
								  fontName = 'Times-BoldItalic',
								  fontsize=12,
								  leading=12,
								  spaceBefore=8,
								  spaceAfter=4),
				   alias='h6')

	stylesheet.add(ParagraphStyle(name='Title',
								  parent=stylesheet['Normal'],
								  fontName = 'Times-Bold',
								  fontSize=22,
								  leading=22,
								  spaceAfter=8,
								  alignment=TA_CENTER
								  ),
				   alias='title')

	stylesheet.add(ParagraphStyle(name='Subtitle',
								  parent=stylesheet['Normal'],
								  fontName = 'Times-Bold',
								  fontSize=20,
								  leading=20,
								  spaceAfter=6,
								  alignment=TA_CENTER
								  ),
				   alias='subtitle')

	stylesheet.add(ParagraphStyle(name='TopicTitle',
								  parent=stylesheet['Normal'],
								  fontName = 'Times-Bold',
								  fontSize=18,
								  leading=14,
								  spaceAfter=6,
								  ),
				   alias='topic-title')

	stylesheet.add(ParagraphStyle(name='TopicTitle14',
								  parent=stylesheet['Normal'],
								  fontName = 'Times-Bold',
								  fontSize=14,
								  leading=14,
								  spaceAfter=6,
								  ),
				   alias='topic-title14')
	stylesheet.add(ParagraphStyle(name='TopicTitle10',
								  parent=stylesheet['Normal'],
								  fontName = 'Times-Bold',
								  fontSize=10,
								  leading=10,
								  spaceAfter=6,
								  ),
				   alias='topic-title10')	
	stylesheet.add(ParagraphStyle(name='TopicTitle10Right',
								  parent=stylesheet['Normal'],
								  fontName = 'Times-Bold',
								  fontSize=10,
								  leading=10,
								  rightIndent=30,
								  spaceAfter=6,
								  alignment= TA_RIGHT
								  ),
				   alias='topic-title10-right')

	for i in range(0, 15):
		indent = 18*i
		stylesheet.add(ParagraphStyle(name='TopicItem%s' % i,
								  parent=stylesheet['Normal'],
								  fontName = 'Times-Roman',
								  fontSize=10,
								  leftIndent=indent,
								  spaceBefore=0,
								  spaceAfter=0,
								  ),
				   alias='topic-item-%s' % i)

	stylesheet.add(ParagraphStyle(name='UnorderedList',
								  parent=stylesheet['Normal'],
								  firstLineIndent=0,
								  leftIndent=18,
								  bulletIndent=9,
								  spaceBefore=0,
								  bulletFontName='Symbol'),
				   alias='ul')

	stylesheet.add(ParagraphStyle(name='Definition',
								  parent=stylesheet['Normal'],
								  firstLineIndent=0,
								  leftIndent=36,
								  bulletIndent=0,
								  spaceAfter=2,
								  spaceBefore=2,
								  bulletFontName='Times-BoldItalic'),
				   alias='dl')

	stylesheet.add(ParagraphStyle(name='OrderedList',
								  parent=stylesheet['Definition']),
				   alias='ol')

	stylesheet.add(ParagraphStyle(name='Code',
								  parent=stylesheet['Normal'],
								  fontName='Courier',
								  textColor=colors.navy,
								  fontSize=8,
								  leading=8.8,
								  leftIndent=36,
								  firstLineIndent=0))

	stylesheet.add(ParagraphStyle(name='FunctionHeader',
								  parent=stylesheet['Normal'],
								  fontName='Courier-Bold',
								  fontSize=8,
								  leading=8.8))

	stylesheet.add(ParagraphStyle(name='DocString',
								  parent=stylesheet['Normal'],
								  fontName='Courier',
								  fontSize=8,
								  leftIndent=18,
								  leading=8.8))

	stylesheet.add(ParagraphStyle(name='DocStringIndent',
								  parent=stylesheet['Normal'],
								  fontName='Courier',
								  fontSize=8,
								  leftIndent=36,
								  leading=8.8))

	stylesheet.add(ParagraphStyle(name='URL',
								  parent=stylesheet['Normal'],
								  fontName='Courier',
								  textColor=colors.navy,
								  alignment=TA_CENTER),
				   alias='u')
 
	stylesheet.add(ParagraphStyle(name='Centred',
								  parent=stylesheet['Normal'],
								  alignment=TA_CENTER
								  ))

	stylesheet.add(ParagraphStyle(name='Caption',
								  parent=stylesheet['Centred'],
								  fontName='Times-Italic'
								  ))
	
	return stylesheet