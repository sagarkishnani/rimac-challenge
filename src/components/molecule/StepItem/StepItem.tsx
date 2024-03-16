import "./StepItem.scss";
import ProgressBar from "../../atoms/ProgressBar/ProgressBar";
import line from "@/assets/images/icons/step-item/line.svg";
import back from "@/assets/images/icons/step-item/back-circle.svg";
import { Link } from "react-router-dom";

interface StepItemProps {
  title: string;
  id: number;
  isActive: boolean;
  index: number;
  totalSteps: number;
}

const StepItem: React.FC<StepItemProps> = ({
  title,
  id,
  isActive,
  index,
  totalSteps,
}) => {
  const isLast = index + 1 === totalSteps;

  return (
    <>
      <div className="step-item">
        <div
          className={`step-item__number ${
            isActive
              ? "step-item__number__active"
              : "step-item__number__inactive"
          }`}
        >
          {id}
        </div>
        <div
          className={`step-item__text font__bold ${
            isActive ? "step-item__text__active" : "step-item__text__inactive"
          }`}
        >
          {title}
        </div>
        {!isLast && (
          <div>
            <img src={line} alt="line" />
          </div>
        )}
      </div>
      {isActive && (
        <div className="step-item__mobile custom-grid">
          <div className="step-item__mobile__back">
            <Link to={"/"}>
              <img src={back} alt="back" />
            </Link>
          </div>
          <div className="step-item__mobile__step">
            Paso {index + 1} de {totalSteps}
          </div>
          <div className="step-item__mobile__progress">
            <ProgressBar key={id} currentIndex={index} length={totalSteps} />
          </div>
        </div>
      )}
    </>
  );
};

export default StepItem;
