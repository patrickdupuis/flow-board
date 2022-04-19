import { createContext, useState } from "react";

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

export const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const listTitles = ["Search", "To Do", "In Progress", "Done"];
  const [state, setState] = useState(
    Array.from({ length: listTitles.length }).map(() => [])
  );

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
    <BoardContext.Provider
      value={{ listTitles, state, setState, onDragEnd, setSearchResults }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardProvider;