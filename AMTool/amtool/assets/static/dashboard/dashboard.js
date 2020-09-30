var operation = ""

function getData(formName){
    if(formName == "Physical Server"){
        var location = $("#editLocationPs").val()
        var rackName = $("#editRackNamePs").val()
        var serverName = $("#editServerNamePs").val()
        var os = $("#editOSPs").val()
        var ipAddress = $("#editIPAddresPs").val()
        var idracIP = $("#editIdracIPPs").val()
        var domain = $("#editDomainPs").val()
        var cpu = $("#editCPUPs").val()
        var corePerCPU = $("#editCorePerCPUPs").val()
        var hyperThreading = $("#editHyperThreadingPs").val()
        var memory = $("#editMemoryPs").val()
        var memoryType = $("#editMemoryTypePs").val()
        var serverType = $("#editStoragePs").val()
        var make = $("#editProvisionDatePs").val()
        var model = $("#editServerTypePs").val()
        var projectName = $("#editMakePs").val()
        var buCode = $("#editModelPs").val()
        var deptName = $("#editProjectNamePs").val()
        var serverRole = $("#editBUCodePs").val()
        var serialNumber = $("#editDeptNamePs").val()
        var projectManager = $("#editServerRolePs").val()
        var supportMemberName = $("#editSerialNumberPs").val()
        var amc = $("#editProjectManagerPs").val()
        var assetNumber= $("#editSupportMemberNamePs").val()
        var backup = $("#editAMCPs").val()
        var monitoring = $("#editAssetNumberPs").val()
        var status = $("#editBackupPs").val()
        var storage = $("#editStoragePs").val()
        var provisionDate = $("#editProvisionDatePs").val()
        var serverType = $("#editServerTypePs").val()

        data = {
            'location': location, 'rackName': rackName, 'serverName': serverName, 'os': os, 'ipAddress': ipAddress,
            'idracIP': idracIP, 'domain': domain,'cpu': cpu,'corePerCPU': corePerCPU,'hyperThreading': hyperThreading,
            'memory': memory,'memoryType': memoryType, 'serverType': serverType, 'make': make, 'model': model,
            'projectName': projectName, 'buCode': buCode, 'deptName': deptName, 'serverRole': serverRole,
            'serialNumber': serialNumber, 'projectManager': projectManager, 'supportMemberName': supportMemberName,
            'amc': amc, 'assetNumber': assetNumber, 'backup': backup, 'monitoring': monitoring, 'status': status,
            'storage': storage,'provisionDate': provisionDate,'serverType': serverType
        }

    }else if(formName == "VM Server"){
        var location = $("#editLocationVs").val()
        var serverOS = $("#editServerOSvs").val()
        var serverName = $("#editServerNameVs").val()
        var domain = $("#editDomainVs").val()
        var ipAddress = $("#editIPAddressVs").val()
        var serverRole = $("#editServerRoleVs").val()
        var serverType = $("#editServerTypeVs").val()
        var serverClass = $("#editServerClassVs").val()
        var osClass = $("#editOSClassVs").val()
        var cpu = $("#editCPUVs").val()
        var memory = $("#editMemoryVs").val()
        var storage = $("#editStorageVs").val()
        var provisionDate = $("#editProvisionDateVs").val()
        var buCode = $("#editBUCodevs").val()
        var deptName = $("#editDeptNameVs").val()
        var projectName = $("#editProjectNameVs").val()
        var projectManager = $("#editProjectManagerVs").val()
        var supportMemberName = $("#editSupportMemberNameVs").val()
        var backUp = $("#editBackUpVs").val()
        var monitoring = $("editMonitoringVs").val()
        var status = $("editStatusVs").val()

        data = {
            'location': location, 'serverOS': serverOS, 'serverName': serverName, 'domain': domain,
            'ipAddress': ipAddress, 'serverRole': serverRole, 'serverType': serverType, 'serverClass': serverClass,
            'osClass': osClass, 'cpu': cpu, 'memory': memory, 'storage': storage, 'provisionDate': provisionDate,
            'buCode': buCode, 'deptName': deptName, 'projectName': projectName, 'projectManager': projectManager,
            'supportMemberName': supportMemberName, 'backUp': backUp,'monitoring': monitoring,'status': status
            }

    }else if(formName == "VM Hardware"){
        var location = $("#editLocationVH").val()
        var chassis = $("#editChassisVH").val()
        var serviceTag = $("#editServiceTagVH").val()
        var slot = $("#editSlotVH").val()
        var serialNumber = $("#editSerialNumberVH").val()
        var hostName = $("#editHostNameVH").val()
        var ipAddress = $("#editIPAddressVH").val()
        var idracIP = $("#editIdracIPVH").val()
        var manager = $("#editManagerVH").val()
        var os = $("#editOsVH").val()
        var description = $("#editDescriptionVH").val()
        var cpu = $("#editCPUVH").val()
        var core = $("#editCoreVH").val()
        var ram = $("#editRAMVH").val()
        var hdd = $("#editHDDVH").val()
        var hyperThreading = $('#editHyperthreadingVH').val()
        var logicalProcessor = $('#editLogicalProcessorVH').val()
        data = {
        'location': location, 'chassis':chassis, 'serviceTag':serviceTag, 'slot':slot,
        'serialNumber':serialNumber, 'hostName':hostName, 'ipAddress':ipAddress, 'idracIP':idracIP,
        'manager':manager, 'os':os, 'description':description, 'cpu':cpu, 'core':core, 'ram':ram, 'hdd':hdd,
        'hyperThreading': hyperThreading,'logicalProcessor': logicalProcessor
        }
    }else{
        var location = $("#editLocationBas").val()
        var description = $("#editDescriptionBas").val()
        var deviceType = $("#editDeviceTypeBas").val()
        var deviceName = $("#editDeviceNameBas").val()
        var ipAddress = $("#editIPAddressBas").val()
        var managementIPAddress = $("#editManagementIPAddressBas").val()
        var serialNumber = $("#editSerialNumberBas").val()
        var disksOrDrives = $("#editDisksOrDrivesBas").val()
        var disksOrDrivesCapacity = $("#editDisksOrDrivesCapacityBas").val()
        var amc = $("#editAMCBas").val()
        var mac = $("#editMACBas").val()
        data = {
        'location': location, 'description':description, 'deviceType':deviceType, 'deviceName':deviceName,
        'ipAddress':ipAddress, 'managementIPAddress':managementIPAddress, 'serialNumber':serialNumber, 'disksOrDrives':disksOrDrives,
        'disksOrDrivesCapacity':disksOrDrivesCapacity, 'amc':amc, 'mac':mac
        }
    }
    return data;
}

