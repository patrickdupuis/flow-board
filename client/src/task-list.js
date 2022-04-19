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
          draggingFromThisWith={snapshot.draggingFromThisWith}
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
  padding-bottom: 8rem;
  width: 280px;
  min-height: 450px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#effff1"
      : props.draggingFromThisWith
      ? "#ffeeee"
      : "#f8f8f8"};
`;

const Title = styled.h3`
  margin: 0;
  padding: 8px 0;
  font-size: 18px;
`;

export default TaskList;
