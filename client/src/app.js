import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import RequireAuth from "./require-auth";
import Protected from "./protected";
import Header from "./header";
import Footer from "./footer";
import Home from "./home";
import Profile from "./profile";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={<RequireAuth component={<Profile />} />}
          />
          <Route
            path="/protected"
            element={<RequireAuth component={<Protected />} />}
          />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
`;

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
`;

export default App;
