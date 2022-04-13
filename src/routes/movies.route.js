const express = require('express');
const router = express.Router();
const { createMovie } = require('../controllers/movies.controller');

router.post('/', async (req, res) => {
	const { body } = req;
	const movie = await createMovie(body);
	res.status(201).json({ movie });
});

module.exports = router;
