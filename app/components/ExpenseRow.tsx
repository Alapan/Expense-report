'use client';

import { useState } from 'react';
import Image from 'next/image';

import { UiExpense } from '@/types';
import ConfirmationModal from './ConfirmationModal';

interface ExpenseRowProps {
  expense: UiExpense;
  handleDelete: (expenseId: number) => Promise<void>;
}

const ExpenseRow = ({ expense, handleDelete }: ExpenseRowProps ) => {
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  return (
    <>
      <div className='grid grid-rows-1 grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        <div className='col-start-1 col-span-2 row-start-1 row-span-1 text-2xl font-light'>
          {expense.place}
          <div className='text-base'>
            {new Date(expense.date).toISOString().substring(0, 10)}
          </div>
          <div className='text-base'>
            {expense.categoryName}
          </div>
        </div>
        <div className='col-start-3 md:col-start-4 xl:col-start-5 2xl:col-start-6 col-span-1 row-start-1 row-span-1 text-xl font-light'>
          <div className='grid grid-rows-1 grid-cols-2'>
            <div className='row-start-1 row-span-1 col-start-1 col-span-1 my-4 md:text-right'>
              {`${expense.amount} ${expense.currency} `}
            </div>
            <div className='row-start-1 row-span-1 col-start-2 col-span-1 mx-auto my-4'>
              <button onClick={() => setIsModalVisible(true)}>
                <Image
                  src='/delete.svg'
                  alt='Delete icon'
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ConfirmationModal
        message='Are you sure you want to delete this entry?'
        header='Delete Expense'
        onDelete={() => handleDelete(expense.id)}
        submitBtnCls='bg-red-400'
        isModalVisible={isModalVisible}
        onDismiss={() => setIsModalVisible(false)}
      />
    </>
  );  
};

export default ExpenseRow;
