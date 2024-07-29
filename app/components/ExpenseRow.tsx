import { UiExpense } from '@/types';

interface ExpenseRowProps {
  expense: UiExpense;
}

const ExpenseRow = async ({ expense }: ExpenseRowProps ) => {
  return (
    <div className='grid grid-rows-1 grid-cols-3 xl:grid-cols-4'>
      <div className='col-start-1 col-span-2 row-start-1 row-span-1 text-2xl font-light'>
        {expense.place}
        <div className='text-base'>
          {new Date(expense.date).toISOString().substring(0, 10)}
        </div>
        <div className='text-base'>
          {expense.categoryName}
        </div>
      </div>
      <div className='col-start-3 xl:col-start-4 col-span-1 text-xl font-light mx-auto'>
        {`${expense.amount} ${expense.currency}`}
      </div>
    </div>
  );  
};

export default ExpenseRow;
