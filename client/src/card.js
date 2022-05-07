import { Draggable } from "@react-forked/dnd";
import styled from "styled-components";
import CardContent from "./card-content";

const Card = ({ card, index, listIndex }) => {
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
          <CardContent card={card} index={index} listIndex={listIndex} />
        </Container>
      )}
    </Draggable>
  );
};

const Container = styled.div`
  position: relative;
  margin-bottom: 10px;
  min-height: var(--card-min-height);
  user-select: "none";
  border: 1px solid lightgrey;
  background-color: white;
  box-shadow: ${(props) => (props.isDragging ? "3px 3px 5px #e4e4e4" : "none")};
`;

export default Card;
