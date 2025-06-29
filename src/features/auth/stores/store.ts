import { create } from 'zustand';

interface User {
  tel: string;
  username: string;
  email: string;
  password: string;
}

interface AuthStore {
  user: User | null;

  setTel: (tel: string) => void;
  setUser: (username: string, email: string, password: string) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,

  setTel: (tel: string) => set(() => ({ user: { tel, username: '', email: '', password: '' } })),

  setUser: (username: string, email: string, password: string) =>
    set((state) => ({
      user: state.user && {
        ...state.user,
        username,
        email,
        password,
      },
    })),
}));

export default useAuthStore;
