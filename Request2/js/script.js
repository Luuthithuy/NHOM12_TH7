$(document).ready(function(){
    function checkUserId(){
        let userID = $('#txtUserID').val();
        let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
        if(userIDRegex.test(userID)){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkUserId()){
            $("#statusOfUserID").text('UserID hợp lệ')
            $("#statusOfUserID").css('color','blue')
        }else{
            $("#statusOfUserID").text('UserID không hợp lệ')
            $("#statusOfUserID").css('color','red')
        }
    })
})

$(document).ready(function(){
    function checkPass(){
        let passWord = $('#txtPassword').val();
        let passRegex = /^[a-zA-Z0-9]{7,12}$/;
        if(passRegex.test(passWord)){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkPass()){
            $("#statusOfPassword").text('Password hợp lệ')
            $("#statusOfPassword").css('color','blue')
        }
        else{
            $("#statusOfPassword").text('Password không hợp lệ')
            $("#statusOfPassword").css('color','red')
        }
    })
})

$(document).ready(function(){
   
    function checkName(){
        let txtName = $('#txtName').val();
        let txtNameregex = /^[a-zA-Z]+$/;
        if(txtNameregex.test(txtName)){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkName()){
            $("#name_row").text('Tên hợp lệ')
            $("#name_row").css('color','blue')
        }
        else{
            $("#name_row").text('Tên không hợp lệ')
            $("#name_row").css('color','red')
        }
    })
})

$(document).ready(function(){
   
    function checkCode(){
        let txtCode = $('#txtCode').val();
        let txtCoderegex = /^[0-9]+$/;
        if(txtCoderegex.test(txtCode)){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkCode()){
            $("#statusOfCode").text('Mã zip hợp lệ')
            $("#statusOfCode").css('color','blue')
        }
        else{
            $("#statusOfCode").text('Mã zip không hợp lệ')
            $("#statusOfCode").css('color','red')
        }
    })
})

