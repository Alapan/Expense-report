'use client';

import { NextPage } from 'next';
import Link from 'next/link';

import InputField from '@/components/InputField';
import Dropdown from '@/components/Dropdown';
import DateInput from '@/components/DateInput';
import Toast from '@/components/Toast';
import useExpenseFormResult from '@/hooks/useExpenseFormResult';
import { categories, currencies } from '@/types';

const Page: NextPage = () => {
  const {
    ref,
    createResult,
    isVisible,
    handleCreate,
  } = useExpenseFormResult();

  return (
    <div className='xl:hidden'>
      <div className='text-4xl font-light mx-10 my-4'>{'Add Expense'}</div>
      <div className='m-10'>
        <form action={handleCreate} ref={ref}>
          <div className='flex flex-col'>
            <InputField
              placeholder='E.g. name of restaurant'
              name='place'
              label='Place of expense'
              isRequired={false}
            />
            <Dropdown
              options={currencies}
              label='Select currency (required)'
              name='currency'
              isRequired={true}
            />
            <Dropdown
              options={categories}
              label='Select category (required)'
              name='category'
              isRequired={true}
            />
            <InputField
              placeholder='Amount spent'
              name='amount'
              label='Amount (required)'
              isRequired={true}
            />
            <DateInput
              name='dateOfExpense'
              label='Select date of expense (required)'
              isRequired={true}
            />
          </div>
          <button type='submit' className='inline-block w-1/2 my-4 h-10 text-center text-white bg-lime-700 hover:bg-lime-800 rounded-lg'>
            {'Add Expense'}
          </button>
          <div className='my-6'>
            <Link
              href='/tracker'
              className='underline text-blue-600'
            >Back to Expenses page</Link>
          </div>
          { createResult > 0 && (
            <Toast
              message='Expense successfully saved'
              backgroundColor='bg-green-400'
              width='w-3/4'
              isVisible={isVisible}
            />
          ) }
          { createResult === -1 && (
            <Toast
              message='Error in saving! Please check your information and try again.'
              backgroundColor='bg-red-400'
              width='w-3/4'
              isVisible={isVisible}
            />
          ) }
        </form>
      </div>
    </div>
  );
};

export default Page;
