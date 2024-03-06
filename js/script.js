/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';


let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
} 

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
				 b = +prompt('На сколько оцените его?', '');
	
		if (a != '' && b != '' && a != null && b != null && a.length <= 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (numberOfFilms < 10) {
		alert('Просмотренно довольно мало фильмов', '');
	} else if (numberOfFilms <= 30) {
		alert('Вы классический зритель', '');
	} else if (numberOfFilms > 30) {
		alert('Вы киноман', '');
	} else {
		alert('Вы ввели не правильно');
	}
}

detectPersonalLevel();

function showMyDB() {
	if (personalMovieDB.privat === false) {
		console.log(personalMovieDB);
	}
}

showMyDB();

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		const questGenres =  prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieDB.genres[i - 1] = questGenres;
	}
}

writeYourGenres();