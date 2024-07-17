'use client';

import Image from 'next/image';
import { MouseEventHandler, ReactNode, useState } from 'react';

import { User } from '@/types';

interface NavigationBarProps {
  user: User;
  UserProfileDropdown: ReactNode;
}

const NavigationBar = ({ user, UserProfileDropdown }: NavigationBarProps) => {
  const [ showDropdown, setShowDropdown ] = useState(false);

  const handleClick: MouseEventHandler<HTMLDivElement> = (): void => {
    setShowDropdown(!showDropdown);
  }

  return (
    <>
      <div className='h-14 bg-custom-black'>
        <div className='float-end ms-2 pr-8 pt-2 cursor-pointer' onClick={handleClick}>
          <Image
            src={user.picture}
            alt='User profile photo'
            width={40}
            height={40}
            className='rounded-full'
          />
        </div>
      </div>
      { showDropdown && UserProfileDropdown }
    </>
  );
}

export default NavigationBar;
