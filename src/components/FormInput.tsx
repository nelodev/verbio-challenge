interface formInputProps {
  id: string;
  name: string;
  placeholder: string;
  text: string;
  value: string;
  onChange: any;
  className?: string;
  errorIf?: boolean;
}

function FormInput({
  className,
  id,
  name,
  placeholder,
  text,
  value,
  onChange,
  errorIf,
}: formInputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{text}</label>
      <input
        className={`mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className} ${
          errorIf ? 'border border-red-500' : ''
        }`}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {errorIf ? (
        <p className="text-red-500 text-xs italic mt-2">
          Please choose a {text.toLowerCase()}.
        </p>
      ) : null}
    </div>
  );
}

export default FormInput;
