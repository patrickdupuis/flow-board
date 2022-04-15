import UserIcon from "./user-icon";
import UserDropdown from "./user-dropdown";
import useComponentVisible from "./useComponentVisible";

const UserMenu = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const handleShowMenu = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <div ref={ref}>
      <UserIcon handleShowMenu={handleShowMenu} />
      {isComponentVisible && <UserDropdown handleShowMenu={handleShowMenu} />}
    </div>
  );
};

export default UserMenu;
