'use client';

import useOnClickOutsideDropdown from '@/hooks/useOnClickOutsideDropdown';
import Checkbox from './Checkbox';

interface MonthFilterProps {
  monthsToList: string[];
}

const MonthFilter = ({ monthsToList }: MonthFilterProps) => {
  const { showDropdown, handleClick, containerRef } =
    useOnClickOutsideDropdown();

  return (
    <div className="cursor-pointer relative" data-testid='month-dropdown' ref={containerRef} onClick={handleClick}>
      {'Month'}
      <span className="arrow-down" />
      {showDropdown && (
        <ul className="absolute m-auto inset-x-0 border shadow-2xl bg-slate-50 w-32 rounded-md">
          {monthsToList.map((month, i) => {
            let classname = 'pt-2';
            if (i === monthsToList.length - 1) {
              classname += ' pb-2';
            }
            return (
              <li key={month} className={classname}>
                <Checkbox label={month} type="months" />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MonthFilter;
