import styled from "styled-components";
import SourceLink from "./source-link";

const Footer = () => {
  return (
    <Wrapper>
      <SourceLink />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 20px;
  min-height: var(--footer-height);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #f8f9fa;
  box-shadow: 0 -1px 2px 0 #dfe3ec;
`;

export default Footer;