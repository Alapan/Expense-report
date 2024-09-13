import { Knex } from 'knex';
import { categories } from '../../../types';

export async function seed(knex: Knex): Promise<void> {
  await knex('category').del();
  await knex('category').insert(categories);
};
