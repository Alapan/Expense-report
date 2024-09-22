'use client';

import useOnClickOutsideDropdown from '@/hooks/useOnClickOutsideDropdown';
import Checkbox from './Checkbox';

interface MonthFilterProps {
  monthsToList: string[];
};

const MonthFilter = ({ monthsToList }: MonthFilterProps) => {
  const {
    showDropdown,
    handleClick,
    containerRef,
  } = useOnClickOutsideDropdown();

  return (
    <div
      className='row-start-1 col-start-1 col-span-1 cursor-pointer w-32'
      ref={containerRef}
      onClick={handleClick}
    >
      {'Month'}
      <span className='arrow-down'/>
      {
        showDropdown && (
          <ul className='absolute border px-2 shadow-2xl bg-slate-50 w-32 rounded-md'>
            {monthsToList.map((month, i) => {
              let classname = 'pt-2';
              if (i === monthsToList.length - 1) {
                classname += ' pb-2';
              }
              return (
                <li key={month} className={classname}>
                  <Checkbox label={month} type='months'/>
                </li>
              )
            })}
          </ul>
        )
      }
    </div>
  );
};

export default MonthFilter;
