import { create } from 'zustand';

interface StepState {
    activeStep: number;
    setActiveStep: (activeStep: number) => void;
}

const useStepStore = create<StepState>((set) => ({
    activeStep: 1,
    setActiveStep: (activeStep) => set({ activeStep }),
}));

export default useStepStore;
