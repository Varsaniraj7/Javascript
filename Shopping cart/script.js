// Retrieve the cart from local storage, or initialize it if it doesn't exist
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Save the cart to local storage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to add items to the cart
function addToCart(id, name, price) {
    let cart = getCart();
    const item = cart.find(item => item.id === id);

    if (item) {
        item.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    saveCart(cart);
    updateCartDisplay();
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem('cart');
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cart = getCart();
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty</p>';
        return;
    }

    let total = 0;
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `${item.name} - $${item.price} x ${item.quantity}`;
        cartContainer.appendChild(itemDiv);
        total += item.price * item.quantity;
    });

    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<strong>Total: $${total}</strong>`;
    cartContainer.appendChild(totalDiv);
}

// Initial cart display update when the page loads
window.onload = updateCartDisplay;
