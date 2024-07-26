'use server';

import { getSession } from '@auth0/nextjs-auth0';


export async function createExpense(prevState: { result: string }, formData: FormData) {
  const session = await getSession();
  const userEmail = session?.user.email;
  const {
    currency,
    dateOfExpense,
    place,
    category,
  } = Object.fromEntries(formData);
  const amount = formData.get('amount') as string;
  const responsePromise = await fetch(`${process.env.BASE_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation (
          $email: String!
          $date: Date!
          $amount: Float!
          $currency: String!
          $category: String!
          $place: String
        ){
          createAndUpdateExpense(expense: {
            currency: $currency
            date: $date
            amount: $amount
            place: $place
            category: $category
            email: $email
          })
        }
      `,
      variables: {
        email: userEmail,
        date: dateOfExpense,
        place,
        amount: parseFloat(amount),
        category,
        currency,
      }
    })
  })
  const responseObject = await responsePromise.json();
  if (responseObject.data?.createAndUpdateExpense > 0) {
    return {
      result: 'success',
    }
  }
  return {
    result: 'error',
  };
};
