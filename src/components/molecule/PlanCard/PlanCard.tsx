import "./PlanCard.scss";
import forMe from "@/assets/images/icons/plan-card/for-me.svg";
import forSomeone from "@/assets/images/icons/plan-card/for-someone.svg";
import empty from "@/assets/images/icons/plan-card/atoms_radio_button_web.svg";
import check from "@/assets/images/icons/plan-card/atoms_radio_button_web_check.svg";

interface PlanCardProps {
  id: number;
  name: string;
  description: string;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({
  id,
  name,
  description,
  isSelected,
  onSelect,
}) => {
  const handleClick = () => {
    onSelect(id);
  };

  return (
    <div
      className={`plan-card ${isSelected ? "plan-card__selected" : ""}`}
      onClick={handleClick}
    >
      <div className="plan-card__radio">
        <img src={isSelected ? check : empty} alt="radio-button" />
      </div>
      <div className="plan-card__inner-container">
        <div>
          <img src={id == 1 ? forMe : forSomeone} alt="plan" />
        </div>
        <div className="font__bold size__xl">{name}</div>
        <div className="size__sm line-height__lg">{description}</div>
      </div>
    </div>
  );
};

export default PlanCard;
