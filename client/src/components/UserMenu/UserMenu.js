import { useContext } from "react";
import { DropDownContext } from "../DropDownProvider";
import Icon from "./Icon";
import Dropdown from "./Dropdown";

const UserMenu = () => {
  const { ref, isOpen, handleToggleMenu, handleClickOutside } =
    useContext(DropDownContext);

  return (
    <div ref={ref}>
      <Icon handleShowMenu={handleToggleMenu} />
      {isOpen && (
        <Dropdown
          handleShowMenu={handleToggleMenu}
          handleClickOutside={handleClickOutside}
        />
      )}
    </div>
  );
};

export default UserMenu;
