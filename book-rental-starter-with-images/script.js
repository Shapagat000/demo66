document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.nav').classList.toggle('active')
})


document.querySelector('.btncart').addEventListener('click', function(){
    let cartBox = document.querySelector('.cart-box');
    
    if (cartBox.style.display === 'block') {
        cartBox.style.display = 'none';
    } else {
        cartBox.style.display = 'block';
        cartBox.innerHTML = `
        <div style="color: black;">
        <a href="#">Cart</a>
        <h2>Your Rental Cart</h2>
        <ul>
        <li>Pride and Prejudice-3 days(s)-<br> $9.00</li>
        <li>Moby-Dick-4 days(s)- $4.00</li>
        <li>War nad Peace-3 days(s)- $4.00</li>
        <li>The Great Gatsby-4 days(s)- $8.00</li>
        <li>The Catcher in the Rye-4 days(s)- <br>$10.00</li>
        </ul>
        <span>Total: $35.50</span><br>
        <button>Confirm Rental</button>
    </div>`;}
})