function submitData(formName, data){
    dataFrame = [{"formName": formName, 'data': data, 'operation': operation}]
    function callBackFunction(response){

    }
    saveOrUpdateAsset(dataFrame, callBackFunction)
}

function editPhysicalServers(elmnt){
    document.getElementById("physicalServerEdit").style.display = "block";
    $("#editLocationPs").val(elmnt.find("#locationPs").text())
    $("#editRackNamePs").val(elmnt.find("#rackNamePs").text())
    $("#editServerNamePs").val(elmnt.find("#serverNamePs").text())
    $("#editOSPs").val(elmnt.find("#osPs").text())
    $("#editIPAddresPs").val(elmnt.find("#ipAddresPs").text())
    $("#editIdracIPPs").val(elmnt.find("#idracIPPs").text())
    $("#editDomainPs").val(elmnt.find("#domainPs").text())
    $("#editCPUPs").val(elmnt.find("#cpuPs").text())
    $("#editCorePerCPUPs").val(elmnt.find("#corePerCPUPs").text())
    $("#editHyperThreadingPs").val(elmnt.find("#hyperThreadingPs").text())
    $("#editMemoryPs").val(elmnt.find("#memoryPs").text())
    $("#editMemoryTypePs").val(elmnt.find("#memoryTypePs").text())
    $("#editStoragePs").val(elmnt.find("#storagePs").text())
    $("#editProvisionDatePs").val(elmnt.find("#provisionDatePs").text())
    $("#editServerTypePs").val(elmnt.find("#serverTypePs").text())
    $("#editMakePs").val(elmnt.find("#makePs").text())
    $("#editModelPs").val(elmnt.find("#modelPs").text())
    $("#editProjectNamePs").val(elmnt.find("#projectNamePs").text())
    $("#editBUCodePs").val(elmnt.find("#buCodePs").text())
    $("#editDeptNamePs").val(elmnt.find("#deptNamePs").text())
    $("#editServerRolePs").val(elmnt.find("#serverRolePs").text())
    $("#editSerialNumberPs").val(elmnt.find("#serialNumberPs").text())
    $("#editProjectManagerPs").val(elmnt.find("#projectManagerPs").text())
    $("#editSupportMemberNamePs").val(elmnt.find("#supportMemberNamePs").text())
    $("#editAMCPs").val(elmnt.find("#amcPs").text())
    $("#editAssetNumberPs").val(elmnt.find("#assetNumberPs").text())
    $("#editBackupPs").val(elmnt.find("#backupPs").text())
    $("#editMonitoringPs").val(elmnt.find("#monitoringPs").text())
    $("#editStatusPs").val(elmnt.find("#statusPs").text())
}

