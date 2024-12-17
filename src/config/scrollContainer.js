export const scrollContainer = document.querySelector('.scroll-content');

// Дублюємо вміст для безкінечної прокрутки
const clone = scrollContainer.cloneNode(true);
scrollContainer.appendChild(clone);
