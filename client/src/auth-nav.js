import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import LoginButton from "./login";
import SignupButton from "./signup";
import UserMenu from "./user-menu";

const AuthNav = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <Wrapper>
      {!isAuthenticated && !isLoading ? (
        <>
          <LoginButton />
          <SignupButton primary={true}>Sign up</SignupButton>
        </>
      ) : (
        <>{!isLoading && <UserMenu />}</>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default AuthNav;
