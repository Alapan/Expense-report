import { NextPage } from 'next';
import LinkButton from '@/components/LinkButton';


const Page: NextPage = () => {
  return (
    <div className='fixed bottom-0 w-full border-t-2 border-slate-200 border-solid'>
      <div className='grid grid-cols-3 grid-rows-1'>
        <div className='col-start-2'>
          <LinkButton
            linkTo='/tracker/expense'
            buttonText='Add Expense'
            backgroundColor='bg-lime-700'
            backgroundColorOnHover='hover:bg-lime-800'
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
