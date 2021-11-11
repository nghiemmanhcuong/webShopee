
function Validator(options){
    const formElement = document.querySelector(options.form);
    if(formElement){
        options.rules.forEach(function(rule){
            const inputElemnt = formElement.querySelector(rule.selector);
            if(inputElemnt){
                inputElemnt.onblur = ()=>{
                    const errorMessage = rule.test(inputElemnt.value);
                    const errorElement = inputElemnt.parentElement.querySelector(options.error);
                    if(errorMessage){
                        errorElement.innerText = errorMessage;
                        inputElemnt.parentElement.classList.add('invalid');
                    }else{
                        errorElement.innerText = "";
                        inputElemnt.parentElement.classList.remove('invalid');
                    }
                    inputElemnt.onclick = ()=>{
                        errorElement.innerText = "";
                        inputElemnt.parentElement.classList.remove('invalid');
                    }
                }
            }
        })
    }
}




Validator.isEmail = function(selector){
    return {
        selector:selector,
        test:function(value){
            return value ? undefined : "Không được để trống ô"
        }
    }
}

Validator.isPassword = function(selector){
    return {
        selector:selector,
        test:function(value){
            return value ? undefined : "Không được để trống ô"
        }
    }
}

Validator({
    form:"#form-page-seller",
    error:".main-form__messeage",
    rules:[
        Validator.isEmail("#email"),
        Validator.isPassword("#password")
    ]
});

export default Validator;