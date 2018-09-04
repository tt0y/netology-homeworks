/**
 * Created by AntonKC on 04.09.2018.
 */

'use strict';

const nav = document.getElementsByTagName('nav')[0];
const secretCode = document.getElementsByClassName('secret')[0];
const keysLib = [];
keysLib.length = 9;

function showMenu(event) {
    if (!event.repeat) {
        if (event.altKey) {
            if (event.ctrlKey) {
                if (event.code === 'KeyT') {
                    nav.classList.toggle('visible');
                }
            }
        }
    }
}

document.addEventListener('keydown', showMenu);

function showSecretMessage(event) {
    keysLib.push(event.code);
    keysLib.shift();
    if (keysLib[0] === 'KeyY' &&
        keysLib[1] === 'KeyT' &&
        keysLib[2] === 'KeyN' &&
        keysLib[3] === 'KeyJ' &&
        keysLib[4] === 'KeyK' &&
        keysLib[5] === 'KeyJ' &&
        keysLib[6] === 'KeyU' &&
        keysLib[7] === 'KeyB' &&
        keysLib[8] === 'KeyZ') {
        if (!secretCode.classList.contains('visible')) {
            secretCode.classList.add('visible');
        }
    }
}

document.addEventListener('keydown', showSecretMessage);