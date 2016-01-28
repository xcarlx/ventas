# -*- coding: utf-8 -*-
from django.shortcuts import render, get_object_or_404
from .models import *
from apps.producto.models import Producto
from django.http import HttpResponse, JsonResponse
import json, datetime
from django.core.paginator import Paginator

 #report lab
from reportlab.pdfgen import canvas
from apps.cliente.models import *
from reportlab.platypus import SimpleDocTemplate, Paragraph, TableStyle
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.platypus import Table
from io import BytesIO

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
			filtros = filtros[:-1] + ", credito = False).order_by('-id')"
			ventas = eval(filtros)
		else:
			ventas = Venta.objects.filter(credito = False).order_by('-id')
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
		ventas = Venta.objects.filter(pk=findID, credito = False).order_by('-id')
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

def VentaCreditoListar(request):
	
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
			filtros = filtros[:-1] + ", credito = True).order_by('-id')"
			ventas = eval(filtros)
		else:
			ventas = Venta.objects.filter(credito = True).order_by('-id')
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
		ventas = Venta.objects.filter(pk=findID, credito = True).order_by('-id')
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



def ImprimirVenta(request):

    response = HttpResponse(content_type='application/pdf')
    pdf_name = "clientes.pdf"  # llamado clientes
    # la linea 26 es por si deseas descargar el pdf a tu computadora
    # response['Content-Disposition'] = 'attachment; filename=%s' % pdf_name
    buff = BytesIO()
    doc = SimpleDocTemplate(buff,
                            pagesize=letter,
                            rightMargin=40,
                            leftMargin=40,
                            topMargin=60,
                            bottomMargin=18,
                            )
    clientes = []
    styles = getSampleStyleSheet()
    header = Paragraph("Listado de Clientes", styles['Heading1'])
    clientes.append(header)
    headings = ('Nombre', 'Apellidos', 'Tipo Documento', 'Numero')
    allclientes = [(p.nombres, p.apellidos, p.tipo_documento, p.nro_documento) for p in Cliente.objects.all()]

    t = Table([headings] + allclientes)
    t.setStyle(TableStyle(
        # [
        #     ('GRID', (0, 0), (3, -1), 1, colors.dodgerblue),
        #     ('LINEBELOW', (0, 0), (-1, 0), 2, colors.darkblue),
        #     ('BACKGROUND', (0, 0), (-1, 0), colors.dodgerblue)
        # ]
        [
        	('INNERGRID', (0, 0), (-1, -1), 0.25, colors.black),
	     	('BOX', (0, 0), (-1, -1), 0.5, colors.black),
	     	('VALIGN', (0, 0), (-1, 0), 'MIDDLE'),
	     	('BACKGROUND', (0, 0), (-1, 0), colors.gray)
	    ]
    ))
    clientes.append(t)
    doc.build(clientes)
    response.write(buff.getvalue())
    buff.close()
    return response