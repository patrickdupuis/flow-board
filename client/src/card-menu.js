import { useContext } from "react";
import { DropDownContext } from "./dropdown-context";
import { BoardContext } from "./board-context";
import CardDropdown from "./card-dropdown";
import styled from "styled-components";
import { FaEllipsisH, FaTrashAlt, FaPencilAlt } from "react-icons/fa";

const CardMenu = ({ index, listIndex }) => {
  const { ref, isOpen, handleToggleMenu, handleClickOutside } =
    useContext(DropDownContext);
  const { state, updateBoard } = useContext(BoardContext);
  const menuItems = [
    {
      name: "Edit",
      icon: <FaPencilAlt />,
    },
    {
      name: "Delete",
      icon: <FaTrashAlt />,
    },
  ];

  const handleDeleteCard = () => {
    const newState = [...state];
    newState[listIndex].splice(index, 1);
    updateBoard(newState);
  };

  return (
    <div ref={ref}>
      <MenuButton onClick={handleToggleMenu}>
        <FaEllipsisH size={18} />
      </MenuButton>
      {isOpen && (
        <CardDropdown
          menuItems={menuItems}
          handleToggleMenu={handleToggleMenu}
          handleClickOutside={handleClickOutside}
          handleDeleteCard={handleDeleteCard}
        />
      )}
    </div>
  );
};

const MenuButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export default CardMenu;