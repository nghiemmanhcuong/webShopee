import Validator from "./theSeller.js";
const mainLoginForm = document.querySelector('.main-login__form');
const mainLoginQAcode = document.querySelector('.main-login__qacode');
const mainLoginFormBtn = mainLoginForm.querySelector('.login-form-header-selection__icon');
const mainLoginQAcodeBtn = mainLoginQAcode.querySelector('.login-form-header-selection__icon');
const formLoginBtn = document.querySelector('.form-login__btn');
const inputEmail = document.querySelector('input[name="email"]');
const inputPassword = document.querySelector('input[name="password"]');
const inputRegister = document.querySelector('#form-login-number');
const formRegisterBtn = document.querySelector('.form-login__btn--not-accout');
const formLoginInput = document.querySelectorAll('.form-login__input');
const registerBtn = document.querySelector('.form-login-register__link--have-accout');
const registerBtn2 = document.querySelector('.form-login-register__qa-code');
const loginBtn = document.querySelector('.form-login-register__link--not-accout');

Validator.isEmail = function(selector){
    return {
        selector:selector,
        test:function(value){
            return value ? undefined : "Vui lòng điền vào mục này."
        }
    }
}

Validator.isPassword = function(selector){
    return {
        selector:selector,
        test:function(value){
            return value ? undefined : "Vui lòng điền vào mục này."
        }
    }
}

Validator({
    form:"#form-login",
    error:".form-login__messeage",
    rules:[
        Validator.isEmail("#form-login-email"),
        Validator.isPassword("#form-login-password"),
    ]
});

(function defaultEvent(){
    mainLoginFormBtn.onclick = ()=>{
        mainLoginForm.style.display = "none";
        mainLoginQAcode.style.display = "block";
    }
    mainLoginQAcodeBtn.onclick = ()=>{
        mainLoginQAcode.style.display = "none";
        mainLoginForm.style.display = "block";
    }

    registerBtn.onclick = ()=>{
        mainLoginForm.classList.add('main-login--not-accout')
    }

    registerBtn2.onclick = ()=>{
        mainLoginQAcodeBtn.click();
        mainLoginForm.classList.add('main-login--not-accout')
    }

    loginBtn.onclick = ()=>{
        mainLoginForm.classList.remove('main-login--not-accout')
    }
})();

(function checkInput(){
    formLoginInput.forEach(function(input){
        input.onchange = ()=>{
            if(inputEmail.value && inputPassword.value){
                formLoginBtn.classList.add('presently');
            }else{
                formLoginBtn.classList.remove('presently');
            }
        }
    });
    inputRegister.onchange = ()=>{
        if(inputRegister.value){
            formRegisterBtn.classList.add('presently');
        }else{
            formRegisterBtn.classList.remove('presently');
        }
    }
})();
