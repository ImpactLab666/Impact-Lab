const translationsHeader = {
    en: { title: "Impact Lab", subtitle: "Alchemical Perfume Shop" },
    de: { title: "Impact Labor", subtitle: "Alchemistisches Parfümgeschäft" },
    ua: { title: "Імпакт Лаб", subtitle: "Алхімічна Парфумерна Крамниця" },
    ru: { title: "Импакт Лаб", subtitle: "Алхимическая парфюмерная лавка" }
};

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

// Language switching function
function switchLanguage(lang) {
    const t = translationsContent[lang];
    document.getElementById('enterButton')?.textContent = t.enter;
    document.querySelectorAll('.cat-name').forEach(span => {
        const key = span.getAttribute('data-key');
        if (t[key]) span.textContent = t[key];
    });
    document.getElementById('footerText').textContent = t.footer;
    // Update the header titles as well
    document.getElementById('main-title').textContent = translationsHeader[lang].title;
    document.getElementById('subtitle').textContent = translationsHeader[lang].subtitle;
}

// Event listener for language selection
document.querySelectorAll('.language-switcher a').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        switchLanguage(lang);
    });
});

// Function to switch currency
function switchCurrency(currency) {
    // Example: change prices based on the selected currency
    // You can modify this code to change the prices on your site according to the selected currency.
    const prices = document.querySelectorAll('.price'); // All elements with class .price

    prices.forEach(priceElement => {
        let priceInUsd = parseFloat(priceElement.getAttribute('data-usd')); // Assume price is in USD

        if (currency === 'eur') {
            priceElement.textContent = (priceInUsd * 0.85).toFixed(2) + ' €'; // Example conversion to Euro
        } else if (currency === 'uah') {
            priceElement.textContent = (priceInUsd * 27).toFixed(2) + ' UAH'; // Example conversion to Ukrainian Hryvnia
        } else {
            priceElement.textContent = priceInUsd.toFixed(2) + ' $'; // If USD
        }
    });
}

// Currency change event listener
document.getElementById('currency-select').addEventListener('change', (event) => {
    const selectedCurrency = event.target.value; // Get the selected currency
    switchCurrency(selectedCurrency); // Change the currency
});

// Initialize with default currency
document.addEventListener('DOMContentLoaded', () => {
    const defaultCurrency = 'usd'; // Set USD as the default currency
    switchCurrency(defaultCurrency); // Apply the default currency on page load
});


// Swiper slider initialization and logic
document.addEventListener("DOMContentLoaded", () => {
    // Initialize Swiper with specific settings
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
            clickable: true,
        },
        effect: 'fade', // Smooth fading effect between slides
    });

    // Swiper instance is automatically initialized, no need for custom next/prev button listeners
});


