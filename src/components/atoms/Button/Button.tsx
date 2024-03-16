import React from "react";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick: () => void;
  className?: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  isLoading = false,
  className,
  ...rest
}) => {
  const handleOnClick = () => {
    onClick();
  };

  return (
    <button
      className={`button__inner font__bold ${className} ${
        isLoading ? "loading" : ""
      }`}
      onClick={!isLoading ? handleOnClick : undefined}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? "Cargando..." : title}
    </button>
  );
};

export default Button;
