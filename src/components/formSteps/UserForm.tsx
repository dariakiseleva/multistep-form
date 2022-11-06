import React from "react";
import FormWrapper from "../FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: number;
};

// Props include user data and a function update fields
// From here, it can take only properties of this step to update
type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

function UserForm({ firstName, lastName, age, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        type="text"
        autoFocus
        required
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />

      <label>Last Name</label>
      <input
        type="text"
        required
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />

      <label>Age</label>
      <input
        type="number"
        min={1}
        required
        value={age}
        onChange={(e) => updateFields({ age: Number(e.target.value) })}
      />
    </FormWrapper>
  );
}

export default UserForm;
