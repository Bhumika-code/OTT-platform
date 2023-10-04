import React from 'react';
import './InputFeild.css';
interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder,className }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} className={className}/>
    </div>
  );
};

export default InputField;
export type { InputFieldProps };
