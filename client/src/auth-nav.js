import styled from "styled-components";
import LoginButton from "./login";
import SignupButton from "./signup";

const AuthNav = () => {
  return (
    <Wrapper>
      <LoginButton />
      <SignupButton primary={true} />
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
