import { Input } from '../../../../components/ui';
import { useConfirmPhone } from '../../hooks/useConfirmPhoneForm';

export const ConfirmPhoneForm = () => {
  const { handleSubmit, isLoading } = useConfirmPhone();

  return (
    <Input
      label="Code"
      onChange={(e) => handleSubmit({ code: e.target.value })}
      maxLength={5}
      isLoading={isLoading}
      autoFocus
    />
  );
};
