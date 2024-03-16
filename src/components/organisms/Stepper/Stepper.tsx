import StepItem from "../../molecule/StepItem/StepItem";
import useStepStore from "../../../stores/StepStore/StepStore";
import { steps } from "../../../contants";
import "./Stepper.scss";

const Stepper = () => {
  const activeStep = useStepStore((state) => state.activeStep);

  const isStepActive = (stepNumber: number) => {
    return stepNumber === activeStep;
  };

  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <StepItem
          key={step.id}
          id={step.id}
          title={step.name}
          index={index}
          totalSteps={steps.length}
          isActive={isStepActive(step.id)}
        />
      ))}
    </div>
  );
};

export default Stepper;
