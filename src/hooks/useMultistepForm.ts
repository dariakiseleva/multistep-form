import { ReactElement, useState } from "react";

//Takes ALL steps, which are react elements
const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  //ADVANCE THROUGH STEPS FORWARD OR BACK WITHIN BOUNDS

  const next = () => {
    setCurrentStepIndex((oldIndex) => {
      if (oldIndex == steps.length - 1) return oldIndex;
      return oldIndex + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((oldIndex) => {
      if (oldIndex == 0) return oldIndex;
      return oldIndex - 1;
    });
  };

  const goToStep = (index: number) => {
    setCurrentStepIndex(index);
  };

  //RETURN THINGS FROM THE HOOK
  return {
    steps,
    currentStepIndex,
    step: steps[currentStepIndex],
    next,
    back,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};

export { useMultistepForm };
