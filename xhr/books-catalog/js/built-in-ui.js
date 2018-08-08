/* Данный JS код */

let xhrBook = new XMLHttpRequest(),
    content = document.querySelector('#content');

xhrBook.addEventListener("load", onLoad);
xhrBook.open("GET","https://neto-api.herokuapp.com/book/", true);
xhrBook.send();

function onLoad() {
    let data = JSON.parse(xhrBook.responseText);
    let str = '';
    data.forEach(function (item) {
        str += `<li data-title="${item.title}" data-author="${item.author.name}" data-info="${item.info}" data-price="${item.price}"><img src="${item.cover.small}"></li>`
    })
    content.innerHTML = str;
};


// Регулируем видимость карточки
function toggleCardVisible () {
 document.getElementById('content').classList.toggle('hidden');
 document.getElementById('card').classList.toggle('hidden');
}


document.getElementById('close').addEventListener('click', toggleCardVisible);

document.getElementById('content').addEventListener('click', (event) => {
    let target = null;
    if (event.target.tagName === 'LI') {
        target = event.target;
    }
    if (event.target.parentNode.tagName === 'LI') {
        target = event.target.parentNode;
    }

    if (target) {
      toggleCardVisible();
      document.getElementById('card-title').innerHTML = target.dataset.title;
      document.getElementById('card-author').innerHTML = target.dataset.author;
      document.getElementById('card-info').innerHTML = target.dataset.info;
      document.getElementById('card-price').innerHTML = target.dataset.price;
    }
});
