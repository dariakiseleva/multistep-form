import React, { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode; //That means any type of child that is a react jsx
};

function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      {/* Title of step */}
      <h2
        style={{
          textAlign: "center",
          margin: 0,
          marginBottom: "2rem",
        }}
      >
        {title}
      </h2>

      {/* Children: contents of step wrapped by this component */}
      <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default FormWrapper;
