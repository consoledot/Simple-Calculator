const button = document.getElementsByTagName('button');
const keys = [...button]
keys.length = 16;
const equalBtn = button.equals;
const clearBtn = button.clear;
let result = document.view.result;

const display = function(){
    result.value += this.value;
    result.style.textAlign = 'right';
    result.placeholder = 0;
}

const equal = function(){
    if(result.placeholder === 'undefined' || result.value ===''){
        result.placeholder = 0;
    }else{ result.placeholder = eval(result.value);}
    result.value = '';
}

const clear = function(){
    result.value = '';
    result.placeholder = 0;
}

keys.forEach(key => key.addEventListener('click',display))

equalBtn.addEventListener('click', equal);
clearBtn.addEventListener('click', clear);