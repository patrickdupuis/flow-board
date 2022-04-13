import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      <StyledNavLink to="/about">About</StyledNavLink>
      <StyledNavLink to="/contact">Contact</StyledNavLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-right: auto;
  display: flex;
  justify-content: flex-start;
`;

const StyledNavLink = styled(NavLink)`
  margin: 0 1.5rem 0 0;
  padding: 0 0.5rem 0.5rem 0.5rem;
  color: black;
  box-sizing: border-box;
  border-bottom: none;
  text-decoration: none;

  &:hover {
    opacity: 0.75;
  }

  &[class*="active"] {
    color: blue;
    border-bottom: 3px solid #0066f9;
  }
`;

export default MainNav;
