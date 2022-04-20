import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import Dashboard from "./dashboard";
import LandingPage from "./landing";

const Home = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Wrapper>{!isAuthenticated ? <LandingPage /> : <Dashboard />}</Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`;

export default Home;
