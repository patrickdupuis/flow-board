import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import RequireAuth from "./require-auth";
import Header from "./header";
import LandingPage from "./landing";
import Profile from "./profile";
import Project from "./project";

const App = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  return (
    <Wrapper>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              isLoading ? (
                <div>Loading ...</div>
              ) : isAuthenticated ? (
                <Navigate to="/my-project" />
              ) : (
                <LandingPage />
              )
            }
          />
          <Route
            path="/profile"
            element={<RequireAuth component={<Profile />} />}
          />
          <Route
            path="/my-project"
            element={<RequireAuth component={<Project />} />}
          />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 - Not Found</p>
              </main>
            }
          />
        </Routes>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
