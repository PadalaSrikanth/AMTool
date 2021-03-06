# Generated by Django 3.0.3 on 2020-02-28 05:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BackupAndSan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('device_type', models.CharField(max_length=30)),
                ('device_name', models.CharField(max_length=50)),
                ('ip_address', models.CharField(max_length=20)),
                ('management_ip_address', models.CharField(max_length=20)),
                ('serial_number', models.CharField(max_length=50)),
                ('disks_drives', models.SmallIntegerField()),
                ('disks_drives_capacity', models.SmallIntegerField()),
                ('disks_drives_capacity_type', models.SmallIntegerField()),
                ('amc', models.DateField()),
                ('mac', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='PhysicalServers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=50)),
                ('rack_name', models.CharField(max_length=50)),
                ('server_name', models.CharField(max_length=50)),
                ('os_name', models.CharField(max_length=100)),
                ('ip_address', models.CharField(max_length=20)),
                ('idrac_ip', models.CharField(max_length=20)),
                ('domain', models.CharField(max_length=50)),
                ('cpu', models.IntegerField()),
                ('core_per_cpu', models.IntegerField()),
                ('hyper_threading', models.CharField(max_length=50)),
                ('memory', models.SmallIntegerField()),
                ('memory_type', models.BooleanField(default=True)),
                ('storage', models.IntegerField()),
                ('storage_type', models.BooleanField(default=True)),
                ('prevision_date', models.DateField()),
                ('server_type', models.CharField(max_length=50)),
                ('make', models.CharField(max_length=50)),
                ('model', models.CharField(max_length=50)),
                ('project_name', models.CharField(max_length=100)),
                ('bu_code', models.CharField(max_length=100)),
                ('dept_name', models.CharField(max_length=50)),
                ('server_role', models.CharField(max_length=50)),
                ('serial_number', models.CharField(max_length=50)),
                ('project_manager_name', models.CharField(max_length=100)),
                ('project_manager_email', models.EmailField(max_length=254)),
                ('support_member_name', models.CharField(max_length=100)),
                ('support_member_email', models.EmailField(max_length=254)),
                ('amc', models.DateField()),
                ('assert_number', models.CharField(max_length=50)),
                ('backup', models.BooleanField(default=True)),
                ('monitoring', models.BooleanField(default=True)),
                ('server_status', models.IntegerField()),
                ('comments', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='VMHardware',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=50)),
                ('chassis', models.CharField(max_length=50)),
                ('service_tag', models.CharField(max_length=50)),
                ('slot_number', models.CharField(max_length=50)),
                ('serial_number', models.CharField(max_length=50)),
                ('host_name', models.CharField(max_length=50)),
                ('ip_address', models.CharField(max_length=20)),
                ('idrac_ip', models.CharField(max_length=20)),
                ('management_ip_address', models.CharField(max_length=20)),
                ('os_name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('cpu', models.SmallIntegerField()),
                ('core', models.IntegerField()),
                ('hyper_threading', models.CharField(max_length=50)),
                ('logical_processor', models.SmallIntegerField()),
                ('ram', models.SmallIntegerField()),
                ('ram_type', models.SmallIntegerField()),
                ('hdd', models.SmallIntegerField()),
                ('hdd_type', models.SmallIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='VMServers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=50)),
                ('server_os', models.CharField(max_length=50)),
                ('server_name', models.CharField(max_length=50)),
                ('domain', models.CharField(max_length=30)),
                ('ip_address', models.CharField(max_length=20)),
                ('server_role', models.CharField(max_length=50)),
                ('server_type', models.CharField(max_length=50)),
                ('server_class', models.CharField(max_length=50)),
                ('os_class', models.CharField(max_length=50)),
                ('cpu', models.SmallIntegerField()),
                ('memory', models.SmallIntegerField()),
                ('memory_type', models.BooleanField(default=True)),
                ('storage', models.SmallIntegerField()),
                ('storage_type', models.BooleanField(default=True)),
                ('prevision_date', models.DateField()),
                ('bu_code', models.CharField(max_length=50)),
                ('dept_name', models.CharField(max_length=50)),
                ('project_name', models.CharField(max_length=100)),
                ('project_manager_name', models.CharField(max_length=100)),
                ('project_manager_email', models.EmailField(max_length=254)),
                ('support_member_name', models.CharField(max_length=100)),
                ('support_member_email', models.EmailField(max_length=254)),
                ('backup', models.BooleanField(default=True)),
                ('monitoring', models.BooleanField(default=True)),
                ('server_status', models.IntegerField()),
                ('comments', models.CharField(max_length=200)),
            ],
        ),
    ]
