'use client';

import { createContext, FormEvent, useState } from 'react';

import { ExpensesByMonth } from '@/types';
import MonthFilter from './MonthFilter';
import YearFilter from './YearFilter';
import { DateFilterState } from '@/utils/constants';

interface DateFilterViewProps {
  expensesByMonths: ExpensesByMonth[];
  updateExpensesToDisplay: (filter: DateFilterState) => void;
}

export const DateFilterContext = createContext({});

const DateFilterView = ({
  expensesByMonths,
  updateExpensesToDisplay,
}: DateFilterViewProps) => {
  const monthsToList = expensesByMonths.map(
    (expensesByMonth) => expensesByMonth.month
  );
  const yearsToList = expensesByMonths
    .map((expensesByMonth) => expensesByMonth.year)
    .filter((value, index, self) => self.indexOf(value) === index);

  const onSubmitFilter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateExpensesToDisplay(dateFilter);
    setDisabled(true);
  };

  const initialFilter: DateFilterState = {
    months: {},
    years: {},
  };

  for (const month of monthsToList) {
    initialFilter.months[month] = false;
  }

  for (const year of yearsToList) {
    initialFilter.years[year] = false;
  }

  const [dateFilter, setDateFilter] = useState(initialFilter);
  const [disabled, setDisabled] = useState(true);

  const updateSelection = (
    type: 'months' | 'years',
    label: string,
    value: boolean
  ) => {
    dateFilter[type][label] = value;
    setDateFilter(dateFilter);
    setDisabled(false);
  };

  const contextValue = { dateFilter, updateSelection };

  let btnClass = 'box-border w-32 h-8 rounded-md font-medium';

  if (disabled) btnClass += ' bg-zinc-200';
  else btnClass += ' bg-cyan-200';

  return (
    <form onSubmit={onSubmitFilter}>
      <DateFilterContext.Provider value={contextValue}>
        <div className="grid grid-rows-1 grid-cols-5 date-filter-grid-columns border border-solid border-slate-400 rounded-md py-5">
          <div className="col-start-1 col-span-1 text-center">
            <MonthFilter monthsToList={monthsToList} />
          </div>
          <div className="col-start-2 col-span-1 h-8 w-0.5 bg-slate-400" />
          <div className="col-start-3 col-span-1 text-center">
            <YearFilter yearsToList={yearsToList} />
          </div>
          <div className="col-start-4 col-span-1 h-8 w-0.5 bg-slate-400" />
          <div className="col-start-5 col-span-1 text-left text-center">
            <button type="submit" className={btnClass} disabled={disabled}>
              {'APPLY FILTER'}
            </button>
          </div>
        </div>
      </DateFilterContext.Provider>
    </form>
  );
};

export default DateFilterView;
