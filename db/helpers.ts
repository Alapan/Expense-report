import { ExpensesByMonth, UiExpense } from '@/types';

export function sortExpensesByDate(expenses: ExpensesByMonth) {
  expenses.expenses.sort((a: UiExpense, b: UiExpense) => {
    return b.date.getTime() - a.date.getTime();
  });
  return expenses;
}

export function getTotalExpenses(expensesEachMonth: ExpensesByMonth) {
  let total = 0;
  expensesEachMonth.expenses.forEach((expense) => {
    total += expense.amount
  });
  return Math.round(total * 100)/100;
}

export function groupExpensesByDate(expenses: UiExpense[]) {
  interface ExpensesByMonthAndYear {
    [key: string]: UiExpense[]
  }

  const mapMonthToName = new Map<string, string>([
    ['01', 'January'],
    ['02', 'February'],
    ['03', 'March'],
    ['04', 'April'],
    ['05', 'May'],
    ['06', 'June'],
    ['07', 'July'],
    ['08', 'August'],
    ['09', 'September'],
    ['10', 'October'],
    ['11', 'November'],
    ['12', 'December'],
  ]);

  /*
    {
      "06-24": [...],
      "07-24": [...],
    }
  */
  const groupByMonthIndexAndYear = expenses.reduce((acc, elem: UiExpense) => {
    const dateOnly = new Date(elem.date).toISOString().substring(0, 10);
    const [ year, month ] = dateOnly.split('-');
    const monthAndYear = `${month}-${year}`;
    acc[monthAndYear] ? acc[monthAndYear].push(elem): (acc[monthAndYear] = [ elem ]);
    return acc;
  }, {} as ExpensesByMonthAndYear);

  /*
    [
      {
        month: 'June',
        year: '2024',
        expenses: [...],
      },
      {
        month: 'July',
        year: '2024',
        expenses: [...],
      },
      ...
    ]
  */

  const groupByMonthNameAndYear: ExpensesByMonth[] = Object.keys(groupByMonthIndexAndYear).map((key) => {
    const [ monthIndex, year ] = key.split('-');
    return {
      month: mapMonthToName.get(monthIndex) as string,
      year,
      expenses: groupByMonthIndexAndYear[key],
    }
  });
  return groupByMonthNameAndYear;
}
