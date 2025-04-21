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

function switchLanguage(lang) {
  const t = translationsContent[lang];
  document.getElementById('enterButton').textContent = t.enter;
  document.querySelectorAll('.cat-name').forEach(span => {
    const key = span.getAttribute('data-key');
    span.textContent = t[key];
  });
  document.getElementById('footerText').textContent = t.footer;
}

document.querySelectorAll('.language-switcher a').forEach(btn => {

