import styled from "styled-components";
import AuthNav from "../AuthNav";
import Logo from "./Logo";

const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <Logo />
        <AuthNav />
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: var(--header-height);
  background-color: var(--color-grey-background);
  box-shadow: 0 1px 2px 0 #dfe3ec;
`;

const Nav = styled.nav`
  margin: 0 20px;
  display: flex;
  align-items: center;
  width: 100%;

  @media (min-width: 1200px) {
    max-width: 100%;
  }
`;

export default Header;
