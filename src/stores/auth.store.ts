import { create } from 'zustand';

interface User {
  tel: string;
  username: string;
  email: string;
  password: string;
}

interface AuthStore {
  isActiveCheckPhone: boolean;
  isActiveConfirmPhone: boolean;
  isActiveRegister: boolean;
  isActiveCheckPassword: boolean;

  setActiveCheckPhone: (toggle: boolean) => void;
  setActiveConfirmPhone: (toggle: boolean) => void;
  setActiveRegister: (toggle: boolean) => void;
  setActiveCheckPassword: (toggle: boolean) => void;

  user: User | null;

  setTel: (tel: string) => void;
  setUser: (username: string, email: string, password: string) => void;

  isAuth: boolean;
  setAuth: (toggle: boolean) => void;

  isLoading: boolean;
  setLoading: (toggle: boolean) => void;
}

const useGlobalAuthStore = create<AuthStore>((set) => ({
  isActiveCheckPhone: true,
  isActiveConfirmPhone: false,
  isActiveRegister: false,
  isActiveCheckPassword: false,
  user: null,
  isAuth: false,
  isLoading: false,

  setActiveCheckPhone: (toggle) => set(() => ({ isActiveCheckPhone: toggle })),
  setActiveConfirmPhone: (toggle) => set(() => ({ isActiveConfirmPhone: toggle })),
  setActiveRegister: (toggle) => set(() => ({ isActiveRegister: toggle })),
  setActiveCheckPassword: (toggle) => set(() => ({ isActiveCheckPassword: toggle })),

  setTel: (tel) => set(() => ({ user: { tel, username: '', email: '', password: '' } })),

  setUser: (username, email, password) =>
    set((state) => ({
      user: state.user && {
        ...state.user,
        username,
        email,
        password,
      },
    })),

  setAuth: (toggle: boolean) => set(() => ({ isAuth: toggle })),

  setLoading: (toggle: boolean) => set(() => ({ isLoading: toggle })),
}));

export default useGlobalAuthStore;
