import { Knex } from 'knex';
import { CategoryTypes } from '../../utils';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('category').del();

  // Inserts seed entries
  await knex('category').insert([
    {
      name: 'Food and groceries',
      type: CategoryTypes.NEED,
    },
    {
      name: 'Housing',
      description: 'e.g maintenance fee, extra renovations',
      type: CategoryTypes.NEED,
    },
    {
      name: 'Loans',
      description: 'Includes house loans and other loans',
      type: CategoryTypes.NEED,
    },
    {
      name: 'Health',
      description: 'Doctor charges, test fees etc.',
      type: CategoryTypes.NEED,
    },
    {
      name: 'Vehicles and transport',
      type: CategoryTypes.NEED,
    },
    {
      name: 'Insurance policies',
      type: CategoryTypes.NEED,
    },
    {
      name: 'Other needs',
      description: 'e.g. debt collection, taxes',
      type: CategoryTypes.NEED,
    },
    {
      name: 'Shopping',
      type: CategoryTypes.WANT,
    },
    {
      name: 'Restaurants and cafés',
      type: CategoryTypes.WANT,
    },
    {
      name: 'Travel',
      description: 'e.g. holidays',
      type: CategoryTypes.WANT,
    },
    {
      name: 'Hobbies',
      type: CategoryTypes.WANT,
    },
    {
      name: 'Culture and entertainment',
      description: 'e.g. movies, visits to museums, parks',
      type: CategoryTypes.WANT,
    },
    {
      name: 'Other wants',
      description: 'e.g. service charges and fees',
      type: CategoryTypes.WANT,
    },
  ]);
};
