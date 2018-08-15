'use strict';

const inputs = document.getElementsByTagName('input');
const buttons = document.getElementsByClassName('button-contact');
const output = document.getElementById('output');
const message = document.getElementsByName('message');
const zipcode = document.getElementById('zipcode');


document.addEventListener('DOMContentLoaded', initFields());
zipcode.addEventListener('keyup', zipCodeFilter);

// Фильтруем лишнее
function zipCodeFilter() {
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

function initFields() {
    console.log('initFields');

    // Повесим на все элементы лисенеры
    forEach(inputs, function (inp) {
        inp.addEventListener('change', function (e) {
            calcFillFields(inputs);
        })
    });

    forEach(buttons, function (btn) {
        if (btn.type === 'submit')
        btn.addEventListener('click', function (e) {
            output.classList.remove('hidden')
            output.classList.remove('hidden')
        })
    });
}


function calcFillFields(elements){
     console.log('calcFillFields');

    let count = 0;

    forEach(elements, function (el) {
        if (el.value !== '') {
            count++;
        }
    });

    forEach(buttons, function (btn) {
        if (btn.type === 'submit' && count === elements.length)
            btn.disabled = false;
    });
}
