import { useContext } from "react";
import styled from "styled-components";
import { DragDropContext } from "@react-forked/dnd";
import { BoardContext } from "./board-context";
import TaskList from "./task-list";
import TaskSearch from "./task-search";
import Card from "./card";

const TaskBoard = () => {
  const { listTitles, onDragEnd, state } = useContext(BoardContext);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        {/*
          the droppableId of TaskSearch must be -1
        */}
        {[
          <TaskSearch key={-1} droppableId={`${-1}`} />,
          ...state.map((el, index) => (
            <TaskList
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
            </TaskList>
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

export default TaskBoard;
