import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  knex.schema.hasTable('expense').then((hasTable) => {
    if (hasTable) return;

    return knex.schema.createTable('expense', (table) => {
      table.increments('id').primary();
      table.dateTime('date');
      table.integer('amount').unsigned().notNullable();
      table.integer('user_id')
        .references('id')
        .inTable('user')
      table.integer('category_id')
        .references('id')
        .inTable('category')
    });
  })
};

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('expense');
};
