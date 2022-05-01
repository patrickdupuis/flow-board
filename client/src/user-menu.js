import { useContext } from "react";
import { DropDownContext } from "./dropdown-context";
import UserIcon from "./user-icon";
import UserDropdown from "./user-dropdown";

const UserMenu = () => {
  const { ref, isOpen, handleToggleMenu, handleClickOutside } =
    useContext(DropDownContext);

  return (
    <div ref={ref}>
      <UserIcon handleShowMenu={handleToggleMenu} />
      {isOpen && (
        <UserDropdown
          handleShowMenu={handleToggleMenu}
          handleClickOutside={handleClickOutside}
        />
      )}
    </div>
  );
};

export default UserMenu;
