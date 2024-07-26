
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest } from 'next/server';
import { ApolloServer } from '@apollo/server';
import { GraphQLScalarType } from 'graphql';

import { FormExpense } from '../../../db/utils';
import knexClient from '../../../db/knexClient';

const typeDefs = `#graphql
  scalar Date

  input UserExpenseInput {
    place: String
    amount: Int!
    date: Date!
    currency: String!
    category: String!
    email: String!
  }

  type DbExpense {
    place: String
    amount: Int!
    date: Date!
    currency: String!
    created_at: Date!
    updated_at: Date!
    category_id: String!
    user_id: String!
  }

  type Query {
    getExpenseById(id: String!): DbExpense
    getAllExpensesForUser(email: String!): [DbExpense]
  }

  type Mutation {
    createAndUpdateExpense(expense: UserExpenseInput): Int
  }
`;

const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    parseValue: (value) => {
      return new Date(value as string);
    },
    serialize: (value) => {
      return (value as Date).toISOString();
    },
  }),
  Query: {
    getExpenseById: async (_: any, { id }: { id: string}) => {
      try {
        return await knexClient('expense').where('id', id).first();
      } catch (err) {
        throw err;
      }
    },
    getAllExpensesForUser: async (_: any, { email }: { email: string }) => {
      try {
        const user = await knexClient('useraccount').where('email', email).first();
        return await knexClient('expense').where('user_id', user.id)
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    createAndUpdateExpense: async (_: any, { expense }: { expense: FormExpense }) => {
      try {
        const { category, email, ...expenseToSave } = expense;
        const dbUser = await knexClient('useraccount').where('email', email).first();
        const dbCategory = await knexClient('category').where('name', category).first();
        if (dbUser.id && dbCategory.id) {
          const [ expenseId ] = await knexClient('expense')
            .insert({
              ...expenseToSave,
              user_id: dbUser.id,
              category_id: dbCategory.id
            })
            .returning((['id']))
            .onConflict('id')
            .merge([
              'place',
              'currency',
              'amount',
              'category_id',
              'updated_at',
              'date'
            ]);
          return expenseId.id;
        }
        return null;
      } catch (err) {
        throw err;
      }
    }
  },
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
  context: async req => ({ req }),
});

export { handler as GET, handler as POST };
