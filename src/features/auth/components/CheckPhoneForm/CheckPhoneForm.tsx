import { useCheckPhoneForm } from '../../hooks/useCheckPhoneForm';

import { Input, Button } from '../../../../components/ui';
import styles from './CheckPhoneForm.module.scss';

export const CheckPhoneForm = () => {
  const { restRegister, setRefs, currentPhone, handleSubmit, isLoading } = useCheckPhoneForm();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        label="Your phone number"
        type="tel"
        className={styles.input}
        isLoading={isLoading}
        {...restRegister}
        ref={setRefs}
      />

      {/*TODO: add checkbox 'keep me signed in' */}
      {currentPhone?.length === 16 && (
        <Button type="submit" isLoading={isLoading}>
          NEXT
        </Button>
      )}
    </form>
  );
};
