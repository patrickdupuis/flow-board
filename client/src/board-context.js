import { createContext, useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { SearchContext } from "./search-context";

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
  const listTitles = ["To Do", "In Progress", "Done"];
  const { user, getAccessTokenSilently } = useAuth0();
  const { searchResults, setSearchResults } = useContext(SearchContext);
  const [state, setState] = useState(
    Array.from({ length: listTitles.length }).map(() => [])
  );

  const updateBoard = (newState) => {
    // set new state
    setState(newState);

    const updateDB = async (data) => {
      try {
        const token = await getAccessTokenSilently();
        await fetch("/update-board", {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ user: user.email, data: data }),
        });
      } catch (err) {
        console.log(err);
      }
    };
    // update DB
    updateDB(newState);
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = Number(source.droppableId);
    const dInd = Number(destination.droppableId);

    // search has droppableId of -1
    if (sInd === -1) {
      const result = move(searchResults, state[dInd], source, destination);
      const newState = [...state];
      newState[dInd] = result[dInd];
      updateBoard(newState);
      setSearchResults(result[sInd]);
    } else if (sInd === dInd) {
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
    const getUserProject = async (user) => {
      try {
        const token = await getAccessTokenSilently();
        fetch(`/project-user/${user}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            setState(res.data.data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getUserProject(user.email);
  }, [user]);

  return (
    <BoardContext.Provider
      value={{
        listTitles,
        state,
        setState,
        updateBoard,
        onDragEnd,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardProvider;
