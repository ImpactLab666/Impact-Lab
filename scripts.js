let cart = [];
let total = 0;
let language = 'EN';

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalEl = document.getElementById('total');
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.product} - $${item.price}`;
    cartItems.appendChild(div);
  });
  totalEl.textContent = total;
}

function checkout() {
  alert("Redirecting to payment (not implemented yet)");
}

function switchLanguage() {
  if (language === 'EN') {
    document.querySelector('h2').textContent = 'Крафтові аромати з темряви';
    document.querySelector('.intro p').textContent = 'Відкрий для себе унікальні алхімічні парфуми, натхненні містикою.';
    document.querySelector('#catalog h2').textContent = 'Каталог';
    document.querySelector('#reviews h2').textContent = 'Відгуки';
    document.querySelector('#cart h2').textContent = 'Кошик';
    document.querySelector('#cart button').textContent = 'Оплатити карткою / PayPal';
    language = 'UA';
  } else {
    document.querySelector('h2').textContent = 'Crafted Scents from the Shadows';
    document.querySelector('.intro p').textContent = 'Explore our unique collection of alchemical perfumes inspired by the arcane.';
    document.querySelector('#catalog h2').textContent = 'Catalog';
    document.querySelector('#reviews h2').textContent = 'Customer Reviews';
    document.querySelector('#cart h2').textContent = 'Your Cart';
    document.querySelector('#cart button').textContent = 'Checkout with Card / PayPal';
    language = 'EN';
  }
}

