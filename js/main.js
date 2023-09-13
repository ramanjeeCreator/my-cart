addClassesToProducts();
addProductToCostBox();
function addClassesToProducts() {
    let products = document.getElementsByClassName('product');
    Array.from(products).forEach(product => {
        product.classList.add("row", "card", "col", "d-flex", "flex-row", "border", "border-0", "border-bottom", "rounded-0");
        document.querySelector('.cart>div:last-child').classList.remove('border-bottom');
    });
}


function changeColorToPink(item) {
    if (item.style.color == '') {
        item.style.color = 'red';
    } else {
        item.style.color = '';
    }
}

function minus(element) {
    let listItem = element.parentElement; // Get the parent <li> element
    let nextListItem = listItem.nextElementSibling;
    let nextElement = nextListItem.querySelector('.page-link');
    if (nextElement.innerHTML == "5") {
        nextElement.innerHTML = "4";
        nextElement.style.background = '';
        nextElement.style.borderColor = '';
    } else if (nextElement.innerHTML == "4") {
        nextElement.innerHTML = "3";
    } else if (nextElement.innerHTML == "3") {
        nextElement.innerHTML = "2";
    } else if (nextElement.innerHTML == "2") {
        nextElement.innerHTML = "1";
        nextElement.style.background = 'red';
        nextElement.style.borderColor = 'red';
    }
    addProductToCostBox();
}

function plus(element) {
    let listItem = element.parentElement; // Get the parent <li> element
    let previousListItem = listItem.previousElementSibling;
    let previousElement = previousListItem.querySelector('.page-link');
    if (previousElement.innerHTML == "1") {
        previousElement.innerHTML = "2";
        previousElement.style.background = '';
        previousElement.style.borderColor = '';
    } else if (previousElement.innerHTML == "2") {
        previousElement.innerHTML = "3";
    } else if (previousElement.innerHTML == "3") {
        previousElement.innerHTML = "4";
    } else if (previousElement.innerHTML == "4") {
        previousElement.innerHTML = "5";
        previousElement.style.background = 'red';
        previousElement.style.borderColor = 'red';
    }
    addProductToCostBox();
}

function updateCart() {
    let cart = document.querySelector('.cart');
    let noOfItemsInCart = cart.children;
    let noOfCartItems = noOfItemsInCart.length - 1;
    if (noOfCartItems == 0) {
        let h1 = document.createElement('h1');
        h1.id = 'heading'
        h1.textContent = 'Cart is empty yet';
        cart.appendChild(h1);
    } else if (cart.children[1] == document.querySelector('#heading')) {
        document.querySelector('#heading').remove();
    }
    noOfItemsInCart[0].innerHTML = `Cart (${noOfCartItems}items)`;
}

function addProductToCart(productName, price, imgSrc, category) {
    document.querySelector('.table').style.display = '';
    let cart = document.querySelector('.cart');

    let noOfItemsInCart = cart.children;
    let noOfCartItems = noOfItemsInCart.length - 1;

    let mainDiv = document.createElement('div');
    mainDiv.classList.add('product');
    mainDiv.innerHTML = `
        <img style="width: 10rem;" src="${imgSrc}"
            class="col-3 d-block p-4 border m-4 rounded shadow-lg" alt="Img -${noOfCartItems}">
            <div class="col my-auto p-4">
                <div class="row">
                    <h5 class="col card-title">${productName}</h5>
                    <ul class="col pagination no-select">
                        <li class="page-item"><span class="page-link" onclick="minus(this)">&#8722;</span></li>
                        <li class="page-item active"><span class="page-link">2</span></li>
                        <li class="page-item"><span class="page-link" onclick="plus(this)">&#43;</span></li>
                    </ul>
                </div>
                <p class="card-text">${category}</p>
                <p class="card-text" price="${price}">Rs. ${price}</p>
                <div class="card-text row">
                    <span class="col">Free Delivery</span>
                    <span class="col" id="addButton">
                        <button class="button" onclick="btnTurnOn(this)">
                            <div class="trash">
                                <div class="top">
                                     <div class="paper"></div>
                                </div>
                                <div class="box"></div>
                                <div class="check">
                                    <svg viewBox="0 0 8 6">
                                        <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
                                    </svg>
                                </div>
                            </div>
                            <span>Delete Item</span>
                        </button>
                    </span>
                    <span class="col">
                    <i class="fa-solid fa-heart no-select" onclick="changeColorToPink(this)"></i> Move To wish list</span>
                </div>
            </div>
    `;

    cart.appendChild(mainDiv);

    updateCart();
    addClassesToProducts();
}

function addProductsToProductList(productName, price, imgSrc, category) {
    let container = document.querySelector('.product-container');
    let mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'product-list col col-lg-4 col-md-auto col-sm-auto card my-1 animate__animated');
    mainDiv.setAttribute('style', 'width: 18rem');
    mainDiv.setAttribute('onclick', 'removeAndMoveToCart(this)');
    mainDiv.innerHTML = `
            <img src="${imgSrc}" class="card-img-top" style="height:262px" alt="Product - ${container.children.length}">
                    <div class="card-body">
                        <h5 class="card-title product-name">${productName}</h5>
                        <p class="m-0 category">${category.replace(category.charAt(0), category.charAt(0).toUpperCase())}</p>
                        <p class="m-0 price" price="${price}">Rs ${price}</p>
                        <p class="m-0">Free Delivery</p>
                    </div>
            `;
    container.appendChild(mainDiv);
}

