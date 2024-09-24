'use client';

import { useEffect, useState } from 'react';

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

  const initialFilter: DateFilterState = {
    months: {},
    years: {},
  };

  const monthsToList = expensesByMonths.map(
    (expensesByMonth) => expensesByMonth.month
  );
  const yearsToList = expensesByMonths
    .map((expensesByMonth) => expensesByMonth.year)
    .filter((value, index, self) => self.indexOf(value) === index);

  for (const month of monthsToList) {
    initialFilter.months[month] = false;
  }

  for (const year of yearsToList) {
    initialFilter.years[year] = false;
  }

  const [dateFilter, setDateFilter] = useState(initialFilter);

  useEffect(() => {
    updateExpensesToDisplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expensesByMonths]);

  const updateDateFilterState = (dateFilter: DateFilterState) => {
    setDateFilter(dateFilter);
    updateExpensesToDisplay();
  };

  const updateExpensesToDisplay = () => {
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

    filteredExpenses.forEach((expensesByMonth) => {
      expensesByMonth.expenses.sort(
        (exp1, exp2) =>
          new Date(exp2.date).valueOf() - new Date(exp1.date).valueOf()
      );
    });
    setExpensesToDisplay(filteredExpenses);
  };

  return (
    <>
      <div className="mx-5 mt-20 xl:mt-40">
        <DateFilterView
          expensesByMonths={expensesByMonths}
          dateFilter={dateFilter}
          updateExpensesToDisplay={(filter: DateFilterState) =>
            updateDateFilterState(filter)
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
