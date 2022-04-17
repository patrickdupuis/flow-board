import { useState } from "react";
import { DragDropContext, Droppable } from "@react-forked/dnd";
import TaskList from "./task-list";

// helper function for creating fake tasks
const createTasks = (num = 5) => {
  return Array.from({ length: num }, (v, k) => k).map((k) => {
    const custom = {
      id: `id-${k}`,
      content: `Quote ${k}`,
    };

    return custom;
  });
};

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const TaskBoard = () => {
  const [state, setState] = useState({ cards: createTasks(10) });

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const cards = reorder(
      state.cards,
      result.source.index,
      result.destination.index
    );

    setState({ cards });
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <TaskList cards={state.cards} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskBoard;
