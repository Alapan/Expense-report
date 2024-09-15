'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateInputProps {
  name: string;
  label: string;
  isRequired: boolean;
}

const DateInput = ({ name, label, isRequired }: DateInputProps) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <label htmlFor={name} className="font-light">
        {label}
      </label>
      <DatePicker
        selected={startDate}
        onChange={(date) => date && setStartDate(date)}
        name={name}
        required={isRequired}
        id={name}
        className="my-4 h-10 border-solid border-2 border-slate-300 rounded-md px-2"
        wrapperClassName="w-1/2"
      />
    </>
  );
};

export default DateInput;
