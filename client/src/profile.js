import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { getAccessTokenSilently } = useAuth0();

  const callProtectedEndpoint = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch("/protected", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(await response.json());
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button onClick={callProtectedEndpoint}>Call Protected Endpoint</button>
      </div>
    )
  );
};

export default Profile;
