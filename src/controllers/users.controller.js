const db = require('../db/dbManager');
const { User, Movie } = db;

const createUser = async data => {
	try {
		const user = await User.create(data);
		return user;
	} catch (error) {
		throw error;
	}
};

const getUserById = async id => {
	const user = await User.findByPk(id);
	console.log({ user });
	return user;
};

const getUsers = async () => {
	const listUsers = await User.findAll();
	return listUsers;
};

const addFavorite = async (userId, movieId) => {
	const user = await User.findByPk(userId);
	if (!user) {
		throw new Error('El usuario no existe');
	}
	const movie = await Movie.findByPk(movieId);
	if (!movie) {
		throw new Error('La película no existe');
	}
	const result = await user.addMovie(movie);
	return result;
};

module.exports = {
	createUser,
	getUserById,
	getUsers,
	addFavorite,
};
