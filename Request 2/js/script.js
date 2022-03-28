$(document).ready(() =>{
    let btnRegister = $('#btnRegister')
    function enableBtn(){
        btnRegister.prop('disabled', false)
    }

    function disableBtn(){
        btnRegister.prop('disabled', true)
    }
    let checkName = false
    let checkCountry = false
    let checkEmail = false
    let checkSex = false
   //Name 
    let name = $("#txtName")
    let nameRegex = /^[a-zA-Z\s]+$/

    name.focusout(() =>{
        if (nameRegex.test(name.val())){
            $("#statusOfName").text("Tên hợp lệ")
            $("#statusOfName").css("color", "blue")
            checkName = true
        } else {
            $("#statusOfName").text("Tên không hợp lệ")
            $("#statusOfName").css("color", "red")
            checkName = false
        }
    })

    //Country
    let country = $('#countries')

    country.focusout(() =>{
        if (country.val() != ''){
            $('#statusOfCountry').text('')
            checkCountry = true
        }
        else{
            $('#statusOfCountry').text('Vui lòng chọn quốc gia')
            $('#statusOfCountry').css('color', 'red')
            checkCountry = false
        }
    })

    //Email
    let email = $('#txtEmail')
    let emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+\.+[A-Z]{2,4}/igm

    email.focusout(() =>{
        if (emailRegex.test(email.val())){
            $('#statusOfEmail').text('Email hợp lệ')
            $('#statusOfEmail').css('color', 'blue')
            checkEmail = true
        }else{
            $('#statusOfEmail').text('Email không hợp lệ')
            $('#statusOfEmail').css('color', 'red')
            checkEmail = false
        }

    })
    
    //Sex
    let sexMale = $('#sexMale')
    let sexFemale = $('#sexFemale')

    sexMale.focusout(() =>{
        if (sexMale.prop('checked') || sexFemale.prop('checked')){
            $('#statusOfSex').text('')
            checkSex = true
        }
        else{
            $('#statusOfSex').text('Vui lòng chọn giới tính')
            $('#statusOfSex').css('color', 'red')
            checkSex = false
        }
    })
    sexFemale.focusout(() =>{
        if (sexMale.prop('checked') || sexFemale.prop('checked')){
            $('#statusOfSex').text('')
            checkSex = true
        }
        else{
            $('#statusOfSex').text('Vui lòng chọn giới tính')
            $('#statusOfSex').css('color', 'red')
            checkSex = false
        }
    })

    setInterval(() =>{
        if (checkName && checkCountry && checkEmail && checkSex )
            enableBtn()
        else
            disableBtn()
    }, 1)
});
