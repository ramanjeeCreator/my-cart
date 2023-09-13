// document.querySelector('.add-row-class').innerHTML = `
// <div class="row">
//     <h5 class="col card-title">Lilac Purple Text Print T-shirt</h5>
//     <ul class="col pagination no-select">
//         <li class="page-item"><span class="page-link" onclick="minus(this)">&#8722;</span></li>
//         <li class="page-item active"><span class="page-link">2</span></li>
//         <li class="page-item"><span class="page-link" onclick="plus(this)">&#43;</span></li>
//     </ul>
// </div>
// <p class="card-text">Shirt -1</p>
// <p class="card-text" price="1700">Rs. 1700</p>
// <div class="card-text row" id="add3span">3 spans</div>
// `;

document.getElementById('add3span').innerHTML = `
<span class="col">Free Delivery</span>
<span class="col" id="addButton">Button</span>
<span class="col"><i class="fa-solid fa-heart no-select" onclick="changeColorToPink(this)"></i> Move To wish list</span>
`;

document.getElementById('addButton').innerHTML = `
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
`;
