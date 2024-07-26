interface Options {
  name: string;
  value?: string;
}

interface DropdownProps {
  options: Options[];
  label: string;
  name: string;
  isRequired: boolean;
};

const Dropdown = ({ options, label, name, isRequired }: DropdownProps) => {
  return (
    <>
      <label htmlFor={name} className='font-light'>{label}</label>
      <select
        id={name}
        name={name}
        required={isRequired}
        className='my-4 h-10 border-solid border-2 border-slate-300 rounded-md w-3/4'
        defaultValue={''}
      >
        <option value=''>{'Select an option'}</option>
        {options.map((option) => (
          <option key={option.name} value={option.value || option.name}>{option.name}</option>
        ))}
      </select>
    </>
  );  
};

export default Dropdown;
