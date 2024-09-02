'use client';

import { ChangeEventHandler, useState } from 'react';

interface CheckboxProps {
  label: string;
};

const Checkbox = ({ label }: CheckboxProps) => {
  const [ checked, setChecked ] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (): void => {
    console.log('HANDLE CHANGE')
    setChecked(!checked);
  };
  
  return (
    <label>
      <input
        type='checkbox'
        checked={checked}
        onChange={handleChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;
