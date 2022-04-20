import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <>
        <Container>
          <Avatar src={user.picture} alt={user.name} />
          <Info>
            <Name>{user.nickname}</Name>
            <Email>{user.email}</Email>
          </Info>
        </Container>
      </>
    )
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const Name = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

const Email = styled.p`
  margin: 0;
`;

export default Profile;
