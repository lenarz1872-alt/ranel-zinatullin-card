'use strict';

// Ссылки работают и без JavaScript. Здесь — только кнопка возврата наверх.
const backTop = document.querySelector('.back-top');
function updateBackTop() {
  backTop.hidden = window.scrollY < 500;
}
window.addEventListener('scroll', updateBackTop, { passive: true });
updateBackTop();
