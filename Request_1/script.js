// Gọi tất cả các hàm được sử dụng để xác nhận.
function formValidation() {
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex;
    if (validsex(umsex, ufsex)) {}
    return false;
}