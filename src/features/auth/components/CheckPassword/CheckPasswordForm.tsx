import { Input, Button } from '../../../../components/ui';
import styles from './CheckPasswordForm.module.scss';
import { useCheckPasswordForm } from '../../hooks/useCheckPasswordForm';

export const CheckPasswordForm = () => {
  const { register, handleSubmit, isLoading, errors } = useCheckPasswordForm();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        label="Password"
        type="password"
        isLoading={isLoading}
        error={errors.password}
        {...register('password')}
      />
      <Button type="submit" isLoading={isLoading}>
        Log in
      </Button>
    </form>
  );
};
