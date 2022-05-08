import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import Loading from "./loading";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    isAuthenticated && (
      <Wrapper>
        <Container>
          <Avatar src={user.picture} alt={user.name} />
          <Info>
            <Name>{user.nickname}</Name>
            <Email>{user.email}</Email>
          </Info>
        </Container>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  margin-top: var(--header-height);
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  padding: 50px 100px;
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid lightgrey;
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
