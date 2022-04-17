import styled from "styled-components";
import GithubIcon from "./github-icon";

const SourceLink = () => {
  return (
    <Anchor href="#">
      <Text>view source code</Text>
      <GithubIcon size="1.5em" />
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

  &:hover {
    opacity: 0.5;
  }
`;

// move text slightly higher for better visual alignment
const Text = styled.span`
  padding-bottom: 2px;
`;

export default SourceLink;
