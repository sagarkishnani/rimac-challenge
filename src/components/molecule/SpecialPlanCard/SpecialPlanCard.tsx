import home from "@/assets/images/icons/plan-card/home-light.svg";
import hospital from "@/assets/images/icons/plan-card/hospital-light.svg";
import Badge from "../../atoms/Badge/Badge";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import "./SpecialPlanCard.scss";

interface SpecialPlanCardProps {
  name: string;
  price: number;
  discountedPrice: number | null;
  description: string[];
  onSelect: (name: string) => void;
}

const SpecialPlanCard: React.FC<SpecialPlanCardProps> = ({
  name,
  price,
  discountedPrice = price,
  description,
  onSelect,
}) => {
  const handleClick = () => {
    onSelect(name);
  };

  return (
    <div key={name} className={`special-plan-card`}>
      <div className="special-plan-card__inner-container">
        <div className="special-plan-card__inner-container__first">
          {name.toLowerCase().includes("clínica") && (
            <Badge title="Plan recomendado" isGradientBadge={false} />
          )}
          <div className="special-plan-card__inner-container__first__title pt__md">
            <div className="font__bold size__xl">{name}</div>
            <img
              src={name.toLowerCase().includes("clínica") ? hospital : home}
              alt="plan-for-me"
            />
          </div>
          <div className="special-plan-card__inner-container__first__cost pt__md">
            <div className="pb__sm">
              <h6 className="font__bold">COSTO DEL PLAN</h6>
            </div>
            {price !== discountedPrice && (
              <div className="pb__sm">
                <p>${price} antes</p>
              </div>
            )}
            <div>
              <h4 className="font__bold">${discountedPrice} al mes</h4>
            </div>
          </div>
        </div>
        <hr />

        <div className="special-plan-card__inner-container__content size__sm line-height__lg">
          <ul>
            {description.map((desc) => (
              <li>{desc}</li>
            ))}
          </ul>
        </div>
        <div className="special-plan-card__inner-container__button">
          <SecondaryButton title={"Seleccionar plan"} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default SpecialPlanCard;
