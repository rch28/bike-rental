import { create } from "zustand";
type State = {
  showChangePassword: boolean;
  email: string;
};

type Action = {
  setShowChangePassword: (value: boolean) => void;
  setEmail: (email: string) => void;
};
export const useUserStore = create<State & Action>((set) => ({
  showChangePassword: false,
  setShowChangePassword: (value) => set({ showChangePassword: value }),

  email: "",
  setEmail: (email) => set({ email }),
}));
