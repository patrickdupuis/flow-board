import styled from "styled-components";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";

const UserIcon = ({ handleShowMenu }) => {
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
`;

const MenuButton = styled.button`
  border: none;
  background-color: transparent;
`;

export default UserIcon;
