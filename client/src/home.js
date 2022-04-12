import { useAuth0 } from "@auth0/auth0-react";
import logo from "./logo.svg";
import "./home.css";
import LoginButton from "./login";
import LogoutButton from "./logout";
import Profile from "./profile";

function Home() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <Profile />
        {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
      </header>
    </div>
  );
}

export default Home;
