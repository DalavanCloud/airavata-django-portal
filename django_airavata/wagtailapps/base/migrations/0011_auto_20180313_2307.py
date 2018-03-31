# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-03-13 23:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_airavata_wagtail_base', '0010_aboutpage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='aboutpage',
            name='contact_mail',
            field=models.CharField(blank=True, help_text='Contact Mail', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='aboutpage',
            name='contact_phone',
            field=models.CharField(blank=True, help_text='Contact Phone', max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='aboutpage',
            name='contact_website',
            field=models.CharField(blank=True, help_text='Contact Website', max_length=255, null=True),
        ),
    ]
