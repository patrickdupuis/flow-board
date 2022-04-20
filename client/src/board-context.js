import { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

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
  const { user, getAccessTokenSilently } = useAuth0();
  const listTitles = ["Search", "To Do", "In Progress", "Done"];
  const [state, setState] = useState(
    Array.from({ length: listTitles.length }).map(() => [])
  );

  const updateBoard = (newState) => {
    // set new state
    setState(newState);

    const patchData = async (newState) => {
      try {
        // update DB
        // FIXME: avoid pushing search results to DB
        const token = await getAccessTokenSilently();
        await fetch("/update-board", {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ user: user.email, data: newState }),
        });
      } catch (err) {
        console.log(err);
      }
    };
    patchData(newState);
  };

  const setSearchResults = (searchResults) => {
    const newState = Array.from(state);
    newState.shift();
    newState.unshift(searchResults);
    updateBoard(newState);
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
      updateBoard(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];
      updateBoard(newState);
    }
  };

  useEffect(() => {
    const getData = async (user) => {
      try {
        const token = await getAccessTokenSilently();
        fetch(`/project-user/${user}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((res) => setState(res.data.data));
      } catch (err) {
        console.log(err);
      }
    };
    getData(user.email);
  }, [user]);

  return (
    <BoardContext.Provider
      value={{
        listTitles,
        state,
        setState,
        updateBoard,
        onDragEnd,
        setSearchResults,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardProvider;
