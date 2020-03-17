import React from "react";
import "./FormField.scss";

export default function FormField(props) {
  const validateFieldInput = e => {
    e.preventDefault();

    const field = e.target;
    field.parentNode.classList.remove("error");

    if (!field.validity.valid) {
      field.parentNode.classList.add("error");
    }
  };

  return (
    <div>
      <label for="name">{props.label}:</label>
      <input
        type="text"
        onChange={validateFieldInput}
        onInput={validateFieldInput}
        {...props}
      />
    </div>
  );
}
