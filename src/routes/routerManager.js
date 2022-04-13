const express = require('express');

const userRouter = require('./user.route');
const moviesRouter = require('./movies.route');
const dbRouter = require('./db.router');
const mappingAPI = '/sequelizeAPI/v1';
const usersMapping = '/users';
const moviesMapping = '/movies';
const dbMapping = '/db';

const routerManager = app => {
	const router = express.Router();

	app.use(mappingAPI, router);
	router.use(usersMapping, userRouter);
	router.use(moviesMapping, moviesRouter);
	router.use(dbMapping, dbRouter);
};

module.exports = routerManager;
