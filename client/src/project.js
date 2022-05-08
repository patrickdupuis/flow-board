import { useAuth0 } from "@auth0/auth0-react";
import BoardProvider from "./board-context";
import TaskBoard from "./task-board";
import styled from "styled-components";
import Loading from "./loading";

const Project = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <Title>{`${user.nickname}'s project board`}</Title>
      <BoardProvider>
        <TaskBoard />
      </BoardProvider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  overflow: auto;
`;

const Title = styled.h3`
  margin: 0;
  padding: calc(var(--header-height) / 4) 0;
  font-size: 28px;
  font-weight: 300;
`;

export default Project;
