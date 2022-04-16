import { IconContext } from "react-icons";
import { FiTrello } from "react-icons/fi";

const KanbanIcon = ({ className }) => {
  return (
    <IconContext.Provider value={{ className: className }}>
      <FiTrello />
    </IconContext.Provider>
  );
};

export default KanbanIcon;
