import React, { CSSProperties } from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
  color: string;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  style,
  color,
  disabled,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      style={{ backgroundColor: color, ...style }}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
export type { ButtonProps };
