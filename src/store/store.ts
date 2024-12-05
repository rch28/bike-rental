import { RentalResponse } from "@/BikeRent/types/BikeRentFormSchema";
import { create } from "zustand";
type State = {
  isLogged: boolean;
  translateSiderbar: string;
  toggleAddBikeDrawer: boolean;
  rentalDetails: RentalResponse;
};

type Action = {
  setLogged: (value: boolean) => void;
  setTranslateSiderbar: (value: string) => void;
  setToggleAddBikeDrawer: (value: boolean) => void;
  setRentDetails: (value: RentalResponse) => void;
};
export const useStore = create<State & Action>((set) => ({
  isLogged: false,
  setLogged: (value) => set({ isLogged: value }),

  // toggle siderbar
  translateSiderbar: "-translate-x-full",
  setTranslateSiderbar: (value) => set({ translateSiderbar: value }),

  // toggle AddBikeDrawer
  toggleAddBikeDrawer: false,
  setToggleAddBikeDrawer: (value) => set({ toggleAddBikeDrawer: value }),

  // rent details
  rentalDetails: {} as RentalResponse,
  setRentDetails: (value) => set({ rentalDetails: value }),
}));
