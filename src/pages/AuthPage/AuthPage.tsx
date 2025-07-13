import { AuthLayout } from '../../components/layouts';
import { ChatLayout } from '../../features/chat/components/ChatLayout';
import {
  RegisterForm,
  CheckPhoneForm,
  ConfirmPhoneForm,
  CheckPasswordForm,
} from '../../features/auth';
import { CircleSlash2 } from 'lucide-react';
import useGlobalAuthStore from '../../stores/auth.store';

export const AuthPage = () => {
  const {
    isActiveCheckPhone,
    isActiveConfirmPhone,
    isActiveRegister,
    user,
    isActiveCheckPassword,
  } = useGlobalAuthStore();

  return (
    <>
      {isActiveCheckPhone && (
        <AuthLayout
          logo={<CircleSlash2 size={120} />}
          title="BoltTalk"
          note="Please confirm your country code and enter your phone number.">
          <CheckPhoneForm />
        </AuthLayout>
      )}
      {isActiveConfirmPhone && (
        <AuthLayout
          logo={<CircleSlash2 size={120} />}
          title={user?.tel}
          note="We've sent the code to the your phone number.">
          <ConfirmPhoneForm />
        </AuthLayout>
      )}
      {isActiveRegister && (
        <AuthLayout
          logo={<CircleSlash2 size={120} />}
          title="Register"
          note="Please fill in the details to register">
          <RegisterForm />
        </AuthLayout>
      )}
      {isActiveCheckPassword && (
        <AuthLayout
          logo={<CircleSlash2 size={120} />}
          title="Check password"
          note="Please enter your password for log in">
          <CheckPasswordForm />
        </AuthLayout>
      )}

      <ChatLayout />
    </>
  );
};
