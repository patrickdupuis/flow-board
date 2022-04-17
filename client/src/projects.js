import styled from "styled-components";
import Project from "./project";

const Projects = () => {
  return (
    <Wrapper>
      <Project />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

export default Projects;
