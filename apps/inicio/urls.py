from django.conf.urls import url

urlpatterns = [
	url(r'^$', "apps.inicio.views.Inicio", name='home'),
	url(r'login/$', "apps.inicio.views.Login", name='login'),
	url(r'logout/$', "apps.inicio.views.Logout", name='logout'),
	url(r'menus/$', "apps.inicio.views.Menus", name='menu'),
	url(r'pedidosvencidos.pedidovencido/listar/$', "apps.inicio.views.PedidoVencidosListar", name='menu'),
	url(r'pedidospendientes.pedidopendiente/listar/$', "apps.inicio.views.PedidoPendienteListar", name='menu'),

]
