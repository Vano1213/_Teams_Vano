// js/form-validation.js

const form = document.getElementById('contact-form');

if (form) {
    form.addEventListener('submit', async (e) => {  // Добавлено async для поддержки fetch
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Валидация
        if (!name || !email || !message) {
            alert('Пожалуйста, заполните все поля!');
            return;
        }

        // Простая проверка email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Введите корректный email!');
            return;
        }

        // Отправка на Formspree
        // Форма отправляется на https://formspree.io/f/xbdrlqka (твой реальный ID из Formspree)
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        // Индикатор загрузки (опционально: покажи пользователю, что форма отправляется)
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Отправка...';
        submitBtn.disabled = true;

        try {
            const response = await fetch('https://formspree.io/f/xbdrlqka', {  // Используется твой ID: xbdrlqka
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                alert('Сообщение отправлено! Спасибо!');
                form.reset();
            } else {
                alert('Ошибка при отправке. Попробуйте позже.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ошибка сети. Попробуйте позже.');
        } finally {
            // Восстанови кнопку после отправки
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

console.log('Form validation JS loaded');
