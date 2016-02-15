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

def getStyleSheet():
	"""Returns a stylesheet object"""
	stylesheet = StyleSheet1()

	stylesheet.add(ParagraphStyle(name='Normal',
								  fontName='Times-Roman',
								  fontSize=10,
								  leading=12,
								  spaceBefore=4,
								  spaceAfter=4,
								  wordWrap = "CJK")
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
	stylesheet.add(ParagraphStyle(name='TopicTitle8',
								  parent=stylesheet['Normal'],
								  fontName = 'Times-Bold',
								  fontSize=8,
								  leading=8,
								  spaceAfter=6,
								  ),
				   alias='topic-title8')	
	stylesheet.add(ParagraphStyle(name='TopicTitle8Right',
								  parent=stylesheet['Normal'],
								  fontName = 'Times-Bold',
								  fontSize=8,
								  leading=8,
								  rightIndent=40,
								  spaceAfter=6,
								  alignment= TA_RIGHT
								  ),
				   alias='topic-title8-right')

	for i in range(0, 15):
		indent = 18*i
		stylesheet.add(ParagraphStyle(name='TopicItem%s' % i,
								  parent=stylesheet['Normal'],
								  fontName = 'Times-Roman',
								  fontSize=9,
								  leftIndent=indent,
								  spaceBefore=0,
								  spaceAfter=0,
								  ),
				   alias='topic-item-%s' % i)

	for i in range(0, 15):
		indent = 18*i
		stylesheet.add(ParagraphStyle(name='TopicItemq%s' % i,
								  parent=stylesheet['Normal'],
								  fontName = 'Times-Roman',
								  fontSize=8,
								  leftIndent=indent,
								  spaceBefore=0,
								  spaceAfter=0,
								  wordWrap = 'CJK',
								  ),
				   alias='topic-itemq-%s' % i)

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