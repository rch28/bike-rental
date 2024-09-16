import { create } from 'zustand'
type State = {
   isLogged: boolean,
   translateSiderbar: string
  }

type Action = {
  setLogged: (value: boolean) => void
  setTranslateSiderbar: (value: string) => void
    
  }
export const useStore = create<State & Action>((set) => ({
  isLogged: false,
  setLogged: (value) => set({ isLogged: value }),

  // toggle siderbar
  translateSiderbar : '-translate-x-full',
  setTranslateSiderbar: (value) => set({ translateSiderbar: value }),

}))
