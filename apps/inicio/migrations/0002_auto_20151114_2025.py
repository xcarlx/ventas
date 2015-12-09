# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('inicio', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('creado', models.DateTimeField(auto_now_add=True)),
                ('actualizado', models.DateTimeField(auto_now=True)),
                ('nombre', models.CharField(max_length=100)),
                ('iconoclase', models.CharField(blank=True, null=True, max_length=100)),
                ('orden', models.SmallIntegerField(default=1)),
                ('control', models.CharField(default='', max_length=250)),
                ('creador', models.ForeignKey(related_name='+', to=settings.AUTH_USER_MODEL)),
                ('editor', models.ForeignKey(blank=True, related_name='+', null=True, to=settings.AUTH_USER_MODEL)),
                ('menupadre', models.ForeignKey(blank=True, related_name='+', null=True, to='inicio.Menu')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Modulo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('creado', models.DateTimeField(auto_now_add=True)),
                ('actualizado', models.DateTimeField(auto_now=True)),
                ('nombre', models.CharField(max_length=20)),
                ('orden', models.SmallIntegerField()),
                ('creador', models.ForeignKey(related_name='+', to=settings.AUTH_USER_MODEL)),
                ('editor', models.ForeignKey(blank=True, related_name='+', null=True, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='menu',
            name='modulo',
            field=models.ForeignKey(to='inicio.Modulo'),
        ),
    ]
