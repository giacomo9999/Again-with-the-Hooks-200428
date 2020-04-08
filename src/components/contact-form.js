import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ContactContext } from "../context/contact-context";

export default function ContactForm() {
  const name = useFormInput("");
  const email = useFormInput("");
  const [state, dispatch] = useContext(ContactContext);

  const onSubmit = () => {
    dispatch({
      type: "ADD_CONTACT",
      payload: { id: uuidv4(), name: name.value, email: email.value },
    });
    // reset form
    name.onReset();
    email.onReset();
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" />
      <input type="text" name="email" />
      <button>Submit</button>
    </form>
  );

  function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e) => {
      setValue(e.target.value);
    };
    const handleReset = () => {
      setValue("");
    };
    return {
      value,
      onChange: handleChange,
      onReset: handleReset,
    };
  }
}
