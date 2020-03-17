import React from "react";
import FormField from "./FormField/FormField";
import "./styles.scss";

export default function App() {
  const handleSubmit = e => {
    e.preventDefault();
    const invalidFields = [];
    e.target.querySelectorAll("input, textarea, select").forEach(field => {
      if (!field.validity.valid) {
        field.parentNode.classList.add("error");
        invalidFields.push(field);
      }
    });

    if (invalidFields.length >= 1) {
      console.log("Validation errors detected");
    } else {
      console.log("Form submitted successfully");
      e.target.reset();
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} noValidate>
        <p>
          <FormField name="name" label="First & last name" required />
        </p>
        <p>
          <FormField
            name="email"
            label="Email address"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
