/**
 * Created by AntonKC on 29.07.2018.
 */

'use strict';

const audio = document.getElementsByTagName('audio');

const
    keyClap = document.getElementsByClassName('drum-kit__drum key-clap'),
    keyHihat = document.getElementsByClassName('drum-kit__drum key-hihat'),
    keyKick = document.getElementsByClassName('drum-kit__drum key-kick'),
    keyOpenhat = document.getElementsByClassName('drum-kit__drum key-openhat'),
    keyBoom = document.getElementsByClassName('drum-kit__drum key-boom'),
    keyRide = document.getElementsByClassName('drum-kit__drum key-ride');

keyClap[0].onclick = function () {
    audio[0].play();
};

keyHihat[0].onclick = function () {
    audio[1].play();
};

keyKick[0].onclick = function () {
    audio[2].play();
};

keyOpenhat[0].onclick = function () {
    audio[3].play();
};

keyBoom[0].onclick = function () {
    audio[4].play();
};

keyRide[0].onclick = function () {
    audio[5].play();
};