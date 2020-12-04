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

const advElements = document.querySelectorAll(".promo__adv img"),
    promoContent = document.querySelector(".promo__content"),
    promoGenre = promoContent.querySelector(".promo__genre"),
    promoBg = promoContent.querySelector(".promo__bg"),
    watchedMovies = promoContent.querySelector(".promo__interactive-list"),
    addFilmForm = promoContent.querySelector("form.add"),
    addFilmFormInput = addFilmForm.querySelector(".adding__input"),
    addFilmFormFavoriteMovie = addFilmForm.querySelector("[type='checkbox']"),
    addFilmFormButton = addFilmForm.querySelector("button");

const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
};

const makeChanges = () => {
    promoGenre.textContent = "драма";
    promoBg.style.backgroundImage = "url('../img/bg.jpg')";
};

function clean(parent) {
    parent.innerHTML = '';
}

function sortArr(arr) {
    arr.sort();
}

function createMovieList(films, parent) {
    clean(parent);
    sortArr(films);

    films.forEach((film, i) => {
        parent.insertAdjacentHTML(
            'beforeend',
            `<li class="promo__interactive-item">
                ${i + 1} ${film}
                <div class="delete"></div>
            </li>`
        );
    });

    parent.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            movieDB.movies.splice(i, 1);
            btn.parentElement.remove();

            createMovieList(films, parent);
        });
    });
}

addFilmForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let newMovie = addFilmFormInput.value;
    const favorite = addFilmFormFavoriteMovie.checked;

    if (newMovie && newMovie.trim()) {

        if (newMovie.length > 21) {
            newMovie = `${newMovie.slice(0, 21)}...`;
        }

        movieDB.movies.push(newMovie);

        clean(watchedMovies);
        sortArr(movieDB.movies);
        createMovieList(movieDB.movies, watchedMovies);
    }

    if (favorite) {
        console.log("Добавляем любимый фильм");
    }

    e.target.reset();
});

deleteAdv(advElements);
makeChanges();
createMovieList(movieDB.movies, watchedMovies);
