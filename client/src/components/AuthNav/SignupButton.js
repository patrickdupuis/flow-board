import { useAuth0 } from "@auth0/auth0-react";
import AuthButton from "./AuthButton";

const SignupButton = ({ primary, className, children }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <AuthButton
      className={className}
      primary={primary}
      handleClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      {children}
    </AuthButton>
  );
};

export default SignupButton;
