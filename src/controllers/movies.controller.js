const db = require('../db/dbManager');
const Movie = db.Movie;

const createMovie = async data => {
	const movie = await Movie.create(data);
	return movie;
};

module.exports = { createMovie };
