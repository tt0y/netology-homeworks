/**
 * Created by AntonKC on 27.07.2018.
 */

'use strict';

const slider = document.getElementById('currentPhoto');
const prevBtn = document.getElementById('prevPhoto');
const nextBtn = document.getElementById('nextPhoto');

const arrImages = [
    'i/breuer-building.jpg',
    'i/guggenheim-museum.jpg',
    'i/headquarters.jpg',
    'i/IAC.jpg',
    'new-museum.jpg',
];

let currentSlide = 0;

function nextSlide() {
    if (currentSlide < arrImages.length - 1) {
        currentSlide ++;
    }else{
        currentSlide = 0;
    }
    slider.src = arrImages[currentSlide - 1];
    console.log('nextSlide');
    console.log(slider.src);
}

function prevSlide() {
    if (currentSlide <= 0) {
        currentSlide = (arrImages.length - 1);
    } else {
        currentSlide--;
    }
    slider.src = arrImages[currentSlide-1];
    console.log('prevSlide');
    console.log(slider.src);
}

prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;