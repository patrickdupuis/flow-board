import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import DropDownProvider from "../DropDownProvider";
import UserMenu from "../UserMenu";

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
