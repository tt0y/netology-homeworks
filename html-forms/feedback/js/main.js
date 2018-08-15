'use strict';

const inputs = document.getElementsByTagName('input');
const buttons = document.getElementsByClassName('button-contact');
const output = document.getElementById('output');
const message = document.getElementsByName('message');
const zipcode = document.getElementById('zipcode');


document.addEventListener('DOMContentLoaded', initFields(inputs));
zipcode.addEventListener('keyup', zipCodeFilter);

function zipCodeFilter() {
    console.log(zipcode.value);
    let zip = parseInt(zipcode.value.replace(/\D+/g,""));
    if (isNaN(zip))
        zipcode.value = '';
    else
        zipcode.value = zip;
}

// Вешаем калбеки на все элементы формы
function forEach(list, callback) {
    Array.prototype.forEach.call(list, callback);
}

function initFields(elements) {
    console.log('initFields');

    // Повесим на все элементы лисенеры
    forEach(elements, function (el) {
        el.addEventListener('change', function (e) {
            calcFillFields(inputs);
        })
    });
}


function calcFillFields(elements){
     console.log('calcFillFields');

    let count = 0;

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].value !== '') {
            count++;
        }
    }

    if (count === elements.length && message.value !== ''){
        for (let i = 0; i < buttons.length; i++)
            if (buttons[i].type === 'submit')
                buttons[i].disabled = false;
    }
}
