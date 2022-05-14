import styled from "styled-components";
import { Link } from "react-router-dom";
import KanbanIcon from "./kanban-icon";

const HeaderLogo = ({ className }) => {
  return (
    <Wrapper>
      <StyledLink reloadDocument to="/">
        <StyledIcon className={className} />
      </StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-right: 20px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.5;
  }
`;

const StyledIcon = styled(KanbanIcon)`
  width: 42px;
  height: auto;
`;

export default HeaderLogo;
