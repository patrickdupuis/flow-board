import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext } from "@react-forked/dnd";
import styled from "styled-components";
import TaskList from "./task-list";
import TaskSearch from "./task-search";
import Card from "./card";

// helper function for creating fake tasks
const getItems = (count, offset = 0) => {
  return Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: uuidv4(),
    content: `item ${k + offset}`,
  }));
};

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const TaskBoard = () => {
  const [state, setState] = useState([
    getItems(0),
    getItems(6),
    getItems(0, 6),
    getItems(3, 6),
    getItems(3, 9),
  ]);

  const setSearchResults = (searchResults) => {
    const newState = Array.from(state);
    newState.shift();
    newState.unshift(searchResults);
    setState(newState);
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = Number(source.droppableId);
    const dInd = Number(destination.droppableId);

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];
      setState(newState);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        {state.map((el, index) =>
          index === 0 ? (
            <TaskSearch
              searchResults={state[0]}
              setSearchResults={setSearchResults}
              key={index}
              title="search"
              droppableId={`${index}`}
            />
          ) : (
            <TaskList
              title={`task-${index}`}
              key={index}
              droppableId={`${index}`}
            >
              {el.map((card, index) => (
                <Card key={card.id} card={card} index={index} />
              ))}
            </TaskList>
          )
        )}
      </Wrapper>
    </DragDropContext>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default TaskBoard;
