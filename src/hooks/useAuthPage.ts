import useGlobalAuthStore from '../stores/auth.store';

export const useAuthPage = () => {};

export const useEditPhoneNumber = () => {
  const { setActiveCheckPhone, setActiveConfirmPhone } = useGlobalAuthStore();
  const editPhoneNumber = () => {
    setActiveCheckPhone(true);
    setActiveConfirmPhone(false);
  };

  return { editPhoneNumber };
};

export const isPhoneNumber = (text: string) => {
  const regex = /[0-9]/;
  return regex.test(text);
};
