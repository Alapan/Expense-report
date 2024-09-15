interface InputFieldProps {
  placeholder: string;
  name: string;
  label: string;
  isRequired: boolean;
}

const InputField = ({
  placeholder,
  name,
  label,
  isRequired,
}: InputFieldProps) => {
  return (
    <>
      <label className="font-light">{label}</label>
      <input
        type="text"
        placeholder={`${placeholder}`}
        name={name}
        required={isRequired}
        className="my-4 h-10 border-solid border-2 border-slate-300 rounded-md px-2"
      />
    </>
  );
};

export default InputField;
