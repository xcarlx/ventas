# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('venta', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='venta',
            name='igv',
            field=models.DecimalField(blank=True, max_digits=10, decimal_places=2, null=True),
        ),
        migrations.AlterField(
            model_name='venta',
            name='sub_total',
            field=models.DecimalField(blank=True, max_digits=10, decimal_places=2, null=True),
        ),
        migrations.AlterField(
            model_name='venta',
            name='total',
            field=models.DecimalField(blank=True, max_digits=10, decimal_places=2, null=True),
        ),
    ]
