import { Draggable } from "@react-forked/dnd";
import styled from "styled-components";

const Card = ({ card, index }) => {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
          style={provided.draggableProps.style}
        >
          <CardContent>{card.content}</CardContent>
          <DeleteButton onClick={() => console.log("delete")}>x</DeleteButton>
        </Container>
      )}
    </Draggable>
  );
};

const Container = styled.div`
  position: relative;
  margin-bottom: 8px;
  padding: 6px;
  user-select: "none";
  border: 1px solid lightgrey;
  background-color: white;
  box-shadow: ${(props) => (props.isDragging ? "3px 3px 5px #e4e4e4" : "none")};
`;

const CardContent = styled.div`
  padding: 8px;
`;

const DeleteButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

export default Card;
