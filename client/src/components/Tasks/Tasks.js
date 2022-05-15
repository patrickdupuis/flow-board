import React from "react";
import DroppableContainer from "../DroppableContainer";
import TasksHeader from "./TasksHeader";

// Memoized version is apparently better for performance
const Tasks = React.memo(function Tasks({ title, droppableId, children }) {
  return (
    <DroppableContainer droppableId={droppableId}>
      <TasksHeader listIndex={Number(droppableId)} title={title} />
      {children}
    </DroppableContainer>
  );
});

export default Tasks;
