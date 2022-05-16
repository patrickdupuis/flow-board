import { useAuth0 } from "@auth0/auth0-react";
import AuthButton from "./AuthButton";

const LoginButton = ({ primary }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <AuthButton primary={primary} handleClick={() => loginWithRedirect()}>
      Log In
    </AuthButton>
  );
};

export default LoginButton;
