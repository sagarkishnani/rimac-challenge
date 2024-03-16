import { GetPlansInterface } from "../../../services/PlanService/PlanServiceInterface";
import SpecialPlanCard from "../../molecule/SpecialPlanCard/SpecialPlanCard";
import "./SpecialPlanCards.scss";

interface SpecialPlanCardsProps {
  plans: GetPlansInterface[] | null;
  onSelect: (name: string) => void;
}

const SpecialPlanCards: React.FC<SpecialPlanCardsProps> = ({
  plans,
  onSelect,
}) => {
  return (
    <div className="special-plan-cards">
      {plans?.map((card, index) => (
        <SpecialPlanCard
          key={index}
          name={card.name}
          description={card.description}
          price={card.price}
          discountedPrice={card.discountedPrice}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default SpecialPlanCards;
