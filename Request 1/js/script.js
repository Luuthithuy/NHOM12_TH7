let btnRegister = document.getElementById('btnRegister')
function disableBtn(){
    btnRegister.disabled = true
}
function enableBtn(){
    btnRegister.disabled = false
}

// Kiểm tra phần name

let namefo = document.getElementById('txtName')
let statusOfName = document.getElementById('statusOfName')
let checkName = false

namefo.addEventListener('focusout', () =>{
    let nameRegex = /^[a-zA-Z\s]+$/

    if (nameRegex.test(namefo.value)){
        statusOfName.textContent = 'Tên hợp lệ'
        statusOfName.style.color = 'blue'
        checkName = true
    }else{
        statusOfName.textContent = 'Tên không hợp lệ'
        statusOfName.style.color = 'red'
        checkName = false
    }
})

// Kiểm tra phần Country

let country = document.getElementById('countries')
let statusOfCountry = document.getElementById('statusOfCountry')
let checkCountry = false

country.addEventListener('focusout', () =>{
    if (country.value == ''){
        statusOfCountry.textContent = 'Vui lòng chọn quốc gia'
        statusOfCountry.style.color = 'red'
        checkCountry = false
    }else{
        statusOfCountry.textContent = ''
        checkCountry = true
    }
})

// Kiểm tra phần Email

let email = document.getElementById('txtEmail')
let statusOfEmail = document.getElementById('statusOfEmail')
let checkEmail = false

email.addEventListener('focusout', () =>{
    let emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+\.+[A-Z]{2,4}/igm

    if (emailRegex.test(email.value)){
        statusOfEmail.textContent = 'Email hợp lệ'
        statusOfEmail.style.color = 'blue'
        checkEmail = true
    }else{
        statusOfEmail.textContent = 'Email không hợp lệ'
        statusOfEmail.style.color = 'red'
        checkEmail = false
    }
})

// Kiểm tra phần sex

let sex = document.getElementsByName('txtSex')
let statusOfSex = document.getElementById('statusOfSex')
let checkSex = false

sex.forEach(e =>{
    e.addEventListener('focusout', () =>{
        if (!sex[0].checked && !sex[1].checked){
            statusOfSex.textContent = 'Vui lòng chọn giới tính'
            statusOfSex.style.color = 'red'
            checkSex = false
        }else{
            statusOfSex.textContent = ''
            checkSex = true
        }
    })
})

