import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import SearchProvider from "./search-context";
import BoardProvider from "./board-context";
import TaskBoard from "./task-board";
import Loading from "./loading";

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
            <TaskBoard />
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
