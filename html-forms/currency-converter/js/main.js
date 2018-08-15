/**
 * Created by AntonKC on 14.08.2018.
 */
'use strict';

let loader = document.getElementById('loader');
let result = document.getElementById('result');
let source = document.getElementById('source');
let from = document.getElementById('from');
let to = document.getElementById('to');

loader.classList.remove('hidden');
source.addEventListener('keyup', calcValues);
from.addEventListener('change', calcValues);
to.addEventListener('change', calcValues);

const request = new XMLHttpRequest();
request.open('GET', 'https://neto-api.herokuapp.com/currency', true);
request.send();

request.addEventListener(
    'readystatechange',
    onReadyStateChange
);

function calcValues() {
    let sum = source.value * from.options[from.selectedIndex].value / to.options[to.selectedIndex].value;
    result.value = sum.toFixed(2);
}

function onReadyStateChange() {
    if (request.readyState !== 4) return;

    document.getElementById('content').classList.remove('hidden');
    loader.classList.toggle('hidden');

    const obj = JSON.parse(request.responseText);

    let html = "";
    for(var key in obj) {
        html += "<option value=" + obj[key].value  + ">" +obj[key].code + "</option>"
    }
    from.innerHTML = html;
    to.innerHTML = html;

}