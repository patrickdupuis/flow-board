import React from "react";
import { Droppable } from "@react-forked/dnd";
import styled from "styled-components";

// Memoized version is apparently better for performance
const TaskList = React.memo(function TaskList({
  title,
  droppableId,
  children,
}) {
  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
          {...provided.droppableProps}
        >
          <Title>{title}</Title>
          {children}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
});

const Container = styled.div`
  margin: 8px;
  padding: 8px;
  width: 280px;
  background: ${(props) => (props.isDraggingOver ? "#e0eeff" : "#f8f8f8")};
`;

const Title = styled.h3`
  margin: 0;
  padding: 8px 0;
  font-size: 18px;
  text-align: right;
`;

export default TaskList;
