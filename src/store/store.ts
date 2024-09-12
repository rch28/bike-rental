import { create } from 'zustand'
type State = {
   isLogged: boolean
  }

type Action = {
  setLogged: (value: boolean) => void
    
  }
export const useStore = create<State & Action>((set) => ({
  isLogged: false,
  setLogged: (value) => set({ isLogged: value }),
}))
