import React from "react";
import DroppableContainer from "./droppable-container";
import TaskListHeader from "./task-list-header";

// Memoized version is apparently better for performance
const TaskList = React.memo(function TaskList({
  title,
  droppableId,
  children,
}) {
  return (
    <DroppableContainer droppableId={droppableId}>
      <TaskListHeader listIndex={Number(droppableId)} title={title} />
      {children}
    </DroppableContainer>
  );
});

export default TaskList;
