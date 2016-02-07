from django.conf.urls import url
from apps.inicio.views import *
urlpatterns = [
	url(r'^$', Inicio),
	url(r'login/$', Login),
	url(r'logout/$', Logout),
	url(r'menus/$', Menus),
	url(r'pedidosvencidos.pedidovencido/listar/$', PedidoVencidosListar),
	url(r'pedidospendientes.pedidopendiente/listar/$', PedidoPendienteListar),

]
