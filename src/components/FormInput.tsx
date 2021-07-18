interface formInputProps {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: any;
}

function FormInput({id, name, placeholder, value, onChange}: formInputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor="username-input">Username</label>
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
