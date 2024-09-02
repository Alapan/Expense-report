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
      className='row-start-1 col-start-2 col-span-1 cursor-pointer'
      ref={containerRef}
      onClick={handleClick}
    >
      {'Year'}
      {
        showDropdown && (
          <ul>
            {yearsToList.map((year) => (
              <li key={year}>
                <Checkbox label={year}/>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );  
};

export default YearFilter;
