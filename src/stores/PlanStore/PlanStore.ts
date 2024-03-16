import { create } from 'zustand';
import { GetPlansInterface } from '../../services/PlanService/PlanServiceInterface';

interface PlanState {
    plans: GetPlansInterface[] | null;
    setPlans: (plans: GetPlansInterface[]) => void;
    selectedPlan: GetPlansInterface | null;
    setSelectedPlan: (selectedPlan: GetPlansInterface) => void;
}

const usePlanStore = create<PlanState>((set) => ({
    plans: null,
    setPlans: (plans) => set({ plans }),
    selectedPlan: null,
    setSelectedPlan: (selectedPlan) => set({ selectedPlan }),
}));

export default usePlanStore;
