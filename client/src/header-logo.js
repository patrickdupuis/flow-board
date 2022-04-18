import styled from "styled-components";
import { Link } from "react-router-dom";
import KanbanIcon from "./kanban-icon";

const HeaderLogo = ({ className }) => {
  return (
    <Wrapper>
      <StyledLink reloadDocument to="/">
        <KanbanIcon className={className} />
      </StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: black;

  &:hover {
    opacity: 0.5;
  }
`;

export default HeaderLogo;
