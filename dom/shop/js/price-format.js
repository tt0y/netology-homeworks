function getPriceFormatted(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

let cartCount = document.querySelector('#cart-count'),
    cartTotalPrice = document.querySelector('#cart-total-price'),
    result = 0;

    console.log(cartCount);
    console.log(cartTotalPrice);

Array.from(document.querySelectorAll('.add')).forEach(function(item){
    item.addEventListener('click', (e) => {
        cartCount.innerHTML = getPriceFormatted(+cartCount.innerHTML + 1);
        result += e.target.dataset.price * 1;
        cartTotalPrice.innerHTML = getPriceFormatted(result);
    });
})