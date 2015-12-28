from django.conf.urls import url

urlpatterns = [
	url(r'productos.producto/listar/$', "apps.producto.views.ProductoListar", name='producto_listar'),
	url(r'productos.producto/eliminar/$', "apps.producto.views.ProductoEliminar", name='producto_eliminar'),
	url(r'productos.producto/crear/$', "apps.producto.views.ProductoCrear", name='tipoproducto_crear'),
	url(r'productos.producto/editar/$', "apps.producto.views.ProductoEditar", name='tipoproducto_editar'),
	url(r'productos.producto/subirfoto/$', "apps.producto.views.ProductoFotoSubir", name='tipoproducto_editar'),
	
]

