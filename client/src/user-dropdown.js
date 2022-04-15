import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const UserDropdown = () => {
  const { logout } = useAuth0();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <List>
        <ListItem>
          <Button onClick={() => navigate("/")}>Profile</Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => logout({ returnTo: window.location.origin })}>
            Log out
          </Button>
        </ListItem>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 48px;
  right: 15px;
  width: 10em;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
`;

const ListItem = styled.li`
  list-style: none;

  &:hover {
    background-color: #e5e5e5;
  }
`;

const Button = styled.button`
  padding: 1rem 1.5rem;
  border: none;
  background-color: transparent;
  font-size: 1rem;
`;

export default UserDropdown;
