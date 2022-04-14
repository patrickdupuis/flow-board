import { IconContext } from "react-icons";
import { VscGithub } from "react-icons/vsc";

const GithubIcon = ({ size }) => {
  return (
    <IconContext.Provider
      value={{ size: size, style: { verticalAlign: "baseline" } }}
    >
      <VscGithub />
    </IconContext.Provider>
  );
};

export default GithubIcon;
