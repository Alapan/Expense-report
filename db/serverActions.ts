'use server';

import { getSession } from '@auth0/nextjs-auth0';
import knexClient from './knexClient';
import { getTotalExpenses, groupExpensesByDate, sortExpensesByDate } from './helpers';
import { DbExpense, UiExpense } from '@/types';

export async function createExpense(formData: FormData) {
  const session = await getSession();
  const userEmail = session?.user.email;
  const {
    currency,
    dateOfExpense,
    place,
    category,
  } = Object.fromEntries(formData);
  const date = new Date(dateOfExpense as string).toISOString()

  let amount = formData.get('amount') as string;
  amount = amount.replace(',', '.');

  try {
    const dbUser = await knexClient('useraccount').where('email', userEmail).first();
    const dbCategory = await knexClient('category').where('name', category).first();
    if (dbUser.id && dbCategory.id) {
      const [ expense ] = await knexClient('expense')
        .insert({
          amount,
          currency,
          date,
          place,
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
      return expense.id;
    }
    return 0;
  } catch (err) {
    throw err;
  }
};

export async function getExpenses() {
  const session = await getSession();
  const userEmail = session?.user.email;

  try {
    const user = await knexClient('useraccount')
      .where('email', userEmail)
      .first();
    const expenses = await knexClient('expense')
      .where('user_id', user.id)
      .select([
        'id',
        'date',
        'amount',
        'place',
        'currency',
        'category_id',
      ]);
    const expensesWithCategoryName: UiExpense[] = await Promise.all(expenses.map(async (expense: DbExpense) => {
      const { category_id, ...rest } = expense;
      const category = await knexClient('category')
        .where('id', category_id)
        .select('name')
        .first();
      return { ...rest, categoryName: category.name }
    }));
    const expensesEachMonth = groupExpensesByDate(expensesWithCategoryName);
    const expensesEachMonthWithTotal = expensesEachMonth.map((expenses) => {
      const total = getTotalExpenses(sortExpensesByDate(expenses));
      return { ...expenses, total }
    });
    return expensesEachMonthWithTotal;
  } catch (err) {
    throw err;
  }
}
