import type { Knex } from 'knex';

import { CategoryTypes } from '../utils';

export async function up(knex: Knex): Promise<void> {
  knex.schema.hasTable('category').then((hasTable) => {
    if (hasTable) return;
  
    return knex.schema.createTable('category', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('description');
      table.enum('type', Object.values(CategoryTypes)).notNullable();
    });
  });
};

export async function down(knex: Knex): Promise<void> {
  return knex.raw('DROP TABLE category CASCADE');
};
