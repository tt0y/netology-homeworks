'use strict';

const inputs = document.getElementsByTagName('input');
const buttons = document.getElementsByClassName('button-contact');
const output = document.getElementById('output');
const message = document.getElementsByName('message');
const zipcode = document.getElementById('zipcode');
const contentform = document.getElementById('form');

document.addEventListener('DOMContentLoaded', initFields());
zipcode.addEventListener('keyup', zipCodeFilter);

// Фильтруем лишнее
function zipCodeFilter() {
    let zip = parseInt(zipcode.value.replace(/\D+/g, ""));
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
    // Повесим на все элементы лисенеры
    forEach(inputs, function (inp) {
        inp.addEventListener('change', function (e) {
            calcFillFields(inputs);
        })
    });

    forEach(message, function (mes) {
        mes.addEventListener('change', function (e) {
            sendValueByElementName(mes.name, mes.value);
        })
    });

    forEach(buttons, function (btn) {
        if (btn.type === 'submit')
            btn.addEventListener('click', function (e) {

                if (output.classList.contains('hidden')) {
                    output.classList.remove('hidden');
                    contentform.classList.add('hidden');
                } else {
                    contentform.classList.remove('hidden');
                    output.classList.add('hidden');
                }
            })
    });
}

function sendValueByElementName(name, value) {
    let target = document.getElementById(name);
    if (target !== null)
        target.value = value;
}

function calcFillFields(elements) {
    let count = 0;

    forEach(elements, function (el) {
        if (el.value !== '') {
            count++;
            sendValueByElementName(el.name, el.value);
        }
    });

    forEach(buttons, function (btn) {
        if (btn.type === 'submit' && count === elements.length) {
            btn.disabled = false;
        }
    });

}
