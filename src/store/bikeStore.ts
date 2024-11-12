import { BikeListResponse } from "@/Bikes/types/bikeApiTypes";
import { create } from "zustand";
type State = {
  searchQuery: string;
  bikes: BikeListResponse;
  isLoading: boolean;
};

type Action = {
  setSearchQuery: (value: string) => void;
  setBikes: (value: BikeListResponse) => void;
  setIsLoading: (value: boolean) => void;
};
export const useBikeStore = create<State & Action>((set) => ({
  // Search Query
  searchQuery: "",
  setSearchQuery: (value) => set({ searchQuery: value }),

  //   bikes
  bikes: [],
  setBikes: (value) => set({ bikes: value }),

  //   isLoading
  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value }),
}));
