function Validator(options){
    var formElement = document.querySelector(options.form);
    if(formElement){
       options.rules.forEach(function(rule){
            var inputElemnt = formElement.querySelector(rule.selector);
        if(inputElemnt){
            inputElemnt.onblur = function(){
             console.log(inputElemnt.value)
             var errorMessage = rule.test(inputElemnt.value);
             console.log(errorMessage);
             if(errorMessage)
            }
        }
       })
    }
}

//Nguyen tac cua cac rule
//1. KHi co loi => tra ra message loi
//2. Khi hop le => undefined
Validator.isRequired = function(selector){
    return{
    selector:selector,
    test: function(value){
        return value.trim() ? undefined : 'Vui long nhap truong nay';
    }
    };
}

Validator.isEmail = function(selector){
    return{
        selector:selector,
        test: function(value){
            
        }
        };
}

Validator({
    form:'#form-1',
    rules:[
        Validator.isRequired('#fullname'),
        Validator.isEmail('#email')
    ]
})


