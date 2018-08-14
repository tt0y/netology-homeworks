/**
 * Created by AntonKC on 12.08.2018.
 */

'use strict';
const inputs = document.getElementsByTagName('INPUT');

[].forEach.call(inputs, function(el){
    el.addEventListener('change', function (e) {

        const taskFinished = document.getElementById('out');
        const allTaskFinished = document.getElementById('set');

        let count = 0;
        for (let i = 0; i < inputs.length; i++)
            if (inputs[i].type == 'checkbox' && inputs[i].checked)
                count++;

        if (count === inputs.length)
            allTaskFinished.classList.toggle('complete');
        else
            allTaskFinished.classList.remove('complete');

        taskFinished.value = `${count} из ${inputs.length}`;
    })
});

