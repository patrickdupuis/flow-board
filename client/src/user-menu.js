import { useState, useRef } from "react";
import UserIcon from "./user-icon";
import UserDropdown from "./user-dropdown";
// import useComponentVisible from "./useComponentVisible";

const UserMenu = () => {
  // const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef(null);

  const handleShowMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (ev) => {
    if (ref.current && !ref.current.contains(ev.target)) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div ref={ref}>
      <UserIcon handleShowMenu={handleShowMenu} />
      {isMenuOpen && (
        <UserDropdown
          handleShowMenu={handleShowMenu}
          handleClickOutside={handleClickOutside}
        />
      )}
    </div>
  );
};

export default UserMenu;
