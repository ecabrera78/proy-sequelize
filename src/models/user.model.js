module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('Users', {
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
		lastName: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	});

	return User;
};
