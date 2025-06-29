import { useMask } from '@react-input/mask';
import useGlobalAuthStore from '../../../stores/auth.store';
import { useForm } from 'react-hook-form';

export const useCheckPhoneForm = () => {
  const { setTel, isLoading, setLoading, setActiveCheckPhone, setActiveConfirmPhone, user } =
    useGlobalAuthStore();

  const phoneMask = useMask({
    mask: '+7 ___ ___ __ __',
    replacement: { _: /\d/ },
  });

  interface CheckPhoneFormFields {
    phone: string;
  }

  const phoneNumber = user?.tel;

  const { register, watch, handleSubmit } = useForm<CheckPhoneFormFields>({
    defaultValues: { phone: `${phoneNumber ? phoneNumber : '+7'}` },
  });

  const { ref, ...restRegister } = register('phone');
  const setRefs = (el: HTMLInputElement | null) => {
    ref(el);
    if (phoneMask && 'current' in phoneMask) {
      (phoneMask as React.MutableRefObject<HTMLInputElement | null>).current = el;
    }
  };

  const currentPhone = watch('phone');

  const onSubmit = (data: CheckPhoneFormFields) => {
    setLoading(true);
    setTimeout(() => {
      setTel(data.phone);
      setLoading(false);
      setActiveCheckPhone(false);
      setActiveConfirmPhone(true);
    }, 2000);
  };

  return {
    restRegister,
    setRefs,
    currentPhone,
    handleSubmit: handleSubmit(onSubmit),
    isLoading,
  };
};
