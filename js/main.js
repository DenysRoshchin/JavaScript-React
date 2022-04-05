"use strict";

let numbersOfFilms = prompt('Numbers of muvies');

let movieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let movieName = prompt('Name');
let movieRait = prompt('Rait');

movieDB.movies[movieName] = movieRait;


console.log(movieName);
console.log(movieRait);
console.log(movieDB.movies);
console.log(movieDB);


