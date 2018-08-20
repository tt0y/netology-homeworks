'use strict';

const incrementButton = document.querySelector('#increment'),
    decrementButton = document.querySelector('#decrement'),
    resetButton = document.querySelector('#reset');

incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);
resetButton.addEventListener('click', resetCounter);
document.addEventListener('DOMContentLoaded', () => {
    updateCounter(getCurrentCount());
});

function incrementCounter() {
    updateCounter(getCurrentCount() + 1);
}

function decrementCounter() {
    const currentCount = getCurrentCount();
    if (currentCount >= 1) {
        updateCounter(currentCount - 1);
    }
}

function resetCounter() {
    updateCounter(0);
}

function updateCounter(newValue = 0) {
    const counterField = document.querySelector('#counter');
    localStorage.setItem('counter', newValue);

    if (counterField) {
        counterField.innerText = newValue;
    }
}

function getCurrentCount() {
    let currentCount = localStorage.getItem('counter');

    return (currentCount) ? Number.parseInt(currentCount) : 0;
}