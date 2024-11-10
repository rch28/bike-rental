import { create } from "zustand";
type State = {
  isLogged: boolean;
  translateSiderbar: string;
  toggleAddBikeDrawer: boolean;
  email: string;
};

type Action = {
  setLogged: (value: boolean) => void;
  setTranslateSiderbar: (value: string) => void;
  setToggleAddBikeDrawer: (value: boolean) => void;
  setEmail: (value: string) => void;
};
export const useStore = create<State & Action>((set) => ({
  isLogged: false,
  setLogged: (value) => set({ isLogged: value }),

  email: "",
  setEmail: (value) => set({ email: value }),
  // toggle siderbar
  translateSiderbar: "-translate-x-full",
  setTranslateSiderbar: (value) => set({ translateSiderbar: value }),

  // toggle AddBikeDrawer
  toggleAddBikeDrawer: false,
  setToggleAddBikeDrawer: (value) => set({ toggleAddBikeDrawer: value }),
}));
