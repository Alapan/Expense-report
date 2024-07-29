import Image from 'next/image';
import { User } from '@/types';

const UserProfileDropdown = ( { user }: { user: User }) => {
  return (
    <div className='absolute w-64 h-64 top-9 right-12 shadow-2xl bg-slate-50 z-10'>
      <div className='flex flex-col justify-center items-center my-5'>
        <Image
          src={user.picture}
          alt='Profile picture'
          width={60}
          height={60}
          className='rounded-full mb-2'
        />
        <div className='my-2'>{user.email}</div>
      </div>
      <ul>
        <li className='border-solid border-y border-slate-300'>
          <a href='/profile' className='flex flex-row my-3'>
            <Image
              src={'/user-regular.svg'}
              alt={'User icon'}
              width={20}
              height={20}
              className='mx-4'
            />
            <span>{'My profile'}</span>
          </a>
        </li>
        <li>
          <a href='/api/auth/logout' className='flex flex-row my-3'>
            <Image
              src={'/sign-out.svg'}
              alt={'Log out icon'}
              width={20}
              height={20}
              className='mx-4'
            />
            <span>{'Log out'}</span>
          </a>
        </li>
      </ul>
    </div>
  )
};

export default UserProfileDropdown;
