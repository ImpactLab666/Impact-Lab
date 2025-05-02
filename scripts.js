// Header translations
const translationsHeader = {
    en: { title: "Impact Lab", subtitle: "Alchemical Perfume Shop" },
    de: { title: "Impact Labor", subtitle: "Alchemistisches Parfümgeschäft" },
    ua: { title: "Імпакт Лаб", subtitle: "Алхімічна Парфумерна Крамниця" },
    ru: { title: "Импакт Лаб", subtitle: "Алхимическая парфюмерная лавка" }
};

// Content translations
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

// Switch language
function switchLanguage(lang) {
    const t = translationsContent[lang];
    if (!t) return;

    document.getElementById('enterButton')?.textContent = t.enter;

    document.querySelectorAll('.cat-name').forEach(span => {
        const key = span.getAttribute('data-key');
        if (t[key]) span.textContent = t[key];
    });

    document.getElementById('footerText')?.textContent = t.footer;

    document.getElementById('main-title')?.textContent = translationsHeader[lang].title;
    document.getElementById('subtitle')?.textContent = translationsHeader[lang].subtitle;
}

// All JS after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    // Language switch event
    document.querySelectorAll('.language-switcher a').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    // Swiper initialization
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade',
    });

    // Currency toggle logic
    const toggle = document.querySelector('.currency-toggle');
    const menu = document.querySelector('.currency-menu');

    if (toggle && menu) {
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
                recalculatePrices(currency);
                menu.style.display = 'none';
            });
        });
    }
});

// Currency price recalculation
function recalculatePrices(currency) {
    const prices = document.querySelectorAll('.product-price');
    prices.forEach(priceElem => {
        const basePrice = parseFloat(priceElem.getAttribute('data-base-price'));
        if (!isNaN(basePrice)) {
            let convertedPrice = basePrice;
            if (currency === 'USD') {
                convertedPrice = basePrice * 1.1;
            } else if (currency === 'EUR') {
                convertedPrice = basePrice * 0.9;
            }
            priceElem.textContent = `${convertedPrice.toFixed(2)} ${currency}`;
        }
    });
}










