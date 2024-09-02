'use client';

import Image from 'next/image';
import { ReactNode } from 'react';

import { User } from '@/types';
import useOnClickOutsideDropdown from '@/hooks/useOnClickOutsideDropdown';

interface NavigationBarProps {
  user: User;
  UserProfileDropdown: ReactNode;
}

const NavigationBar = ({ user, UserProfileDropdown }: NavigationBarProps) => {
  const {
    showDropdown,
    containerRef,
    handleClick,
  } = useOnClickOutsideDropdown();
  return (
    <div ref={containerRef}>
      <div className='fixed w-full h-14 bg-custom-black top-0'>
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
    </div>
  );
}

export default NavigationBar;
