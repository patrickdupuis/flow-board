import { Droppable } from "@react-forked/dnd";
import styled from "styled-components";

const DroppableContainer = ({
  droppableId,
  isDropDisabled = false,
  className,
  children,
}) => {
  return (
    <Droppable droppableId={droppableId} isDropDisabled={isDropDisabled}>
      {(provided, snapshot) => (
        <Container
          className={className}
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
          draggingFromThisWith={snapshot.draggingFromThisWith}
          {...provided.droppableProps}
        >
          {children}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
};

const Container = styled.div`
  margin: 8px;
  padding: 8px;
  padding-bottom: 8rem;
  width: var(--tasklist-width);
  min-height: 450px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#effff1"
      : props.draggingFromThisWith
      ? "#ffeeee"
      : "#f8f8f8"};
`;

export default DroppableContainer;
