// All content and résumé files are bundled at build time: no fetch or server needed.
document.documentElement.classList.remove('no-js');

const languageButtons = document.querySelectorAll('[data-language]');
const translatableElements = document.querySelectorAll('[data-i18n]');

function setLanguage(language) {
  if (!Object.hasOwn(content, language)) return;
  const translations = content[language];
  translatableElements.forEach((element) => {
    element.innerHTML = translations[element.dataset.i18n];
  });
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = language === 'zh'
    ? 'Matteo Jiahao Chen · 陈佳豪 — 研究与简历'
    : 'Matteo Jiahao Chen — Research & Résumé';
  languageButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });
  // File previews and privacy settings can disable storage; switching still works.
  try { localStorage.setItem('portfolio-language', language); } catch { /* Optional preference. */ }
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});
try {
  const savedLanguage = localStorage.getItem('portfolio-language');
  if (savedLanguage && Object.hasOwn(content, savedLanguage)) setLanguage(savedLanguage);
} catch { /* English is the default when storage is unavailable. */ }

// Blob links allow ordinary PDF downloads from disk and HTML previews.
document.querySelectorAll('[data-resume]').forEach((link) => {
  try {
    const bytes = Uint8Array.from(atob(link.href.split(',')[1]), (character) => character.charCodeAt(0));
    link.href = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
  } catch { /* The embedded data URL remains a usable download fallback. */ }
});
