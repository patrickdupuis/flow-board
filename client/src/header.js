import styled from "styled-components";
import Logo from "./logo";
import MainNav from "./main-nav";
import AuthNav from "./auth-nav";
import UserDropdown from "./user-dropdown";

const Header = () => {
  return (
    <>
      <Wrapper>
        <Nav>
          <LogoWrapper>
            <Logo size="2.5rem" />
          </LogoWrapper>
          <MainNav />
          <AuthNav />
        </Nav>
      </Wrapper>
      <UserDropdown />
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: var(--header-height);
  background-color: #f8f9fa;
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

const LogoWrapper = styled.div`
  margin-right: 20px;
`;

export default Header;
