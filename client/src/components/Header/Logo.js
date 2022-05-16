import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import KanbanIcon from "./KanbanIcon";

const Logo = ({ className }) => {
  const url = useLocation();
  const [isLanding, setIsLanding] = useState(true);

  useEffect(() => {
    setIsLanding(url.pathname === "/");
  }, [url]);

  return (
    <Wrapper>
      <StyledLink reloadDocument to="/" disabled={isLanding}>
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
    opacity: ${(props) => (props.disabled ? 1 : 0.5)};
  }
`;

const StyledIcon = styled(KanbanIcon)`
  width: 42px;
  height: auto;
`;

export default Logo;
