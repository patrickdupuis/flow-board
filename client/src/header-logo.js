import styled from "styled-components";
import { Link } from "react-router-dom";
import KanbanIcon from "./kanban-icon";

const HeaderLogo = ({ className }) => {
  return (
    <StyledLink reloadDocument to="/" end>
      <KanbanIcon className={className} />
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  color: black;

  &:hover {
    opacity: 0.5;
  }
`;

export default HeaderLogo;
