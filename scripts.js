// Translations for the header

const translationsHeader = {

en: { title: "Impact Lab", subtitle: "Alchemical Perfume Shop" },

de: { title: "Impact Labor", subtitle: "Alchimistisches Parfümgeschäft" },

ua: { title: "Імпакт Лаб", subtitle: "Алхімічна Парфумерна Крамниця" },

ru: { title: "Импакт Лаб", subtitle: "Алхимическая парфюмерная лавка" }

};



// Translations for content

const translationsContent = {

en: {

enter: "Enter Catalog",

women: "Women's Perfumes",

men: "Men's Perfumes",

unisex: "Unisex Perfumes",

gifts: "Magical Gifts",

jewelry: "Jewelry",

footer: "© 2025 Impact Lab. All rights reserved."

},

ru: {

enter: "Войти в каталог",

women: "Женские духи",

men: "Мужские духи",

unisex: "Унисекс духи",

gifts: "Магические подарки",

jewelry: "Украшения",

footer: "© 2025 Impact Lab. Все права защищены."

},

ua: {

enter: "Увійти в каталог",

women: "Жіночі парфуми",

men: "Чоловічі парфуми",

unisex: "Унісекс парфуми",

gifts: "Магічні подарунки",

jewelry: "Прикраси",

footer: "© 2025 Impact Lab. Всі права захищені."

},

de: {

enter: "Katalog betreten",

women: "Düfte für Frauen",

men: "Düfte für Männer",

unisex: "Unisex Düfte",

gifts: "Magische Geschenke",

jewelry: "Schmuck",

footer: "© 2025 Impact Lab. Alle Rechte vorbehalten."

}

};



// Function to switch language

function switchLanguage(lang) {

const t = translationsContent[lang];



// Update button text and content of the categories

document.getElementById('enterButton')?.textContent = t.enter;

document.querySelectorAll('.cat-name').forEach(span => {

const key = span.getAttribute('data-key');

if (t[key]) span.textContent = t[key];

});

document.getElementById('footerText').textContent = t.footer;



// Update header titles

document.getElementById('main-title').textContent = translationsHeader[lang].title;

document.getElementById('subtitle').textContent = translationsHeader[lang].subtitle;

}



// Event listener for language switch

document.querySelectorAll('.language-switcher a').forEach(btn => {

btn.addEventListener('click', (e) => {

e.preventDefault();

const lang = btn.getAttribute('data-lang');

switchLanguage(lang);

});

});



// Swiper slider initialization and logic

document.addEventListener("DOMContentLoaded", () => {

const swiper = new Swiper('.swiper-container', {

loop: true, // Enable looping of slides

autoplay: {

delay: 5000, // 5 seconds delay for auto-sliding

disableOnInteraction: false, // Continue autoplay even after user interaction

},

navigation: {

nextEl: '.swiper-button-next', // Next slide button

prevEl: '.swiper-button-prev', // Previous slide button

},

pagination: {

el: '.swiper-pagination', // Pagination dots (optional)

clickable: true, // Make pagination dots clickable

},

effect: 'fade', // Smooth fading effect between slides

});



// Swiper instance is automatically initialized, no need for custom next/prev button listeners

});



document.addEventListener("DOMContentLoaded", () => {

const toggle = document.querySelector('.currency-toggle');

const menu = document.querySelector('.currency-menu');



toggle.addEventListener('click', (e) => {

e.preventDefault();

menu.style.display = menu.style.display === 'block' ? 'none' : 'block';

});



document.addEventListener('click', (e) => {

if (!toggle.contains(e.target) && !menu.contains(e.target)) {

menu.style.display = 'none';

}

});



document.querySelectorAll('.currency-menu a').forEach(link => {

link.addEventListener('click', e => {

e.preventDefault();

const currency = link.dataset.currency;

console.log(`Currency changed to: ${currency}`);

// Function to recalculate prices based on selected currency

recalculatePrices(currency);

menu.style.display = 'none';

});

});

});



// Recalculation of prices based on the selected currency

function recalculatePrices(currency) {

const prices = document.querySelectorAll('.product-price');

prices.forEach(priceElem => {

const basePrice = parseFloat(priceElem.getAttribute('data-base-price'));

let convertedPrice = basePrice;

if (currency === 'USD') {

convertedPrice = basePrice * 1.1; // Example conversion rate

} else if (currency === 'EUR') {

convertedPrice = basePrice * 0.9; // Example conversion rate

}

priceElem.textContent = `${convertedPrice.toFixed(2)} ${currency}`;

}
