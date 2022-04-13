const express = require('express');
const router = express.Router();
const {
	createUser,
	getUserById,
	getUsers,
	addFavorite,
} = require('../controllers/users.controller');

router.get('/', async (req, res) => {
	const users = await getUsers();
	const result = {
		data: users,
	};
	res.json(result);
});

router.get('/:id', async (req, res) => {
	const { id } = req.params;
	const user = await getUserById(id);
	if (user) {
		res.json(user);
	} else {
		res.status(204).send(`No se encontró el usuario con id ${id}`);
	}
});

router.post('/', async (req, res) => {
	const { body } = req;
	try {
		const newUser = await createUser(body);
		res.json({ newUser });
	} catch (error) {
		console.log(error);
		res.status(500).send('Error al crear el usuario');
	}
});

router.put('/:userId/movies/:movieId', async (req, res) => {
	const { userId, movieId } = req.params;
	const user = await addFavorite(userId, movieId);
	res.json({ user });
});

module.exports = router;
