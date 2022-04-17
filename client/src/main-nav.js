import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import ProjectMenu from "./project-menu";

const MainNav = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <Wrapper>
      {!isAuthenticated && !isLoading ? (
        <>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
        </>
      ) : (
        <>{!isLoading && <ProjectMenu />}</>
      )}
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
