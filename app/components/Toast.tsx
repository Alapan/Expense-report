'use client';

import { useState } from 'react';

interface ToastProps {
  message: string;
  backgroundColor: string;
}

const Toast = ({ message, backgroundColor }: ToastProps) => {
  const [ isVisible, setIsVisible ] = useState(true);

  setTimeout(() => {
    setIsVisible(false);
  }, 5000);

  return (
    <div>
      { isVisible && (
        <div className={`absolute box-border h-16 w-3/4 ${backgroundColor} animate-fade-in-image rounded-lg bottom-8 right-2`}>
          <div className='float-right me-2'>
            <button onClick={() => setIsVisible(false)}>&times;</button>
          </div>
          <div className='px-10 py-5'>
            { message }
          </div>
        </div>
      )}
    </div>
  );
};

export default Toast;
