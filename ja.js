document.addEventListener("DOMContentLoaded", function() {
    let food1s = document.getElementById('food1');
    let food2s = document.getElementById('food2');
    let foods = document.getElementById('food');

    if (food1s) {
        food1s.addEventListener('click', () => {
            foods.style.backgroundImage = "url('food1.png')";
        });
    }

    if (food2s) {
        food2s.addEventListener('click', () => {
            foods.style.backgroundImage = "url('food.jpg')";
        });
    }

    let cart = [];
    let total = 0;

    window.addToCart = function(item, price) {
        cart.push({ item, price });
        total += price;
        updateCart();
    }

    window.removeFromCart = function(item, price) {
        const index = cart.findIndex(cartItem => cartItem.item === item && cartItem.price === price);
        if (index !== -1) {
            cart.splice(index, 1);
            total -= price;
            updateCart();
        }
    }

    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';
        cart.forEach(cartItem => {
            const li = document.createElement('li');
            li.textContent = `${cartItem.item} - ₹${cartItem.price}`;
            cartItems.appendChild(li);
        });
        document.getElementById('total').textContent = `Total: ₹${total}`;
    }
});