function goToSellProductList() {
    document.querySelector('.product-container').classList.remove('animate__bounceOutDown');
    document.querySelector('.cart').classList.replace('animate__backInLeft', 'animate__backOutLeft'); // animate__backOutLeft
    document.querySelector('.sidebar').classList.replace('animate__backInRight', 'animate__backOutRight'); // animate__backOutLeft

    setTimeout(() => {
        document.querySelector('.cart-container').style.display = 'none';
        document.querySelector('.product-container').style.display = '';
    }, 300);
    setTimeout(() => {
        let timeToStop = productWithDiscription.length;
        let timeHoGaya = timeToStop * 1000;
        function runSequentially() {
            let x = 0;
            const timeToStop = productWithDiscription.length;

            function runNext() {
                if (x < timeToStop) {
                    let asdf = productWithDiscription[x];
                    const imgsInCart = [];
                    document.querySelectorAll('.product').forEach((product) => {
                        imgsInCart.push(product.children[0].src);
                    })
                    if (!imgsInCart.includes(productWithDiscription[x].image)) {
                        addProductsToProductList(asdf.name, asdf.price, asdf.image, asdf.category);
                    }
                    x++;
                    setTimeout(runNext, 10);
                }
            }

            runNext();
        }

        runSequentially();

    }, 1100);
}

function goToCartList() {
    addProductToCostBox();
    try {
        document.querySelector('.cart').classList.remove('animate__backOutLeft');
        document.querySelector('.cart').classList.add('animate__backInLeft'); // animate__backOutLeft
        document.querySelector('.sidebar').classList.remove('animate__backOutRight');
        document.querySelector('.sidebar').classList.add('animate__backInRight'); // animate__backOutLeft
    } catch (error) {
    }
    document.querySelector('.product-container').classList.add('animate__bounceOutDown');
    setTimeout(() => {
        document.querySelector('.cart-container').style.display = '';
        document.querySelector('.product-container').style.display = 'none';
        document.querySelectorAll('.product-list').forEach((product) => {
            product.remove();
        })
    }, 500);

}

function removeAndMoveToCart(item) {
    let SRCproducts = document.querySelector('.cart');
    const imgSRCs = [];
    // document.querySelector('.cart').children[1].children[0].src
    try {
        for (let x = 0; x < SRCproducts.children.length; x++) {
            // SRCproducts.children[1].querySelector('img').src
            if (x != 0) {
                imgSRCs.push(SRCproducts.children[x].querySelector('img').src);
            }
        }
    } catch (error) {
    }

    let productName = item.querySelector('.product-name').innerHTML;
    let price = item.querySelector('.price').attributes.price.value;
    let imgSrc = item.querySelector('img').src;
    let category = item.querySelector('.category').innerHTML;
    if (!imgSRCs.includes(imgSrc)) {
        item.classList.add('animate__animated');
        item.classList.add('animate__backOutLeft');
        setTimeout(() => {
            item.remove();
        }, 1000);
        addProductToCart(productName, price, imgSrc, category);
    } else {
        alert('Item is already in Cart');
    }
}

function addProductToCostBox() {
    document.querySelector('#cost-products').innerHTML = '';
    check();
    function check() {
        document.querySelectorAll('.product').forEach((product) => {
            let name = product.children[1].children[0].children[0].innerHTML;
            let cost = product.children[1].children[2].attributes.price.value;
            let quantity = product.children[1].children[0].children[1].children[1].children[0].innerHTML;
            let total = cost * quantity;

            const tr = document.createElement('tr');
            const tdName = document.createElement('td');
            const tdCost = document.createElement('td');
            const tdQuantity = document.createElement('td');
            const tdTotal = document.createElement('td');
            tdName.textContent = name;
            tdCost.textContent = `Rs. ${cost}`;
            tdQuantity.textContent = quantity;
            tdTotal.textContent = `Rs. ${total}`;
            tr.appendChild(tdName);
            tr.appendChild(tdCost);
            tr.appendChild(tdQuantity);
            tr.appendChild(tdTotal);
            document.querySelector('#cost-products').appendChild(tr);
            const totalNumber = []
            function totalFunc() {
                for (let i = 0; i < document.getElementById('cost-products').children.length; i++) {
                    let totalCost = document.getElementById('cost-products').children[i].children[3].innerHTML.replace('Rs. ', '');
                    totalNumber.push(totalCost);
                }
            }
            totalFunc();
            var sum = 0;
            for (var i = 0; i < totalNumber.length; i++) {
                sum += parseInt(totalNumber[i], 10);
            }
            document.querySelector('#show-result').innerHTML = `Rs. ${sum}`;
        });
    }
}