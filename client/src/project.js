import BoardProvider from "./board-context";
import TaskBoard from "./task-board";

const Project = () => {
  return (
    <BoardProvider>
      <h3>My Project Board</h3>
      <TaskBoard />
    </BoardProvider>
  );
};

export default Project;
