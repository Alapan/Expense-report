const dotenv = require('dotenv');

dotenv.config({ path: '.env.local'});
dotenv.config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URI,
    migrations: {
      directory: 'db/migrations',
    },
    seeds: {
      directory: 'db/seeds/dev',
    }
  },
};
