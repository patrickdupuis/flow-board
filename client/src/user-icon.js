import styled from "styled-components";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";

const UserIcon = () => {
  return (
    <>
      <Wrapper>
        <FaUserCircle size={25} />
        <FaChevronDown />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export default UserIcon;
