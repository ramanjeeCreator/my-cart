function check0InCart() {
    let h1 = document.createElement('h1');
    setTimeout(() => {
        if (document.querySelector('.cart-counter').innerHTML == 'Cart (0items)' && document.querySelector('.cart').children.length == 1) {
            h1.classList.add('argent');
            h1.textContent = 'No Items in Cart';
            h1.style.textAlign = 'center';
            document.querySelector('.cart').appendChild(h1)
        }
    }, 1500);
}
