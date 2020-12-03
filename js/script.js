/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advUnits = document.querySelectorAll(".promo__adv img"),
    promoContent = document.querySelector(".promo__content"),
    promoGenre = promoContent.querySelector(".promo__genre"),
    promoBg = promoContent.querySelector(".promo__bg"),
    watchedMovies = promoContent.querySelector(".promo__interactive-list");

advUnits.forEach(unit => {
    unit.remove();
});

promoGenre.textContent = "драма";
promoBg.style.backgroundImage = "url('../img/bg.jpg')";

watchedMovies.innerHTML = '';

movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    watchedMovies.insertAdjacentHTML(
        'beforeend',
        `<li class="promo__interactive-item">
            ${i + 1}: ${film}
            <div class="delete"></div>
        </li>`
    );
});
