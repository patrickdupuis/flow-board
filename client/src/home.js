import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import logo from "./logo.svg";
import LoginButton from "./login";
import LogoutButton from "./logout";
import Profile from "./profile";

function Home() {
  const { isAuthenticated } = useAuth0();

  return (
    <Wrapper>
      <Header>
        <Logo src={logo} alt="logo" />
        <Profile />
        {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
      </Header>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @keyframes Home-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: Home-logo-spin infinite 20s linear;
  }
`;

export default Home;
