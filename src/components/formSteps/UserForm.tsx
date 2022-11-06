import React from "react";
import FormWrapper from "../FormWrapper";

function UserForm() {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input type="text" autoFocus required />

      <label>Last Name</label>
      <input type="text" required />

      <label>Age</label>
      <input type="number" min={1} required />
    </FormWrapper>
  );
}

export default UserForm;
