// scripts.js

// Function to switch language
function switchLanguage(lang) {
  const elements = document.querySelectorAll(`.lang-${lang}`);
  elements.forEach(el => el.style.display = 'block');
  const otherLang = lang === 'en' ? 'ua' : 'en';
  const otherElements = document.querySelectorAll(`.lang-${otherLang}`);
  otherElements.forEach(el => el.style.display = 'none');
}

// Initialize with default language
switchLanguage('en');

// Example usage
document.getElementById('en-btn').addEventListener('click', () => switchLanguage('en'));
document.getElementById('ua-btn').addEventListener('click', () => switchLanguage('ua'));


