"""grupoej URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    # url(r'^media/(?P<path>.*)$', 'django.views.static.serve',{'document_root':settings.MEDIA_ROOT}),
    url(r'^', include("apps.inicio.urls")),
    url(r'^grupoej.producto.', include("apps.producto.urls")),
    url(r'^grupoej.cliente.', include("apps.cliente.urls")),
    url(r'^grupoej.pedido.', include("apps.pedido.urls")),
    url(r'^grupoej.vale.', include("apps.vale.urls")),
    url(r'^grupoej.guia.', include("apps.guia.urls")),
    url(r'^grupoej.venta.', include("apps.venta.urls")),
    # url(r'^grupoej.inicio.', include("apps.inicio.urls")),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
