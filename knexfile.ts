const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });
dotenv.config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URI,
    migrations: {
      directory: 'app/db/migrations',
    },
    seeds: {
      directory: 'app/db/seeds/dev',
    },
  },
};
