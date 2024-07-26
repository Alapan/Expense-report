const knex = require('knex');

const knexFile = require('../knexfile');

const environment = 'development';

export default knex(knexFile[environment]);
