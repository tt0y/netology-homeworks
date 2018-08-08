/**
 * Created by AntonKC on 08.08.2018.
 */

let preloader = document.getElementById('preloader'),
    content = document.getElementById('content'),
    email = document.querySelector("a[href='components/email-tab.html']"),
    sms = document.querySelector("a[href='components/sms-tab.html']"),
    xhrSms = new XMLHttpRequest(),
    xhrEmail = new XMLHttpRequest();

xhrEmail.addEventListener("load", onLoadEmail);
xhrEmail.addEventListener("loadstart", onLoadStart);
xhrEmail.addEventListener("loadend", onLoadEnd);
xhrSms.addEventListener("load", onLoadSms);
xhrSms.addEventListener("loadstart", onLoadStart);
xhrSms.addEventListener("loadend", onLoadEnd);

email.addEventListener("click", function (e) {
    e.preventDefault();
    if (!this.classList.contains('active')) {
        xhrEmail.open("GET", "components/email-tab.html");
        xhrEmail.send();
        onLoadEmail();
    }
    this.classList.add('active');
    sms.classList.remove('active');
});


sms.addEventListener("click", function (e) {
    e.preventDefault();
    if (!this.classList.contains('active')) {
        xhrSms.open("GET", "components/sms-tab.html");
        xhrSms.send();
        onLoadSms();
    }
    this.classList.add('active');
    email.classList.remove('active');
});


xhrEmail.open("GET", "components/email-tab.html");
xhrEmail.send();


function onLoadEmail() {
    content.innerHTML = xhrEmail.responseText;
}

function onLoadSms() {
    content.innerHTML = xhrSms.responseText;
}

function onLoadStart() {
    preloader.classList.remove('hidden');
}

function onLoadEnd() {
    preloader.classList.add('hidden');
}


