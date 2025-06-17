'use strict';

/**
* Фильтр приложения
*
* @return {undefined}
*/
function app() {
    const buttons = document.querySelectorAll('.products__link');
    const cards = document.querySelectorAll('.products__item');

    /**
    * Фильтр элементов
    *
    * @param {string} category категория
    * @param {object} items карточки товаров
    *
    * @return {undefined}
    */
    function filter(category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category);
            const isShowAll = category.toLowerCase() === 'all';

            if (isItemFiltered && !isShowAll) {
                item.classList.add('anime');

            } else {
                item.classList.remove('hide');
                item.classList.remove('anime');
            }
        });
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            buttons.forEach((btn) =>
                btn.classList.remove('products__link_active'));
            button.classList.add('products__link_active');

            const currentCategory = button.dataset.filter;
            filter(currentCategory, cards);
        });
    });

    cards.forEach((card) => {

        // ждем окончание анимации
        card.ontransitionend = function () {
            if (card.classList.contains('anime')) {
                card.classList.add('hide');
            }
        };
    });
}