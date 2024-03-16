import { planCards } from "../../../contants";
import PlanCard from "../../molecule/PlanCard/PlanCard";
import "./PlanCards.scss";

interface PlanCardsProps {
  selectedPlanId: number | null;
  onSelect: (id: number) => void;
}

const PlanCards: React.FC<PlanCardsProps> = ({ selectedPlanId, onSelect }) => {
  return (
    <div className="plan-cards">
      {planCards.map((card) => (
        <PlanCard
          key={card.id}
          id={card.id}
          name={card.name}
          description={card.description}
          isSelected={card.id === selectedPlanId}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default PlanCards;
