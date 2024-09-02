'use client';

import { ExpensesByMonth } from '@/types';
import MonthFilter from './MonthFilter';
import YearFilter from './YearFilter';

interface DateFilterProps {
  expensesByMonths: ExpensesByMonth[]
};

const DateFilter = ({ expensesByMonths }: DateFilterProps) => {
  const monthsToList = expensesByMonths.map((expensesByMonth) => expensesByMonth.month);
  const yearsToList = expensesByMonths.map(
    (expensesByMonth) => expensesByMonth.year
  ).filter((value, index, self) => self.indexOf(value) === index);

  const onSubmitFilter = (formData: FormData) => {

  };

  return (
    <form action={onSubmitFilter}>
      <div className='grid grid-rows-1 grid-cols-3'>
        <MonthFilter monthsToList={monthsToList}/>
        <YearFilter yearsToList={yearsToList} />
        <div className='row-start-1 col-start-3 col-span-1'>
          <button type='submit'>
            {'APPLY FILTER'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default DateFilter;
