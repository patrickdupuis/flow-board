import { useAuth0 } from "@auth0/auth0-react";
import BoardProvider from "./board-context";
import TaskBoard from "./task-board";
import styled from "styled-components";

const Project = () => {
  const { user } = useAuth0();

  return (
    <BoardProvider>
      <Title>{`${user.nickname}'s project board`}</Title>
      <TaskBoard />
    </BoardProvider>
  );
};

const Title = styled.h3`
  margin: 0;
  padding-bottom: 20px;
  font-size: 28px;
  font-weight: 300;
`;

export default Project;
