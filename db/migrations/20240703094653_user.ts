import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  knex.schema.hasTable('user').then((hasTable) => {
    if (hasTable) return;

    return knex.schema.createTable('user', (table) => {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');
    });
  });
};

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('user');
};
