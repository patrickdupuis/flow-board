import { IconContext } from "react-icons";
import { FiTrello } from "react-icons/fi";

const Logo = ({ size }) => {
  return (
    <IconContext.Provider value={{ size: size }}>
      <FiTrello />
    </IconContext.Provider>
  );
};

export default Logo;
