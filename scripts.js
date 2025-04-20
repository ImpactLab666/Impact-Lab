// script.js

// Language switcher
const translations = {
  en: {
    title: "Impact Lab",
    subtitle: "Alchemical Perfume Shop"
  },
  de: {
    title: "Impact Labor",
    subtitle: "Alchemistisches Parfümgeschäft"
  },
  ua: {
    title: "Імпакт Лаб",
    subtitle: "Алхімічна Парфумерна Крамниця"
  }
};

function switchLanguage(lang) {
  document.querySelector('.gothic').innerText = translations[lang].title;
  document.querySelector('.subtitle').innerText = translations[lang].subtitle;
}

document.querySelectorAll('.language-switcher button').forEach(btn => {
  btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
});

// Cart logic
let cart = [];

function addToCart(product) {
  cart.push(product);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = cart.map(item => `<li>${item}</li>`).join('');
}

// Fake checkout
function checkout() {
  alert("Checkout is currently a demo. Payments: PayPal, Pionir, Monobank coming soon.");
}

// Social buttons
function openLink(url) {
  window.open(url, '_blank');
}
