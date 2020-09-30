function ajax_call_post(url, data, callBackFunc){
    console.log(url, data, callBackFunc)
    $.ajax({
        type: "POST",
        url: url,
        content_type:'application/json',
        data: JSON.stringify(data),
        success: function(result){
            console.log(result)
            callBackFunc(result)
        }
    })

}

function saveOrUpdateAsset(data, callBackFunc){
    var url = "saveorupdateasset";

    ajax_call_post(url, data, callBackFunc)
}