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
        </Container>
      )}
    </Draggable>
  );
};

const Container = styled.div`
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

export default Card;
