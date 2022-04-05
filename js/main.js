"use strict";

let numbersOfFilms = prompt('Numbers of muvies');

let movieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let movieName = prompt('Name'),
    movieRait = prompt('Rait');

movieDB.movies[movieName] = movieRait;



