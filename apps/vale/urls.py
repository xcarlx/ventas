from django.conf.urls import url

urlpatterns = [
	url(r'vales.vale/listar/$', "apps.vale.views.ValeListar", name='vale_listar'),
	url(r'vales.vale/eliminar/$', "apps.vale.views.ValeEliminar", name='vale_eliminar'),
	url(r'vales.vale/crear/$', "apps.vale.views.ValeCrear", name='vale_crear'),
	# url(r'vales.vale/editar/$', "apps.vale.views.ValeEditar", name='vale_editar'),
]