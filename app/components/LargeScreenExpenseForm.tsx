'use client';

import { createRef, useState } from 'react';

import Dropdown from './Dropdown';
import InputField from './InputField';
import DateInput from './DateInput';
import { categories, currencies } from '../../db/utils';
import { createExpense } from '@/actions';
import Toast from './Toast';
import useToast from '@/useToast';

const LargeScreenExpenseForm = () => {
  const ref = createRef<HTMLFormElement>();
  const [ result, setResult ] = useState('');
  const { isVisible, showToast } = useToast();

  const handleSubmit = async (formData: FormData) => {
    const response = await createExpense(formData);
    setResult(response);
    if (response === 'success' && ref.current) {
      ref.current.reset();
    }
    showToast();
  }

  return (
    <>
      <form ref={ref} action={handleSubmit}>
        <div className='fixed w-full grid grid-rows-1 grid-cols-6 gap-2 my-2 border-b border-slate-400'>
          <div className='col-start-1 col-span-1 mx-4'>
            <InputField
              placeholder='E.g. name of restaurant'
              name='place'
              label='Place of expense'
              isRequired={false}
            />
          </div>
          <div className='col-start-2 col-span-1 mx-4'>
            <Dropdown
              options={currencies}
              label='Currency (*)'
              name='currency'
              isRequired={true}
            />
          </div>
          <div className='col-start-3 col-span-1 mx-4'>
            <Dropdown
              options={categories}
              label='Category (*)'
              name='category'
              isRequired={true}
            />
          </div>
          <div className='col-start-4 col-span-1 mx-4'>
            <InputField
              placeholder='Amount spent'
              name='amount'
              label='Amount (*)'
              isRequired={true}
            />
          </div>
          <div className='col-start-5 col-span-1 mx-4'>
            <DateInput
              name='dateOfExpense'
              label='Date of expense (*)'
              isRequired={true}
            />
          </div>
          <div className='col-start-6 col-span-1 w-full'>
            <button type='submit' className='block mx-auto my-10 w-6/12 h-10 text-center text-white bg-lime-700 hover:bg-lime-800 rounded-lg'>
              {'Add Expense'}
            </button>
          </div>
        </div>
      </form>
      { result === 'success' && (
        <Toast
          message='Expense successfully saved!'
          backgroundColor='bg-green-400'
          width='w-4/12'
          isVisible={isVisible}
        />
      )}
      { result === 'error' && (
        <Toast
          message='Error in saving! Please check your information and try again.'
          backgroundColor='bg-red-400'
          width='w-4/12'
          isVisible={isVisible}
        />
      )}
    </>
  );
};

export default LargeScreenExpenseForm;
