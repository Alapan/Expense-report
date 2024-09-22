'use client';

import { useState } from "react";

import { ExpensesByMonth } from "@/types";
import DateFilter from "./DateFilterView";
import ExpenseTable from "./ExpenseTable";
import { DateFilterState } from "@/utils/constants";

interface ExpenseTableWithFilterProps {
  expensesByMonths: ExpensesByMonth[]
};

const ExpenseTableWithFilter = ({ expensesByMonths }: ExpenseTableWithFilterProps) => {
  const [ expensesToDisplay, setExpensesToDisplay ] = useState(expensesByMonths);

  const updateExpensesToDisplay = (dateFilter: DateFilterState) => {
    const monthsToShow = Object.values(dateFilter.months).filter(month => month);
    const yearsToShow = Object.values(dateFilter.years).filter(year => year);
    console.log('MONTHS: ', monthsToShow)
    console.log('YEARS: ', yearsToShow)
  };

  return (
    <>
      <div className='mx-5 mt-20'>
        <DateFilter
          expensesByMonths={expensesByMonths}
          updateExpensesToDisplay={(filter: DateFilterState) => updateExpensesToDisplay(filter)}
        />
      </div>
      <div className="pt-12 xl:pt-28">
        <ExpenseTable expensesToDisplay={expensesToDisplay} />
      </div>
    </>
  ); 
};

export default ExpenseTableWithFilter;
