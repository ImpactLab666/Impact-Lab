document.addEventListener('DOMContentLoaded', () => {
    // Инициализация слайдера
    let slideIndex = 0;

    function showSlides(n) {
        const slides = document.querySelectorAll('.perfume-slide');
        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;

        // Скрываем все слайды
        slides.forEach(slide => slide.style.display = 'none');

        // Показываем текущий слайд
        slides[slideIndex].style.display = 'block';
    }

    function moveSlide(n) {
        showSlides(slideIndex += n);
    }

    // Инициализация слайдера при загрузке страницы
    showSlides(slideIndex);

    // Переключение слайдов автоматически
    setInterval(() => {
        moveSlide(1);
    }, 5000); // Слайд меняется каждые 5 секунд

    // Переключение языков
    const languageLinks = document.querySelectorAll('.language-switcher a');

    languageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.dataset.lang;

            // Сохраняем выбранный язык в localStorage
            localStorage.setItem('lang', lang);

            // Перезагружаем страницу для применения изменений
            location.reload();
        });
    });

    // Функция для получения текущего языка
    function getLanguage() {
        const lang = localStorage.getItem('lang');
        return lang ? lang : 'en'; // Если язык не выбран, по умолчанию 'en'
    }

    // Применение языка ко всем элементам на странице
    const currentLang = getLanguage();
    const elements = document.querySelectorAll('[data-lang-text]');

    const translations = {
        en: {
            "home": "Home",
            "catalog": "Catalog",
            "about": "About Us",
            "privacy-policy": "Privacy Policy",
            "shipping-policy": "Shipping and Delivery Policy",
            "contact": "Contact"
        },
        ua: {
            "home": "Головна",
            "catalog": "Каталог",
            "about": "Про нас",
            "privacy-policy": "Політика конфіденційності",
            "shipping-policy": "Політика доставки та доставки",
            "contact": "Контакт"
        },
        ru: {
            "home": "Главная",
            "catalog": "Каталог",
            "about": "О нас",
            "privacy-policy": "Политика конфиденциальности",
            "shipping-policy": "Политика доставки",
            "contact": "Контакт"
        },
        de: {
            "home": "Startseite",
            "catalog": "Katalog",
            "about": "Über uns",
            "privacy-policy": "Datenschutz",
            "shipping-policy": "Versand- und Lieferpolitik",
            "contact": "Kontakt"
        }
    };

    // Применяем переводы для всех элементов, которые имеют атрибут data-lang-text
    elements.forEach(element => {
        const textKey = element.getAttribute('data-lang-text');
        if (translations[currentLang] && translations[currentLang][textKey]) {
            element.textContent = translations[currentLang][textKey];
        }
    });
});

