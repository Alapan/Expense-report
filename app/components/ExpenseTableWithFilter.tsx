'use client';

import { useState } from 'react';

import { ExpensesByMonth } from '@/types';
import DateFilterView from './DateFilterView';
import ExpenseTable from './ExpenseTable';
import { DateFilterState } from '@/utils/constants';

interface ExpenseTableWithFilterProps {
  expensesByMonths: ExpensesByMonth[];
}

const ExpenseTableWithFilter = ({
  expensesByMonths,
}: ExpenseTableWithFilterProps) => {
  const [expensesToDisplay, setExpensesToDisplay] = useState(expensesByMonths);

  const updateExpensesToDisplay = (dateFilter: DateFilterState) => {
    const selectedMonths = Object.keys(dateFilter.months).filter(
      (month) => dateFilter.months[month]
    );

    const selectedYears = Object.keys(dateFilter.years).filter(
      (year) => dateFilter.years[year]
    );

    let monthsToShow = selectedMonths.length
      ? selectedMonths
      : expensesByMonths.map(({ month }) => month);
    let yearsToShow = selectedYears.length
      ? selectedYears
      : expensesByMonths.map(({ year }) => year);

    monthsToShow = [...new Set(monthsToShow)];
    yearsToShow = [...new Set(yearsToShow)];

    // First filter out months not selected, then years
    const filteredExpenses: ExpensesByMonth[] = expensesByMonths
      .filter((expense) => monthsToShow.includes(expense.month))
      .filter((expense) => yearsToShow.includes(expense.year));

    setExpensesToDisplay(filteredExpenses);
  };

  return (
    <>
      <div className="mx-5 mt-20 xl:mt-40">
        <DateFilterView
          expensesByMonths={expensesByMonths}
          updateExpensesToDisplay={(filter: DateFilterState) =>
            updateExpensesToDisplay(filter)
          }
        />
      </div>
      <div className="pt-12 xl:pt-20">
        <ExpenseTable expensesToDisplay={expensesToDisplay} />
      </div>
    </>
  );
};

export default ExpenseTableWithFilter;
