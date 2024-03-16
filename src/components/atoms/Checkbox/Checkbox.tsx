import React from "react";
import { useField } from "formik";
import "./Checkbox.scss";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <>
      <div className="checkbox-container pt__sm pb__sm">
        <input
          {...field}
          {...props}
          type="checkbox"
          className={`${
            meta.touched && meta.error ? "checkbox-container__base__error" : ""
          } checkbox-container__base size__md`}
        />
        <label className="checkbox-label size__sm"> {label} </label>
      </div>
      {meta.touched && meta.error ? (
        <div className="checkbox-container__error-label size__sm font__medium pt__sm pb__sm">
          *{meta.error}
        </div>
      ) : null}
    </>
  );
};

export default Checkbox;
