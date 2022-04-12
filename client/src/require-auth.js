import { withAuthenticationRequired } from "@auth0/auth0-react";

const RequireAuth = ({ component }) => {
  return <>{component}</>;
};

export default withAuthenticationRequired(RequireAuth, {
  onRedirecting: () => <div>Loading...</div>,
});
