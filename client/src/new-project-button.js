import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

const NewProjectButton = () => {
  return (
    <Wrapper>
      <NewButton>
        <FiPlus size={25} />
      </NewButton>
      <div>new project</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NewButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;

  & + div {
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
  }

  &:hover {
    opacity: 0.5;
  }

  &:hover + div {
    opacity: 0.5;
  }
`;

export default NewProjectButton;
