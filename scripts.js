// Перевод заголовков
const translationsHeader = {
    en: { title: "Impact Lab", subtitle: "Alchemical Perfume Shop" },
    de: { title: "Impact Labor", subtitle: "Alchemistisches Parfümgeschäft" },
    ua: { title: "Імпакт Лаб", subtitle: "Алхімічна Парфумерна Крамниця" },
    ru: { title: "Импакт Лаб", subtitle: "Алхимическая парфюмерная лавка" }
};

// Перевод контента
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
    de: {
        enter: "Katalog betreten",
        women: "Düfte für Frauen",
        men: "Düfte für Männer",
        unisex: "Unisex Düfte",
        gifts: "Magische Geschenke",
        jewelry: "Schmuck",
        footer: "© 2025 Impact Lab. Alle Rechte vorbehalten."
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
    ru: {
        enter: "Войти в каталог",
        women: "Женские духи",
        men: "Мужские духи",
        unisex: "Унисекс духи",
        gifts: "Магические подарки",
        jewelry: "Украшения",
        footer: "© 2025 Impact Lab. Все права защищены."
    }
};

// Функция смены языка
function switchLanguage(lang) {
    const t = translationsContent[lang];

    // Обновление текста кнопок и категорий
    document.getElementById('enterButton')?.textContent = t.enter;
    document.querySelectorAll('.cat-name').forEach(span => {
        const key = span.getAttribute('data-key');
        if (t[key]) span.textContent = t[key];
    });
    document.getElementById('footerText').textContent = t.footer;

    // Обновление заголовков
    document.getElementById('main-title').textContent = translationsHeader[lang].title;
    document.getElementById('subtitle').textContent = translationsHeader[lang].subtitle;
}

// Обработчик события для смены языка
document.querySelectorAll('.language-switcher a').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        switchLanguage(lang);
    });
});

// Инициализация Swiper слайдера
document.addEventListener("DOMContentLoaded", () => {
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
});

// Переключение валюты
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
            recalculatePrices(currency);
            menu.style.display = 'none';
        });
    });
});

// Функция пересчёта цен
function recalculatePrices(currency) {
    const prices = document.querySelectorAll('.product-price');
    prices.forEach(priceElem => {
        const basePrice = parseFloat(priceElem.getAttribute('data-base-price'));
        let convertedPrice = basePrice;
        if (currency === 'USD') {
            convertedPrice = basePrice * 1.1; // Примерный курс
        } else if (currency === 'EUR') {
            convertedPrice = basePrice * 0.9; // Примерный курс
        }
        priceElem.textContent = `${convertedPrice.toFixed(2)} ${currency}`;
    });
}


