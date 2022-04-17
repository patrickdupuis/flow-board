import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiFolder } from "react-icons/fi";

const ProjectIcon = () => {
  const navigate = useNavigate();

  const handleOnClick = (ev) => {
    navigate("/projects");
  };

  return (
    <>
      <MenuButton onClick={handleOnClick}>
        <Wrapper>
          <FiFolder size={20} />
          <div>Projects</div>
        </Wrapper>
      </MenuButton>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`;

const MenuButton = styled.button`
  padding: 0.5em;
  width: 10em;
  border: 1px solid black;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export default ProjectIcon;
