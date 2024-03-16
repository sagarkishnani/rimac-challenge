import React, { useState } from "react";
import { useField } from "formik";
import "./SelectInput.scss";

interface SelectInputProps {
  nameSelect: string;
  nameInput: string;
  options: { value: string; label: string }[];
}

const SelectInput: React.FC<SelectInputProps> = ({
  nameSelect,
  nameInput,
  options,
}) => {
  const [fieldSelect, metaSelect] = useField(nameSelect);
  const [fieldInput, metaInput] = useField(nameInput);
  const [focused, setFocused] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]?.value || "");

  return (
    <div
      className={`select-input-container ${
        focused ? "select-input-container__focused" : ""
      }`}
    >
      <div className="select-input-wrapper">
        <select
          {...fieldSelect}
          className={`select-input ${
            metaSelect.touched && metaSelect.error ? "select-input__error" : ""
          } size__md`}
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
            fieldSelect.onChange(e);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          {...fieldInput}
          type="text"
          className={`select-input-adjacent ${
            metaInput.touched && metaInput.error
              ? "select-input-adjacent__error"
              : ""
          } size__md`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={!selectedOption}
        />
      </div>
      {metaInput.touched && metaInput.error ? (
        <div className="select-input-error-label size__sm font__medium pt__sm pb__sm">
          *{metaInput.error}
        </div>
      ) : null}
    </div>
  );
};

export default SelectInput;
