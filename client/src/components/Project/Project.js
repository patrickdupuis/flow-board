import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import SearchProvider from "../SearchProvider";
import BoardProvider from "../BoardProvider";
import Board from "../Board";
import Loading from "../Loading";

const Project = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollContainer>
      <Wrapper>
        <Title>{`${user.nickname}'s project board`}</Title>
        <SearchProvider>
          <BoardProvider>
            <Board />
          </BoardProvider>
        </SearchProvider>
      </Wrapper>
    </ScrollContainer>
  );
};

const ScrollContainer = styled.div`
  overflow: auto;
`;

const Wrapper = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`;

const Title = styled.h3`
  margin: 0;
  padding: 20px 0 0 0;
  font-size: 28px;
  font-weight: 300;
`;

export default Project;
