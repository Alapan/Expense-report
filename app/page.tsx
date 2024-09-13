import Image from 'next/image';
import LinkButton from './components/LinkButton';

export default function Home() {
  return (
    <main>
      <div className='h-screen grid grid-cols-3 grid-rows-7 lg:grid-cols-5'>
        <div className='col-start-1 row-start-2 col-span-3 row-span-2 lg:row-start-3 animate-slide-from-left'>
          <div role='heading' aria-level={2} className='text-5xl lg:text-7xl font-light text-center my-4'>
            {'Track your '}<span className='font-medium'>Expenses</span>
          </div>
          <div role='heading' aria-level={4} className='text-md md:text-lg mx-auto my-3 text-center font-light'>
            {'Enter and view your expenses in this easy-to-use website!'}
          </div>
        </div>
        <div className='col-start-1 row-start-3 col-span-3 row-span-3 ms-5 me-5 md:mt-6 md:row-start-3 lg:row-start-3 lg:col-span-2 lg:row-span-3 relative animate-slide-from-left'>
          <Image
            src={'/living-expenses.jpg'}
            alt='Landing page image for living expenses showing pen on paper bill'
            fill
            style={{ objectFit:'cover' }}
          />
        </div>
        <div className='col-start-1 row-start-6 col-span-3 mx-auto my-4 w-6/12 lg:row-start-5 xl:row-start-4 animate-slide-from-left'>
          <LinkButton
            linkTo='/api/auth/login'
            buttonText='Login'
            backgroundColor='bg-slate-700'
            backgroundColorOnHover='hover:bg-slate-800'
            otherCustomClasses='lg:w-2/5 mt-6'
          />
          <LinkButton
            linkTo='/api/auth/signup'
            buttonText='Sign Up'
            backgroundColor='bg-slate-700'
            backgroundColorOnHover='hover:bg-slate-800'
            otherCustomClasses='lg:w-2/5 mt-6'
          />
        </div>
      </div>
    </main>
  );
}
