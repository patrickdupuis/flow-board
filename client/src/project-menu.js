import styled from "styled-components";
import ProjectIcon from "./project-icon";
import NewProjectButton from "./new-project-button";

const ProjectMenu = () => {
  return (
    <Wrapper>
      <ProjectIcon />
      <NewProjectButton />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default ProjectMenu;
