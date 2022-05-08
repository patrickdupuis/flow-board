import { useContext } from "react";
import { DragDropContext } from "@react-forked/dnd";
import styled from "styled-components";
import { BoardContext } from "./board-context";
import TaskList from "./task-list";
import TaskSearch from "./task-search";
import Card from "./card";

const TaskBoard = () => {
  const { listTitles, onDragEnd, state, setSearchResults } =
    useContext(BoardContext);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        {state.map((el, index) =>
          index === 0 ? (
            <TaskSearch
              searchResults={state[0]}
              setSearchResults={setSearchResults}
              key={index}
              title={listTitles[index]}
              droppableId={`${index}`}
            />
          ) : (
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
          )
        )}
      </Wrapper>
    </DragDropContext>
  );
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
`;

export default TaskBoard;
