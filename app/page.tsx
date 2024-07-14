import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className='h-screen grid grid-cols-3 grid-rows-5 lg:grid-cols-5'>
        <div className='col-start-1 row-start-2 col-span-3 lg:row-start-3 animate-slide-from-left'>
          <div className='text-4xl md:text-6xl lg:text-7xl font-light text-center my-4'>
            {'Track your '}<span className='font-medium'>Expenses</span>
          </div>
          <div className='text-sm md:text-lg mx-auto my-3 text-center'>
            {'Enter and view your expenses in this easy-to-use website!'}
          </div>
        </div>
        <div className='col-start-1 row-start-3 col-span-3 row-span-2 ms-5 me-5 lg:row-start-2 lg:col-span-2 lg:row-span-3 relative animate-slide-from-left'>
          <Image
            src={'/living-expenses.jpg'}
            alt='Landing page image for living expenses'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
    </main>
  );
}
