import { IconContext } from "react-icons";
import { GiMountaintop } from "react-icons/gi";

const Logo = ({ size }) => {
  return (
    <IconContext.Provider value={{ size: size }}>
      <GiMountaintop />
    </IconContext.Provider>
  );
};

export default Logo;
