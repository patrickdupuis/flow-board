import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../Loading";

const RequireAuth = ({ component }) => {
  return <>{component}</>;
};

export default withAuthenticationRequired(RequireAuth, {
  onRedirecting: () => <Loading />,
});
