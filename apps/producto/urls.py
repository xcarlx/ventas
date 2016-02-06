from django.conf.urls import url

urlpatterns = [
	url(r'productos.producto/listar/$', "apps.producto.views.ProductoListar", name='producto_listar'),
	url(r'productos.producto/eliminar/$', "apps.producto.views.ProductoEliminar", name='producto_eliminar'),
	url(r'productos.producto/crear/$', "apps.producto.views.ProductoCrear", name='tipoproducto_crear'),
	url(r'productos.producto/editar/$', "apps.producto.views.ProductoEditar", name='tipoproducto_editar'),
	url(r'productos.producto/subirfoto/$', "apps.producto.views.ProductoFotoSubir", name='tipoproducto_editar'),
	url(r'controles.controlproducto/listar/$', "apps.producto.views.ControlProductoListar", name='controlproducto_listar'),
	url(r'controles.controlproducto/crear/$', "apps.producto.views.ControlProductoCrear", name='controlproducto_crear'),
	url(r'controles.controlproducto/editar/$', "apps.producto.views.ControlProductoEditar", name='controlproducto_editar'),
	url(r'controles.controlproducto/eliminar/$', "apps.producto.views.ControlProductoEliminar", name='controlproducto_eliminar'),
	
	url(r'.reportes.reporteenvace/listar/$', "apps.producto.views.ReporteEnvaceListar", name='reporteenvace_listar'),


]

