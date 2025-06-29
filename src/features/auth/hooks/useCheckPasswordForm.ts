import { useForm } from 'react-hook-form';
import { data } from '../../../assets/data/data';
import useGlobalAuthStore from '../../../stores/auth.store';
import React from 'react';

export const useCheckPasswordForm = () => {
  interface CheckPasswordFormFields {
    tel: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitted },
    watch,
  } = useForm<CheckPasswordFormFields>();

  const passwordValue = watch('password');

  React.useEffect(() => {
    if (isSubmitted && passwordValue) clearErrors('password');
  }, [passwordValue, isSubmitted, clearErrors]);

  const { setLoading, setAuth, setActiveCheckPassword, user, isLoading } = useGlobalAuthStore();

  const onSubmit = (form: CheckPasswordFormFields) => {
    const userPhone = user?.tel;
    const userData = data.users.find((userData) => userData.phone === userPhone);

    if (form.password === userData?.password) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setAuth(true);
        setActiveCheckPassword(false);
      }, 2000);
    } else {
      setError('password', {
        type: 'manual',
        message: 'Incorrect password',
      });
    }
  };

  return { register, handleSubmit: handleSubmit(onSubmit), onSubmit, isLoading, errors };
};
