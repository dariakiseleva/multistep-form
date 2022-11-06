import { FormEvent, useState } from "react";
import reactLogo from "./assets/react.svg";
import AccountForm from "./components/formSteps/accountForm";
import AddressForm from "./components/formSteps/addressForm";
import UserForm from "./components/formSteps/userForm";

import { useMultistepForm } from "./hooks/useMultistepForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: number;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: 1,
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  //Partial means: don't need all properties of the object, just some
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const tempData = [
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ];

  const { steps, currentStepIndex, step, next, back, isFirstStep, isLastStep } =
    useMultistepForm(tempData);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    next();
  };

  return (
    <form onSubmit={onSubmit}>
      <div
        style={{
          position: "relative",
          background: "white",
          border: "1px solid black",
          padding: "2rem",
          margin: "1rem",
          borderRadius: ".5rem",
          fontFamily: "Arial",
          minWidth: "400px",
          maxWidth: "max-content",
        }}
      >
        {/* Page counter */}
        <div
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
          }}
        >
          1/3
        </div>
        {step}

        {/* Navigation buttons */}

        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
            fontSize: "2rem",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}

          <button type="submit">{isLastStep ? "Submit" : "Next"}</button>
        </div>
      </div>
    </form>
  );
}

export default App;
