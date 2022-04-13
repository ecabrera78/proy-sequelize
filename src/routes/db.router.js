const express = require('express');
const router = express.Router();
const db = require('../db/dbManager');

router.get('/', async (req, res) => {
	const schemas = await db.sequelize.showAllSchemas();
	res.json({ schemas });
});

router.get('/:modelName', async (req, res) => {
	const { modelName } = req.params;

	const model = await db.sequelize.model(modelName);
	console.log({ model });
	res.json({ model });
});

module.exports = router;
