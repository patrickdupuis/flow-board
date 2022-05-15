import { useContext } from "react";
import styled from "styled-components";
import { DragDropContext } from "@react-forked/dnd";
import { BoardContext } from "../BoardProvider";
import Tasks from "../Tasks";
import Search from "../Search";
import Card from "../Card";

const Board = () => {
  const { listTitles, onDragEnd, state } = useContext(BoardContext);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        {/*
          the droppableId of Search must be -1
        */}
        {[
          <Search key={-1} droppableId={`${-1}`} />,
          ...state.map((el, index) => (
            <Tasks
              title={listTitles[index]}
              key={index}
              droppableId={`${index}`}
            >
              {el.map((card, cardIndex) => (
                <Card
                  key={card.id}
                  card={card}
                  index={cardIndex}
                  listIndex={index}
                />
              ))}
            </Tasks>
          )),
        ]}
      </Wrapper>
    </DragDropContext>
  );
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
`;

export default Board;
