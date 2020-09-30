import assets.models as model
# import assets.export_data import vm_hardware_data, vm_servers_data, ps_data, backup_san_data


def save_or_update(form_name, operation, values):
    print(form_name, operation, values)
    if form_name == 'VM Server':
        if operation == 'Save':
            vm_servers = model.VMServers(
                location=values['location'], server_os=values['server_os'], server_name=values['server_name'],
                domain=values['domain'], ip_address=values['ip_address'], server_role=values['server_role'],
                server_type=values['server_type'], server_class=values['server_class'], os_class=values['os_class'],
                cpu=values['cpu'], memory=values['memory'], storage=values['storage'], prevision_date=values['provision_date'],
                bu_code=values['bu_code'], dept_name=values['dept_name'], project_name=values['project_name'],
                project_manager_email=values['project_manger'], support_member_email=values['support_member_name'],
                backup=values['backup'], monitoring=values['monitoring'], server_status=values['status']
            )
            vm_servers.save()
        else:
            model.VMServers.objects.update(
                location=values['location'], server_os=values['server_os'], server_name=values['server_name'],
                domain=values['domain'], ip_address=values['ip_address'], server_role=values['server_role'],
                server_type=values['server_type'], server_class=values['server_class'], os_class=values['os_class'],
                cpu=values['cpu'], memory=values['memory'], storage=values['storage'], prevision_date=values['provision_date'],
                bu_code=values['bu_code'], dept_name=values['dept_name'], project_name=values['project_name'],
                project_manager_email=values['project_manger'], support_member_email=values['support_member_name'],
                backup=values['backup'], monitoring=values['monitoring'], server_status=values['status']
            )
    elif form_name == 'VM Hardware':
        if operation == 'Save':
            vm_hardware = model.VMHardware(
                location=values['location'], chassis=values['chassis'], service_tag=values['service_tag'],
                slot_number=values['slot_number'], serial_number=values['serial_number'], host_name=values['host_name'],
                ip_address=values['ip_address'], idrac_ip=values['idrac_ip'],
                management_ip_address=values['management_ip_address'], os_name=values['os'],
                description=values['description'], cpu=values['cpu'], core=values['core'],
                hyper_threading=values['hyper_threading'], logical_processor=values['logical_processor'],
                ram=values['ram'], hdd=values['hdd'], hdd_type=values['hdd_type']
            )
            vm_hardware.save()
        else:
            model.VMHardware.objects.update(
                location=values['location'], chassis=values['chassis'], service_tag=values['service_tag'],
                slot_number=values['slot_number'],
                serial_number=values['serial_number'], host_name=values['host_name'], ip_address=values['ip_address'],
                idrac_ip=values['idrac_ip'], management_ip_address=values['management_ip_address'], os_name=values['os'],
                description=values['description'], cpu=values['cpu'], core=values['core'],
                hyper_threading=values['hyper_threading'], logical_processor=values['logical_processor'],
                ram=values['ram'], hdd=values['hdd'], hdd_type=values['hdd_type']
            )
    elif form_name == 'Physical Server':
        if operation == 'Save':
            physical_servers = model.PhysicalServers(
                location=values['location'], rack_name=values['rack_name'], server_name=values['server_name'], os_name=values['os'],
                ip_address=values['ip_address'], idrac_ip=values['idrac_ip'], domain=values['domain'], cpu=values['cpu'],
                core_per_cpu=values['core_per_cpu'], hyper_threading=values['hyper_threading'], memory=values['memory'],
                storage=values['storage'], prevision_date=values['provision_date'], server_type=values['server_type'],
                make=values['make'], model=values['model'], project_name=values['project_name'], bu_code=values['bu_code'],
                dept_name=values['dept_name'], server_role=values['server_role'], serial_number=values['serial_number'],
                amc=values['amc'], assert_number=values['assert_number'], backup=values['backup'], monitoring=values['monitoring'],
                server_status=values['server_status']
            )
            physical_servers.save()
        else:
            model.PhysicalServers.objects.update(
                location=values['location'], rack_name=values['rack_name'], server_name=values['server_name'], os_name=values['os'],
                ip_address=values['ip_address'], idrac_ip=values['idrac_ip'], domain=values['domain'], cpu=values['cpu'],
                core_per_cpu=values['core_per_cpu'], hyper_threading=values['hyper_threading'], memory=values['memory'],
                storage=values['storage'], prevision_date=values['provision_date'], server_type=values['server_type'],
                make=values['make'], model=values['model'], project_name=values['project_name'], bu_code=values['bu_code'],
                dept_name=values['dept_name'], server_role=values['server_role'], serial_number=values['serial_number'],
                amc=values['amc'], assert_number=values['asset_number'], backup=values['backup'], monitoring=values['monitoring'],
                server_status=values['server_status']
            )
    else:
        if operation == 'Save':
            backup_san = model.BackupAndSan(
                location=values['location'], description=values['description'], device_type=values['device_type'],
                device_name=values['device_name'], ip_address=values['ip_address'],
                management_ip_address=values['management_ip_address'], serial_number=values['serial_number'],
                disks_drives=values['disks_drives'], disks_drives_capacity=values['disks_drives_capacity'],
                amc=values['amc'], mac=values['mac']
            )
            backup_san.save()
        else:
            model.BackupAndSan.objects.update(
                location=values['location'], description=values['description'], device_type=values['device_type'],
                device_name=values['device_name'], ip_address=values['ip_address'],
                management_ip_address=values['management_ip_address'], serial_number=values['serial_number'],
                disks_drives=values['disks_drives'], disks_drives_capacity=values['disks_drives_capacity'],
                amc=values['amc'], mac=values['mac']
            )

            vm_hardware_data = model.VMHardware.objects.all()
            ps_data = model.PhysicalServers.objects.all()
            vm_servers_data = model.VMServers.objects.all()
            backup_san_data = model.BackupAndSan.objects.all()

