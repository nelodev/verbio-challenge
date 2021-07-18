interface formInputProps {
  id: string;
  name: string;
  placeholder: string;
  text: string;
  value: string;
  onChange: any;
}

function FormInput({
  id,
  name,
  placeholder,
  text,
  value,
  onChange,
}: formInputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{text}</label>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;
