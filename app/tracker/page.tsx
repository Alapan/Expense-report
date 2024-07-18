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
            backgroundClass='bg-lime-700'
            backgroundClassOnHover='hover:bg-lime-800'
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
