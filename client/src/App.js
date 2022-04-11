import { useAuth0 } from "@auth0/auth0-react";
import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./login";
import LogoutButton from "./logout";
import Profile from "./profile";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Profile />
        {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
      </header>
    </div>
  );
}

export default App;
