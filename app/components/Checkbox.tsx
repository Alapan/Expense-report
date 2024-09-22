'use client';

import { ChangeEventHandler, useContext, useState } from 'react';
import { DateFilterContext } from './DateFilterView';

interface CheckboxProps {
  label: string;
  type: 'months' | 'years';
};

const Checkbox = ({ label, type }: CheckboxProps) => {
  const { updateSelection, dateFilter } = useContext(DateFilterContext) as any;
  const [ checked, setChecked ] = useState(dateFilter[type][label]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (): void => {
    setChecked(!checked);
    updateSelection(type, label, !checked);
  };

  return (
    <label>
      <input
        type='checkbox'
        checked={checked}
        onChange={handleChange}
      />
      <span className='px-2'>{label}</span>
    </label>
  );
};

export default Checkbox;
