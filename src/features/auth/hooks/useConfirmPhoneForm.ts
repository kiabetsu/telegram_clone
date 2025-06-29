import { data } from '../../../assets/data/data';
import useGlobalAuthStore from '../../../stores/auth.store';

interface confirmPhoneFormFields {
  code: string;
}

export const useConfirmPhone = () => {
  const {
    user,
    setLoading,
    isLoading,
    setActiveConfirmPhone,
    setActiveRegister,
    setActiveCheckPassword,
  } = useGlobalAuthStore();

  const requestToServerMock = () => {
    setTimeout(() => {
      if (user?.tel === '+7 777 777 77 77') {
        console.log(user?.tel === '+7 777 777 77 77');
        setLoading(false);
        setActiveConfirmPhone(false);
        setActiveCheckPassword(true);
        return;
      }

      setLoading(false);
      setActiveConfirmPhone(false);
      setActiveRegister(true);
    }, 2000);
  };

  const onSubmit = (code: confirmPhoneFormFields) => {
    if (user) {
      const receivedCode = data.users.find((value) => value.phone === user.tel);
      if (!receivedCode) return;

      const fields: confirmPhoneFormFields = code;
      if (fields.code.length === 5) {
        if (receivedCode.confirmCode === fields.code) {
          setLoading(true);
          requestToServerMock();
        } else console.error("code don't match");
      }
    }
  };

  return { handleSubmit: onSubmit, isLoading };
};
