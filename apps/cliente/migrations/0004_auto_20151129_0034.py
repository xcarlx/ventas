# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cliente', '0003_auto_20151102_0402'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tipocliente',
            name='creador',
        ),
        migrations.RemoveField(
            model_name='tipocliente',
            name='editor',
        ),
        migrations.AlterField(
            model_name='cliente',
            name='tipocliente',
            field=models.CharField(default='NATURAL', choices=[('JURIDICA', 'JURIDICA'), ('NATURAL', 'NATURAL')], max_length=8),
        ),
        migrations.DeleteModel(
            name='TipoCliente',
        ),
    ]
