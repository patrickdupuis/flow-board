import styled from "styled-components";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";

const Icon = ({ handleShowMenu }) => {
  return (
    <>
      <MenuButton onClick={() => handleShowMenu()}>
        <Wrapper>
          <FaUserCircle size={25} />
          <FaChevronDown />
        </Wrapper>
      </MenuButton>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.5;
  }
`;

const MenuButton = styled.button`
  border: none;
  background-color: transparent;
`;

export default Icon;
