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

// Slider logic
let slideIndex = 0;

// Function to show the current slide
function showSlide(index) {
    const slides = document.querySelectorAll('.slider-images .perfume-slide');
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

// Function to move the slide forward or backward
function moveSlide(step) {
    const slides = document.querySelectorAll('.slider-images .perfume-slide');
    slideIndex = (slideIndex + step + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Initialization and interval for automatic slider movement
document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex); // Show the first slide on load
    setInterval(() => moveSlide(1), 5000); // Change slide every 5 seconds

    // Event listeners for slider buttons
    document.querySelector('.slider-button.next')?.addEventListener('click', () => moveSlide(1));
    document.querySelector('.slider-button.prev')?.addEventListener('click', () => moveSlide(-1));
});

