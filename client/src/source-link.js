import styled from "styled-components";
import GithubIcon from "./github-icon";

const SourceLink = () => {
  return (
    <Anchor href="#">
      <span>view source code</span>
      <GithubIcon size="1.5rem" />
    </Anchor>
  );
};

const Anchor = styled.a`
  margin-left: auto;
  gap: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
`;

export default SourceLink;
