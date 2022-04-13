module.exports = (sequelize, Sequelize) => {
	const Movie = sequelize.define('Movies', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		duration: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		synopsis: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	});

	return Movie;
};
