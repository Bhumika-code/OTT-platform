import React from 'react';
import './InputFeild.css';

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  value?:string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  className,
  onChange,
  error,
  value,
}) => {
  return (
    <div>
      <label>{label}</label>
      <div className={error ? 'error' : ''}>
        <input
          type={type}
          placeholder={placeholder}
          className={className}
          onChange={onChange}
          value={value}
        />
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default InputField;
export type { InputFieldProps };