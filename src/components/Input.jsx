import React, { useState, useMemo } from "react";
import "../theme/CSS/Input.css";

const Input = ({ name, type, placeholder, className, value, onChange }) => {
  // eslint-disable-next-line no-unused-vars
  const [isFilled, setIsFilled] = useState(!!value);
  const handleInputChange = (e) => {
    onChange(e);
    setIsFilled(e.target.value.length > 0);
  };

  useMemo(() => {
    // eslint-disable-next-line
    setIsFilled(!!value);
  }, [value]);
  return (
    <div className="input-group">
      <input
        type={type}
        className={`input ${className}`}
        value={value}
        onChange={handleInputChange}
        name={name}
        placeholder=" "
        required

      />
      <label className="label" htmlFor={placeholder} id={placeholder}>
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
