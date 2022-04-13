const express = require('express');
require('dotenv').config();

const db = require('./db/dbManager');

const routerManager = require('./routes/routerManager');

const port = process.env.SERVER_PORT || 8090;

const app = express();

app.use(express.json());

routerManager(app);

// db.sequelize
// 	.sync({ alter: true })
// 	.then(result => {
// 		app.listen(port, async () => {
// 			console.log(`Server is listening on port ${port}`);
// 		});
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});

db.sequelize.authenticate().then(result => {
	console.log('Connection success');
	app.listen(port, async () => {
		console.log(`Server is listening on port ${port}`);
	});
});
