import { create } from 'zustand'
import Cookies from 'js-cookie'
type State = {
   isLogged: string | undefined
  }

type Action = {
    
  }
export const useStore = create<State & Action>((set) => ({
  isLogged: Cookies.get('user_logged_in'),
}))
