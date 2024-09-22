'use client';

import useOnClickOutsideDropdown from '@/hooks/useOnClickOutsideDropdown';
import Checkbox from './Checkbox';

interface YearFilterProps {
  yearsToList: string[];
};

const YearFilter = ({ yearsToList }: YearFilterProps) => {
  const {
    handleClick,
    showDropdown,
    containerRef,
  } = useOnClickOutsideDropdown();

  return (
    <div
      className='row-start-1 col-start-2 col-span-1 cursor-pointer w-32'
      ref={containerRef}
      onClick={handleClick}
    >
      {'Year'}
      <span className='arrow-down'/>
      {
        showDropdown && (
          <ul className='absolute border px-2 shadow-2xl bg-slate-50 w-32 rounded-md'>
            {yearsToList.map((year, i) => {
              let className = 'pt-2';
              if (i === yearsToList.length - 1) {
                className += ' pb-2';
              }
              return (
                <li key={year} className={className}>
                  <Checkbox label={year} type='years'/>
                </li>
              )
            })}
          </ul>
        )
      }
    </div>
  );  
};

export default YearFilter;
