/**
 * Created by AntonKC on 29.07.2018.
 */

'use strict';

const dropDownElement = document.getElementsByClassName('wrapper-dropdown');

dropDownElement[0].onclick = function() {
    dropDownElement[0].classList.toggle('active');
};