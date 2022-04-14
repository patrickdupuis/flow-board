import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import LoginButton from "./login";
import SignupButton from "./signup";
import UserIcon from "./user-icon";

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Wrapper>
      {!isAuthenticated ? (
        <>
          <LoginButton />
          <SignupButton primary={true} />
        </>
      ) : (
        <UserIcon />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default AuthNav;
