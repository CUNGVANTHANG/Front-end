function validator(formSelector) {
    var _this = this;
    var formRules = {};
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    // Quy ước tạo rule:
    // - Nếu có lỗi thì return `error message`
    // - Nếu không có lỗi thì return `undefined`
    var validatorRules = {
        required: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        email: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập email';
        },
        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} kí tự`;
            }
        },
        max: function (max) {
            return function (value) {
                return value.length <= max ? undefined : `Vui lòng nhập tối đa ${max} kí tự`;
            }
        }  
    }

    var ruleName = 'required';

    // console.log(validatorRules[ruleName]);

    // console.log(formSelector);
    var formElement = document.querySelector(formSelector); // Lấy ra form element trong DOM theo `formSelector`
    // console.log(formElement);

    // Chỉ xử khi có Element trong DOM
    if (formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]');
        // console.log(inputs);

        for(var input of inputs) {
            // Cắt chuỗi required|email thành required và email 
            var rules = input.getAttribute('rules').split('|');
            for (var rule of rules) {
                var ruleInfo;
                var isRuleHasValue = rule.includes(':')
                if (isRuleHasValue) {
                    // Cắt chuỗi min:6 thành min
                    ruleInfo = rule.split(':');
                    // console.log(ruleInfo);

                    rule = ruleInfo[0];                
                }

                var ruleFunc = validatorRules[rule]

                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }
                // console.log(rule)
                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc)
                } else {
                    formRules[input.name] = [ruleFunc]
                }
            }

            // console.log(input.name)
            // console.log(input.getAttribute('rules'))

            // Lắng nghe sự kiện để validate (blur, change...)
            input.onblur = handleValidate;
            input.oninput = handleClearError
        }
        // Hàm thực hiện validate
        function handleValidate(event) {
            var rules = formRules[event.target.name];
            var errorMessage;

            for (var rule of rules) {
                errorMessage = rule(event.target.value);
                if(errorMessage) break;
            }
            
            // console.log(formRules[event.target.name])

            // Nếu có lỗi thì hiện thị message lỗi ra UI
            if (errorMessage) {
                // console.log(event.target);

                var formGroup = getParent(event.target, '.form-group');
                // console.log(formGroup)
                if (!formGroup) return;
                
                if (formGroup) {
                    formGroup.classList.add('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    if (formMessage) {
                        formMessage.innerText = errorMessage;
                    }
                }
            }
            return !errorMessage;
        }

        // Hàm clear message lỗi
        function handleClearError(event) {
            var formGroup = getParent(event.target, '.form-group');
            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message')

                if (formMessage) {
                    formMessage.innerText = ''
                }
            }
        }
    }
    
    
    // Xử lý hành vi submit form
    formElement.onsubmit = function (event) {
        event.preventDefault();
        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true; 
        
        for(var input of inputs) {
            if (!handleValidate({ target: input })) {
                isValid = false;
            }
        }

        // Khi không có lỗi thì submit form
        if (isValid) {
            if (typeof _this.onSubmit === 'function') {
                var enableInputs = formElement.querySelectorAll('[name]')
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        
                        switch(input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values
                                }

                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value)
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value
                        }

                        return values;
                    }, {});
                    _this.onSubmit(formValues);
            }
            else {
                formElement.submit();
            }
        }
    }
}