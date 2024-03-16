import React, { useState } from "react";
import { useField } from "formik";
import "./Input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={`input-container ${focused ? "input-container__focused" : ""}`}
    >
      <label
        className={`input-label ${
          focused || meta.value ? "input-label__focused" : ""
        } ${meta.touched && meta.error ? "input-label__error" : ""}`}
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={` ${
          meta.touched && meta.error ? "input-container__base__error" : ""
        } input-container__base size__md`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {meta.touched && meta.error ? (
        <div className="input-container__error-label size__sm font__medium pt__sm pb__sm">
          *{meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default Input;
