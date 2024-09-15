import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  knex.schema.hasTable('useraccount').then((hasTable) => {
    if (hasTable) return;

    return knex.schema.createTable('useraccount', (table) => {
      table.increments('id').primary();
      table.string('email').unique();
      table.string('name');
      table.string('picture');
    });
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('useraccount');
}
