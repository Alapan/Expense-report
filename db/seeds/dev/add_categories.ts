import { Knex } from 'knex';
import { categories } from '../../utils';

export async function seed(knex: Knex): Promise<void> {
  await knex('category').del();
  await knex('category').insert(categories);
};
