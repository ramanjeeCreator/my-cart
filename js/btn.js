// document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
function btnTurnOn(item) {
    if (!item.classList.contains('delete')) {
        item.classList.add('delete');
        setTimeout(() => {
            item.classList.remove('delete')
        }, 3000);
    }
    let x = item.parentElement.parentElement.parentElement.parentElement;
    setTimeout(() => {
        x.classList.remove('animate__backInLeft');
        x.classList.add('animate__bounceOut');
        x.remove();
        setTimeout(() => {
            if (document.querySelector('.cart-counter').innerHTML == 'Cart (0items)') {
                document.querySelector('.table').style.display = 'none';
            }
        }, 10);
        updateCart();
    }, 1500);
    setTimeout(addProductToCostBox, 2000);
};