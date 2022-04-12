import { Routes, Route } from "react-router-dom";
import RequireAuth from "./require-auth";
import Home from "./home";
import Protected from "./protected";

const App = () => {
  return (
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
  );
};

export default App;
