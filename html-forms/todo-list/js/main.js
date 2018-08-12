/**
 * Created by AntonKC on 12.08.2018.
 */

'use strict';
const inputs = document.getElementsByTagName('INPUT');

[].forEach.call(inputs, function(el){
    el.addEventListener('change', function (e) {

        const taskFinished = document.getElementsByTagName('output');

        let count = 0;
        for (let i = 0; i < inputs.length; i++)
            if (inputs[i].type == 'checkbox' && inputs[i].checked)
                count++;
        taskFinished.value = count;
        console.log(count);
    })
});

