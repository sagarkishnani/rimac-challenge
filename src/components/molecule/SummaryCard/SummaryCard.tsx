import "./SummaryCard.scss";
import family from "../../../assets/images/icons/plan-summary/ic-family.svg";
import useUserStore from "../../../stores/UserStore/UserStore";
import usePlanStore from "../../../stores/PlanStore/PlanStore";

const SummaryCard = () => {
  const selectedPlan = usePlanStore((state) => state.selectedPlan);
  const user = useUserStore((state) => state.user);

  return (
    <div className="summary-card">
      <div>
        <h6 className="font__bold">Precios calculados para:</h6>
        <div className="summary-card__name pt__md pb__sm">
          <img src={family} alt="family" />
          <h3 className="font__bold">
            {user?.name} {user?.lastName}
          </h3>
        </div>
      </div>
      <hr />
      <div className="pt__md">
        <h5 className="font__bold">Responsable de pago</h5>
        <p className="pt__sm">
          {user?.documentType}: {user?.documentNumber}{" "}
        </p>
        <p className="pt__sm">Celular: {user?.phone} </p>
      </div>
      <div className="pt__md">
        <h5 className="font__bold">Plan elegido</h5>
        <p className="pt__sm">{selectedPlan?.name}</p>
        <p className="pt__sm">
          Costo del Plan: $
          {selectedPlan?.discountedPrice
            ? selectedPlan?.discountedPrice
            : selectedPlan?.price}{" "}
          al mes
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
