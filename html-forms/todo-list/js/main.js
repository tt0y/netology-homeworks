/**
 * Created by AntonKC on 12.08.2018.
 */

'use strict';
const elements = document.getElementsByTagName('INPUT');
document.addEventListener('DOMContentLoaded', calcChecked(elements));

function forEach(list, callback) {
    Array.prototype.forEach.call(list, callback);
}

function calcChecked(elements){
    const taskFinished = document.getElementById('out');
    const allTaskFinished = document.getElementById('set');

    let count = 0;
    for (let i = 0; i < elements.length; i++)
        if (elements[i].type == 'checkbox' && elements[i].checked)
            count++;

    if (count === elements.length)
        allTaskFinished.classList.toggle('complete');
    else
        allTaskFinished.classList.remove('complete');

    taskFinished.value = `${count} из ${elements.length}`;
}

forEach(elements, function (el) {
    el.addEventListener('change', function (e) {
        calcChecked(elements);
    })
});

