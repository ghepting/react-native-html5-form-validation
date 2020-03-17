import React from "react";
import "./FormField.scss";

export default function FormField(props) {
  let debouncedErrorState;

  const validateFieldInput = e => {
    e.preventDefault();

    clearTimeout(debouncedErrorState);

    const field = e.target;
    field.parentNode.classList.remove("error");

    debouncedErrorState = setTimeout(() => {
      if (!field.validity.valid) {
        field.parentNode.classList.add("error");
      }
    }, 1000);
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
