import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import LoginButton from "./login-button";
import SignupButton from "./signup-button";
import DropDownProvider from "./dropdown-context";
import UserMenu from "./user-menu";

const AuthNav = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <></>;
  }

  return (
    <Wrapper>
      {!isAuthenticated ? (
        <>
          <LoginButton />
          <SignupButton primary={true}>Sign up</SignupButton>
        </>
      ) : (
        <>
          <DropDownProvider>
            <UserMenu />
          </DropDownProvider>
        </>
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
