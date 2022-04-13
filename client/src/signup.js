import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = ({ primary }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      primary={primary}
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Sign Up
    </Button>
  );
};

const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default SignupButton;
