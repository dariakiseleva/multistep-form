import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { useMultistepForm } from "./hooks/useMultistepForm";

function App() {
  const tempData = [<h1>One</h1>, <h1>Two</h1>, <h1>Three</h1>];

  const { steps, currentStepIndex, step, next, back, isFirstStep, isLastStep } =
    useMultistepForm(tempData);

  return (
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
        }}
      >
        {!isFirstStep && (
          <button type="button" onClick={back}>
            Back
          </button>
        )}

        <button type="button" onClick={next}>
          {isLastStep ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default App;
