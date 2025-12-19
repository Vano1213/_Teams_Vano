// Мобильное меню
const burger = document.getElementById('burger');
const menu = document.querySelector('.menu');

if (burger && menu) {
    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // Закрыть меню при клике на ссылку
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            burger.classList.remove('active');
        });
    });

    // Анимация буггера
    burger.addEventListener('click', () => {
        const spans = burger.querySelectorAll('span');
        spans[0].style.transform = burger.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
        spans[1].style.opacity = burger.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = burger.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
    });
}

console.log('Menu JS loaded');
