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
      className='row-start-1 col-start-1 col-span-1 cursor-pointer'
      ref={containerRef}
      onClick={handleClick}
    >
      {'Month'}
      {
        showDropdown && (
          <ul>
            {monthsToList.map((month) => (
              <li key={month}>
                <Checkbox label={month}/>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
};

export default MonthFilter;
