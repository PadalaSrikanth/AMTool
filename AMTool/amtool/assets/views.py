from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status as st
import json

from assets import orm_operations as ts


def login(request):
    print("inside the login page")
    return render(request, 'login/login.html', {})


def home(request):
    print("inside the home page")
    return render(request, 'home/home.html', {})


def dashboard(request):
    print("inside the dashboard page")
    return render(request, 'dashboard/dashboard.html', {})


def aboutus(request):
    print("inside the aboutus page")
    return render(request, 'aboutus/aboutus.html', {})


def fetch_request_values(request):
    data = request.data
    data = dict(data)
    for i in data:
        data = json.loads(i)
        print(data)

    form_name = data[0]["formName"]
    operation = data[0]["operation"]
    data = data[0]['data']
    values = dict()
    if form_name == 'VM Server':
        values['location'] = data['location']
        values['server_os'] = data['serverOS']
        values['server_name'] = data['serverName']
        values['domain'] = data['domain']
        values['ip_address'] = data['ipAddress']
        values['server_role'] = data['serverRole']
        values['server_type'] = data['serverType']
        values['server_class'] = data['serverClass']
        values['os_class'] = data['osClass']
        values['cpu'] = data['cpu']
        values['memory'] = data['memory']
        values['storage'] = data['storage']
        values['provision_date'] = data['provisionDate']
        values['bu_code'] = data['buCode']
        values['dept_name'] = data['deptName']
        values['project_name'] = data['projectName']
        values['project_manger'] = data['projectManager']
        values['support_member_name'] = data['supportMemberName']
        values['backup'] = data['backUp']
        values['monitoring'] = data['monitoring']
        values['status'] = data['status']

    elif form_name == 'VM Hardware':
        values['location'] = data['location']
        values['chassis'] = data['chassis']
        values['service_tag'] = data['serviceTag']
        values['slot_number'] = data['slotNumber']
        values['serial_number'] = data['serialNumber']
        values['host_name'] = data['hostName']
        values['ip_address'] = data['ipAddress']
        values['idrac_ip'] = data['idracIP']
        values['management_ip_address'] = data['managementIPAddress']
        values['os'] = data['os']
        values['description'] = data['description']
        values['cpu'] = data['cpu']
        values['core'] = data['core']
        values['ram'] = data['ram']
        values['hdd'] = data['hdd']
        values['hyper_threading'] = data['hyperThreading']
        values['logical_processor'] = data['logicalProcessor']
    elif form_name == 'Physical Server':
        values['location'] = data["location"]
        values['rack_name'] = data["rackName"]
        values['server_name'] = data["serverName"]
        values['os'] = data["os"]
        values['ip_address'] = data["ipAddress"]
        values['idrac_ip'] = data["idracIP"]
        values['domain'] = data["domain"]
        values['cpu'] = data['cpu']
        values['core_per_cpu'] = data['corePerCPU']
        values['hyper_threading'] = data['hyperThreading']
        values['memory'] = data['memory']
        values['server_type'] = data["serverType"]
        values['make'] = data["make"]
        values['model'] = data["model"]
        values['project_name'] = data["projectName"]
        values['bu_code'] = data["buCode"]
        values['dept_name'] = data["deptName"]
        values['server_role'] = data["serverRole"]
        values['serial_number'] = data["serialNumber"]
        values['project_manager'] = data["projectManager"]
        values['support_member_name'] = data["supportMemberName"]
        values['amc'] = data["amc"]
        values['asset_number'] = data["assetNumber"]
        values['backup'] = data["backup"]
        values['monitoring'] = data["monitoring"]
        values['server_status'] = data["status"]
        values["storage"] = data['storage']
        values["provision_date"] = data['provisionDate']
        values["server_type"] = data['serverType']
    else:
        values['location'] = data['location']
        values['description'] = data['description']
        values['device_type'] = data['deviceType']
        values['device_name'] = data['deviceName']
        values['ip_address'] = data['ipAddress']
        values['management_ip_address'] = data['managementIPAddress']
        values['serial_number'] = data['serialNumber']
        values['disks_drives'] = data['disksOrDrives']
        values['disks_drives_capacity'] = data['disksOrDrivesCapacity']
        values['amc'] = data['amc']
        values['mac'] = data['mac']
    return form_name, operation, values


@api_view(["POST"])
def validate_user(request):
    user_name = request.data.get('user_name')
    password = request.data.get('password')
    data = {"message": "The user successfully logged in"}
    return Response(data, status=st.HTTP_200_OK)


@api_view(["POST"])
def save_update_asset(request):
    form_name, operation, values = fetch_request_values(request)

    data = ts.save_or_update(form_name, operation, values)
    return Response(data, status=st.HTTP_200_OK)
