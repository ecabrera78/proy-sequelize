const { Sequelize } = require('@sequelize/core');
require('dotenv').config();

/*const sequelize = new Sequelize(
	`mysql://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/bd_training`
);*/

// Conexión a base de datos
//const sequelize = new Sequelize('sqlite::memory');
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: './movies_db.sqlite',
});

// Objeto para administrar modelos y conexión a BD
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('../models/user.model')(sequelize, Sequelize);
db.Movie = require('../models/movie.model')(sequelize, Sequelize);

db.User.belongsToMany(db.Movie, {
	through: {
		model: 'Favorites',
	},
	foreignKey: 'userId',
});

db.Movie.belongsToMany(db.User, {
	through: {
		model: 'Favorites',
	},
	foreignKey: 'movieId',
});
module.exports = db;
