const express = require('express');
const carsRouter = require('./carsRouter');

const db = require('../data/dbConfig');

const server = express();

server.use(express.json());
server.use('/cars', carsRouter);

module.exports = server;
