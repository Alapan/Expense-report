import { NextPage } from 'next';
import LinkButton from '@/components/LinkButton';
import LargeScreenExpenseForm from '@/components/LargeScreenExpenseForm';
import { getExpenses } from '@/db/serverActions';
import ExpenseTable from '@/components/ExpenseTable';

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
        <ExpenseTable
          expensesByMonths={expensesByMonths}
        />
      </div>
    </div>
  );
}

export default Page;
