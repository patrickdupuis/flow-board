import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import config from "./auth_config.json";

const AuthorizationProvider = ({ children }) => {
  const domain = config.domain;
  const clientId = config.clientId;
  const audience = config.audience;

  const navigate = useNavigate();

  const onRedirectCallback = () => {
    navigate(window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthorizationProvider;
