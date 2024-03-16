import { create } from 'zustand';
import { User } from '../../services/UserService/UserServiceInterface';

interface UserState {
    user: User | null;
    setUser: (user: User) => void;
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
}

const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    isLoading: false,
    setIsLoading: (isLoading) => set({ isLoading })
}));

export default useUserStore;
