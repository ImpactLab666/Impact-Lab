let cart = [];

function addToCart(itemName) {
  cart.push(itemName);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartCount = document.getElementById('cart-count');
  const cartItems = document.getElementById('cart-items');
  cartCount.textContent = cart.length;
  cartItems.innerHTML = '';

  cart.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    cartItems.appendChild(li);
  });
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  alert('Redirecting to payment...');
}



