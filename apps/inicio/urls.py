from django.conf.urls import url

urlpatterns = [
	url(r'^$', "apps.inicio.views.Inicio", name='home'),
	url(r'login/$', "apps.inicio.views.Login", name='login'),
	url(r'logout/$', "apps.inicio.views.Logout", name='logout'),
	url(r'menus/$', "apps.inicio.views.Menus", name='menu'),
]
