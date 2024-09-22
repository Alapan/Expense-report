'use client';

import useOnClickOutsideDropdown from '@/hooks/useOnClickOutsideDropdown';
import Checkbox from './Checkbox';

interface YearFilterProps {
  yearsToList: string[];
}

const YearFilter = ({ yearsToList }: YearFilterProps) => {
  const { handleClick, showDropdown, containerRef } =
    useOnClickOutsideDropdown();

  return (
    <div
      className="cursor-pointer"
      ref={containerRef}
      onClick={handleClick}
    >
      {'Year'}
      <span className="arrow-down" />
      {showDropdown && (
        <ul className="absolute border mx-2 shadow-2xl bg-slate-50 w-32 rounded-md">
          {yearsToList.map((year, i) => {
            let className = 'pt-2';
            if (i === yearsToList.length - 1) {
              className += ' pb-2';
            }
            return (
              <li key={year} className={className}>
                <Checkbox label={year} type="years" />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default YearFilter;
