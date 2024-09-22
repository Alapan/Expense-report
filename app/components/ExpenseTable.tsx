'use client';

import { useState } from 'react';
import { ExpensesByMonth } from '@/types';
import ExpenseRow from './ExpenseRow';
import useToast from '@/hooks/useToast';
import { deleteExpense } from '@/db/serverActions';
import Toast from './Toast';

interface ExpenseTableProps {
  expensesToDisplay: ExpensesByMonth[];
}

const ExpenseTable = ({ expensesToDisplay }: ExpenseTableProps) => {
  const { isVisible, showToast } = useToast();
  const [ deleteResult, setDeletionResult ] = useState(0);

  const handleDelete = async (expenseId: number) => {
    const deletedExpenseId = await deleteExpense(expenseId);
    if (deletedExpenseId === expenseId) {
      setDeletionResult(deletedExpenseId);
    } else {
      setDeletionResult(-1);
    }
    showToast();
  };

  return (
    <>
      {expensesToDisplay.map(({ month, year, expenses, total }, i) => (
        <div key={`${month} ${year}`} className="mx-5 my-10">
          <h2 className="text-3xl mb-10 font-medium">
            {month} {year}
          </h2>
          <section className="grid grid-rows-1 grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 pb-10">
            <h2 className="col-start-1 col-span-1 text-3xl font-medium">
              {'Total'}
            </h2>
            <h2 className="col-start-3 col-span-1 text-3xl md:col-start-4 xl:col-start-5 2xl:col-start-6 font-medium mx-auto">
              {`${total} ${expenses[0].currency}`}
            </h2>
          </section>
          {expenses.map((expense) => (
            <div key={expense.id} className="mb-10">
              <ExpenseRow expense={expense} handleDelete={handleDelete} />
            </div>
          ))}
        </div>
      ))}
      {deleteResult > 0 && (
        <Toast
          message="Expense successfully deleted!"
          backgroundColor="bg-green-400"
          width="w-8/12 md:w-4/12"
          isVisible={isVisible}
        />
      )}
      {deleteResult < 0 && (
        <Toast
          message="Error while deleting!"
          backgroundColor="bg-red-400"
          width="w-8/12 md:w-4/12"
          isVisible={isVisible}
        />
      )}
    </>
  );
};

export default ExpenseTable;
