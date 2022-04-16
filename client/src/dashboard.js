import styled from "styled-components";
import logo from "./logo.svg";

const Dashboard = () => {
  return (
    <Wrapper>
      <Content>
        <Logo src={logo} alt="logo" />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
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

export default Dashboard;
