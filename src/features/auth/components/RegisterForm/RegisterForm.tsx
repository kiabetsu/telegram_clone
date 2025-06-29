import { useRegisterForm } from '../../hooks/useRegisterForm';
import { Input, Button } from '../../../../components/ui';
import styles from './RegisterForm.module.scss';
import useGlobalAuthStore from '../../../../stores/auth.store';

export const RegisterForm = () => {
  const { register, errors, handleSubmit } = useRegisterForm();
  const { isLoading } = useGlobalAuthStore();

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input label="Username" error={errors.username} {...register('username')} />
      <Input label="Email" type="email" error={errors.email} {...register('email')} />
      <Input label="Password" type="password" error={errors.password} {...register('password')} />
      <Button type="submit" isLoading={isLoading}>
        Sing up
      </Button>
    </form>
  );
};
