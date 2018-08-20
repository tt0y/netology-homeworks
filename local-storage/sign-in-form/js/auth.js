'use strict';

const signInForm = document.querySelector('.sign-in-htm');
const signUpForm = document.querySelector('.sign-up-htm');

document.addEventListener('DOMContentLoaded', updateFieldsValue);
signInForm.querySelector('.button').addEventListener('click', signIn);
signUpForm.querySelector('.button').addEventListener('click', signUp);

function updateFieldsValue() {
    signInForm.querySelector('#email').value = getFieldValueFromLS('email');
    signUpForm.querySelector('#email').value = getFieldValueFromLS('email');
    signUpForm.querySelector('input[name="name"]').value = getFieldValueFromLS('name');
}

function signIn(event) {
    event.preventDefault();
    saveFieldValueToLS('email', signInForm.querySelector('#email').value);

    sendPost(new FormData(signInForm), 'https://neto-api.herokuapp.com/signin');
}

function signUp(event) {
    event.preventDefault();
    saveFieldValueToLS('email', signUpForm.querySelector('#email').value);
    saveFieldValueToLS('name', signUpForm.querySelector('input[name="name"]').value);

    sendPost(new FormData(signUpForm), 'https://neto-api.herokuapp.com/signup');
}

function sendPost(requestObj, requestUrl) {
    // отправляет POST-запрос серверу
    const xhr = new XMLHttpRequest();
    const isSignUpForm = requestObj.has('name');

    xhr.addEventListener('load', (event) => {
        const responseObj = JSON.parse(xhr.response);

        if (responseObj.error) {
            showRequestResult(responseObj.message, isSignUpForm);
        } else if (isSignUpForm) {
            showRequestResult(`Пользователь ${responseObj.name} успешно зарегистрирован`, isSignUpForm);
        } else {
            showRequestResult(`Пользователь ${responseObj.name} успешно авторизован`, isSignUpForm);
        }
    });

    xhr.open('POST', requestUrl);
    xhr.setRequestHeader('Content-Type', 'application/json');

    let formObj = {};
    for (let [key, value] of requestObj) {
        formObj[key] = value;
    }

    xhr.send(JSON.stringify(formObj));
}

function showRequestResult(response, isSignUpForm = false) {
    // выводит в форму ответ сервера
    let curForm = (isSignUpForm) ? signUpForm : signInForm;
    curForm.querySelector('output.error-message').innerText = response;
}

function getFieldValueFromLS(field) {
    // вытаскивает значение field из LocalStorage
    if (field) {
        let fieldValue = localStorage.getItem(field);
        if (fieldValue) return fieldValue;
    }
    return '';
}

function saveFieldValueToLS(field, value = '') {
    // сохраняет значение (value) поля field в LocalStorage
    if (field) {
        localStorage.setItem(field, value);
    }
}