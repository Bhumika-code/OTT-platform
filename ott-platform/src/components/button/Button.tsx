import React, { CSSProperties } from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  style,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      style={style || {}}
    >
      {label}
    </button>
  );
};

export default Button;
export type { ButtonProps };
