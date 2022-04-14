import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import RequireAuth from "./require-auth";
import Home from "./home";
import Protected from "./protected";
import Header from "./header";
import Footer from "./footer";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
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
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
`;

export default App;
