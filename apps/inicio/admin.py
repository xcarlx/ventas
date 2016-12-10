from django.contrib import admin
from .models import Modulo, Menu
# Register your models here.

# class AdminModulo(admin.ModelAdmin):
# 	list_display_links = ['id','nombre','orden']
# 	list_editable = ['id','nombre', 'orden']

# class AdminMenu(admin.ModelAdmin):

# 	list_display_links = ['id','nombre','iconoclase','modulo','menupadre','orden','control']
# 	list_editable = ['id','nombre','iconoclase','modulo','menupadre','orden','control']

admin.site.register(Modulo, AdminModulo)
admin.site.register(Menu, AdminMenu)
