import { NextPage } from 'next';
import LinkButton from '@/components/LinkButton';
import LargeScreenExpenseForm from '@/components/LargeScreenExpenseForm';
import ExpenseRow from '@/components/ExpenseRow';
import { getExpenses } from '../../db/serverActions';

const Page: NextPage = async () => {
  const expensesByMonths = await getExpenses();
  return (
    <div>
      <div className='hidden xl:block xl:pt-14'>
        <LargeScreenExpenseForm />
      </div>
      <div className='fixed bottom-0 w-full border-slate-200 border-solid bg-slate-50 xl:hidden'>
        <div className='grid grid-cols-3 grid-rows-1 md:grid-cols-5'>
          <div className='col-start-2 md:col-start-3'>
            <LinkButton
              linkTo='/tracker/expense'
              buttonText='Add Expense'
              backgroundColor='bg-lime-700'
              backgroundColorOnHover='hover:bg-lime-800'
            />
          </div>
        </div>
      </div>
      <div className='pt-12 xl:pt-28'>
        {expensesByMonths.map(({ month, year, expenses, total }, i) => (
          <div key={`${month} ${year}`} className='mx-5 my-10'>
            <div className='font-light text-3xl mb-10 font-medium'>{month} {year}</div>
            <div className='grid grid-rows-1 grid-cols-3 xl:grid-cols-4 pb-10'>
              <div className='col-start-1 col-span-1 text-3xl font-medium'>
                {'Total'}
              </div>
              <div className='col-start-3 col-span-1 text-3xl xl:col-start-4 font-medium mx-auto'>
                {`${total}${expenses[0].currency}`}
              </div>
            </div>
            {expenses.map((expense) => (
              <div key={expense.id} className='mb-10'>
                <ExpenseRow expense={expense}/>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
