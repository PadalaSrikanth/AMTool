function validateUser(){
    user_name = $('#username').val()
    password = $('#password').val()
    data = {'user_name': user_name, 'password':password}
    function callBackFunc(result){
        console.log(result)
        message = result.message
        console.log(message.indexOf("successfully"))
        if(message.indexOf("successfully") >= 0){
            console.log("user logged in")
            window.location.href = "home"
        }else{
            alert("something went wrong try again")
        }
    }

    ajax_call_post('validateuser', data, callBackFunc)
}