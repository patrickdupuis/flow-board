import { useAuth0 } from "@auth0/auth0-react";
import BoardProvider from "./board-context";
import TaskBoard from "./task-board";
import styled from "styled-components";

const Project = () => {
  const { user } = useAuth0();

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
  align-items: center;
  height: 100%;
`;

const Title = styled.h3`
  margin: 0;
  padding: calc(var(--header-height) / 4) 0;
  font-size: 28px;
  font-weight: 300;
`;

export default Project;
