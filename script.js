// Скрипт для модального окна
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('feedbackModal');
    const btnOpenModal = document.getElementById('openFeedbackModal'); // Изменил id
    const btnCloseModal = document.getElementById('closeModal');

    // Открытие модального окна
    btnOpenModal.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // Закрытие модального окна
    btnCloseModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Закрытие модального окна при клике вне его области
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

