'use strict';

// фильтр
app();

// кнопка «наверх»
document.addEventListener("DOMContentLoaded", function () {
    const top = document.getElementById("top");

    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            top.style.display = "block";
        } else {
            top.style.display = "none";
        }
    });

    // Плавная прокрутка при клике на кнопку
    top.addEventListener("click", function (event) {
        event.preventDefault();

        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});