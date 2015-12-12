# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vale', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vale',
            name='observaciones',
            field=models.TextField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='vale',
            name='total',
            field=models.DecimalField(decimal_places=2, null=True, max_digits=10, blank=True),
        ),
    ]