function editVMServers(elmnt){
    document.getElementById("vmServeredit").style.display = "block";
    $("#editLocationVs").val(elmnt.find("#locationVs").text())
    $("#editServerOSvs").val(elmnt.find("#serverOSvs").text())
    $("#editServerNameVs").val(elmnt.find("#serverNameVs").text())
    $("#editDomainVs").val(elmnt.find("#domainVs").text())
    $("#editIPAddressVs").val(elmnt.find("#ipAddressVs").text())
    $("#editServerRoleVs").val(elmnt.find("#serverRoleVs").text())
    $("#editServerTypeVs").val(elmnt.find("#serverTypeVs").text())
    $("#editServerClassVs").val(elmnt.find("#serverClassVs").text())
    $("#editOSClassVs").val(elmnt.find("#osClassVs").text())
    $("#editCPUVs").val(elmnt.find("#cpuVs").text())
    $("#editMemoryVs").val(elmnt.find("#memoryVs").text())
    $("#editStorageVs").val(elmnt.find("#storageVs").text())
    $("#editProvisionDateVs").val(elmnt.find("#provisionDateVs").text())
    $("#editBUCodevs").val(elmnt.find("#buCodevs").text())
    $("#editDeptNameVs").val(elmnt.find("#deptNameVs").text())
    $("#editProjectNameVs").val(elmnt.find("#projectNameVs").text())
    $("#editProjectManagerVs").val(elmnt.find("#projectManagerVs").text())
    $("#editSupportMemberNameVs").val(elmnt.find("#supportMemberNameVs").text())
    $("#editBackUpVs").val(elmnt.find("#backUpVs").text())
    $("editMonitoringVs").val(elmnt.find("monitoringVs").text())
    $("editStatusVs").val(elmnt.find("statusVs").text())
}

function editVMHardware(elmnt){
    document.getElementById("vmHardwareEdit").style.display = "block";
    $("#editLocationVH").val(elmnt.find("#locationVh").text())
    $("#editChassisVH").val(elmnt.find("#chassisVh").text())
    $("#editServiceTagVH").val(elmnt.find("#serviceTagVh").text())
    $("#editSlotNumberVH").val(elmnt.find("#slotVh").text())
    $("#editSerialNumberVH").val(elmnt.find("#serialNumberVh").text())
    $("#editHostNameVH").val(elmnt.find("#hostNameVh").text())
    $("#editIPAddressVH").val(elmnt.find("#ipAddressVh").text())
    $("#editIdracIPVH").val(elmnt.find("#idracIPVh").text())
    $("#editManagerVH").val(elmnt.find("#managerVh").text())
    $("#editOsVH").val(elmnt.find("#osVh").text())
    $("#editDescriptionVH").val(elmnt.find("#descriptionVh").text())
    $("#editCPUVH").val(elmnt.find("#cpuVh").text())
    $("#editCoreVH").val(elmnt.find("#coreVh").text())
    $('#editHyperthreadingVH').val(elmnt.find("#hyperThreadingVh").text())
    $('#editLogicalProcessorVH').val(elmnt.find("#logicalProcessorVh").text())
    $("#editRAMVH").val(elmnt.find("#ramVh").text())
    $("#editHDDVH").val(elmnt.find("#hddVh").text())
}


function editBackupAndSan(elmnt){
    document.getElementById("backupAndSanEdit").style.display = "block";
    $("#editLocationBas").val(elmnt.find("#locationBas").text())
    $("#editDescriptionBas").val(elmnt.find("#descriptionBas").text())
    $("#editDeviceTypeBas").val(elmnt.find("#deviceTypeBas").text())
    $("#editDeviceNameBas").val(elmnt.find("#deviceNameBas").text())
    $("#editIPAddressBas").val(elmnt.find("#ipAddressBas").text())
    $("#editManagementIPAddressBas").val(elmnt.find("#managementIPAddressBas").text())
    $("#editSerialNumberBas").val(elmnt.find("#serialNumberBas").text())
    $("#editDisksOrDrivesBas").val(elmnt.find("#disksOrDrivesBas").text())
    $("#editDisksOrDrivesCapacityBas").val(elmnt.find("#diskOrDriveCapacityBas").text())
    $("#editAMCBas").val(elmnt.find("#amc").text())
    $("#editMACBas").val(elmnt.find("#mac").text())
}


function saveData(assetName){
    if(assetName == "Physical Server"){
        data = getData("Physical Server")
        submitData("Physical Server", data)
    }else if(assetName == "VM Server"){
        data = getData("VM Server")
        submitData("VM Server", data)
    }else if(assetName == "VM Hardware"){
        data = getData("VM Hardware")
        submitData("VM Hardware", data)
    }else{
        data = getData("Backup And San")
        submitData("Backup And San", data)
    }
}


$(".buttonclk").click(function() {
    operation = "Update"
    var $row = $(this).closest("tr");    // Find the row
    var className = $row.attr("class")
    document.getElementById("details").style.display = "none";
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    if(className=="vh"){
        editVMHardware($row)
    }else if(className=="vs"){
        editVMServers($row)
    }else if(className=="ps"){
        editPhysicalServers($row)
    }else{
        editBackupAndSan($row)
    }
});

$(".addButton").click(function() {
    operation = "Save"
    var $row = $(this).closest("div");    // Find the row
    var className = $row.attr("id")
    document.getElementById("details").style.display = "none";
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    if(className=="vha"){
        document.getElementById("vmHardwareEdit").style.display = "block";
    }else if(className=="vsa"){
        document.getElementById("vmServeredit").style.display = "block";
    }else if(className=="psa"){
        document.getElementById("physicalServerEdit").style.display = "block";
    }else{
        document.getElementById("backupAndSanEdit").style.display = "block";
    }
});

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;


}
document.getElementById("defaultOpen").click();