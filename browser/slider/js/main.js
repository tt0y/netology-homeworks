/**
 * Created by AntonKC on 27.07.2018.
 */
'use strict';

const slider = document.getElementsByClassName('js_slider');

const arrImages = [
    'i/airmax.png',
    'i/airmax-jump.png',
    'i/airmax-on-foot.png',
    'i/airmax-playground.png',
    'i/airmax-top-view.png',
];

let currentSlide = 0;

setInterval(() => {
    slider.src = arrImages[currentSlide];
    console.log(slider.src);
    currentSlide === 4 ? currentSlide = 0 : currentSlide += 1;
}, 5000);
