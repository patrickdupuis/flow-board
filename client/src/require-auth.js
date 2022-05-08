import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";

const RequireAuth = ({ component }) => {
  return <>{component}</>;
};

export default withAuthenticationRequired(RequireAuth, {
  onRedirecting: () => <Loading />,
});
