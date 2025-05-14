document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.nav').classList.toggle('active')
})


let cartItems = [];
let cartBox = document.querySelector('.cart-box');
let buttons = document.querySelectorAll('.rent-btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        let book = buttons[i].closest('.book');
        let title = book.querySelector('.title').textContent;
        let price = parseFloat(book.querySelector('.price').dataset.price);

        cartItems.push({ title: title, days: 1, price: price });

        renderCart();
    });
}

function renderCart() {
    let total = 0;
    let cartHTML = `
        <h2>Your Rental Cart</h2>
        <ul>
    `;

    for (let i = 0; i < cartItems.length; i++) {
        let item = cartItems[i];
        let cost = item.price * item.days;
        total += cost;
        cartHTML += `<li>${item.title} - ${item.days} day(s) - $${cost.toFixed(2)}</li>`;
    }

    cartHTML += `
        </ul>
        <span>Total: $${total.toFixed(2)}</span><br>
        <button>Confirm Rental</button>
    `;

    cartBox.style.display = 'block';
    cartBox.style.color = 'black';
    cartBox.innerHTML = cartHTML;
}
