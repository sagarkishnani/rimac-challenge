import { useEffect, useState } from "react";
import { calculateAge } from "../../../utils";
import { GetPlansInterface } from "../../../services/PlanService/PlanServiceInterface";
import Container from "../../molecule/Container/Container";
import Header from "../../organisms/Header/Header";
import PlanCards from "../../organisms/PlanCards/PlanCards";
import StepperContainer from "../../templates/StepperContainer/StepperContainer";
import LabelButton from "../../atoms/LabelButton/LabelButton";
import PlanService from "../../../services/PlanService/PlanService";
import useUserStore from "../../../stores/UserStore/UserStore";
import usePlanStore from "../../../stores/PlanStore/PlanStore";
import SpecialPlanCards from "../../organisms/SpecialPlanCards/SpecialPlanCards";
import SummaryCard from "../../molecule/SummaryCard/SummaryCard";
import useStepStore from "../../../stores/StepStore/StepStore";
import { useNavigate } from "react-router-dom";
import "./Planes.scss";

const Planes = () => {
  const user = useUserStore((state) => state.user);
  const plans = usePlanStore((state) => state.plans);
  const setPlans = usePlanStore((state) => state.setPlans);
  const setSelectedPlan = usePlanStore((state) => state.setSelectedPlan);
  const activeStep = useStepStore((state) => state.activeStep);
  const setActiveStep = useStepStore((state) => state.setActiveStep);
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);
  const [userPlans, setUserPlans] = useState<GetPlansInterface[] | null>([]);

  const navigate = useNavigate();

  const handleBackButton = () => {
    if (activeStep === 1) navigate("/");
    if (activeStep === 2) {
      setActiveStep(1);
      navigate("/planes");
    }
  };

  const getPlans = async () => {
    try {
      const planRes = await PlanService.getPlans();
      setPlans(planRes);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUserPlans = (id: number) => {
    if (id === 1) {
      const filteredPlans = plans?.filter(
        (plan) => plan.age >= calculateAge(user!.birthDay)
      );
      setUserPlans(filteredPlans!);
    } else if (id === 2) {
      const filteredPlans = plans?.filter(
        (plan) => plan.age >= calculateAge(user!.birthDay)
      );
      const updatedPlans = filteredPlans!.map((plan) => {
        const precioConDescuento = plan.price * 0.95;
        return { ...plan, discountedPrice: precioConDescuento };
      });
      setUserPlans(updatedPlans);
    }
  };

  const handleOptionPlan = (id: number) => {
    setSelectedPlanId(id);
    updateUserPlans(id);
  };

  const handleSelectedPlan = (name: string) => {
    const chosenPlan = userPlans?.filter((plan) => plan.name === name)[0];
    setSelectedPlan(chosenPlan!);
    setActiveStep(2);
  };

  useEffect(() => {
    if (selectedPlanId) {
      updateUserPlans(selectedPlanId);
    }
  }, [selectedPlanId]);

  useEffect(() => {
    getPlans();
  }, []);

  return (
    <>
      <Header />
      <StepperContainer />
      {activeStep === 1 && (
        <Container>
          <div className="go-back">
            <LabelButton title="Volver" onClick={handleBackButton} />
          </div>
          <div className="plan-option">
            <div className="plan-option__container">
              <div className="pt__lg">
                <h2>{user?.name}, ¿para quién deseas cotizar?</h2>
              </div>
              <div>
                <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
              </div>
              <div className="pb__3xl">
                <PlanCards
                  selectedPlanId={selectedPlanId}
                  onSelect={handleOptionPlan}
                />
              </div>
            </div>
          </div>
          {selectedPlanId && (
            <SpecialPlanCards onSelect={handleSelectedPlan} plans={userPlans} />
          )}
        </Container>
      )}
      {activeStep === 2 && (
        <Container>
          <div className="go-back">
            <LabelButton title="Volver" onClick={handleBackButton} />
          </div>
          <div className="plan-option pt__2xl">
            <h1 className="pb__3xl">Resumen del seguro</h1>
            <SummaryCard />
          </div>
        </Container>
      )}
    </>
  );
};

export default Planes;
