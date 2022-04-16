import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const UserDropdown = ({ handleShowMenu }) => {
  const { logout } = useAuth0();
  const navigate = useNavigate();

  const handleOnClick = (ev) => {
    let path = ev.target.innerHTML.toLowerCase();
    switch (path) {
      case "dashboard":
        path = "/";
        break;
      case "profile":
        path = "/profile";
        break;
      default:
        path = undefined;
    }
    handleShowMenu();
    if (path && window.location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <Wrapper>
      <List>
        <ListItem>
          <Button onClick={handleOnClick}>Dashboard</Button>
        </ListItem>
        <ListItem>
          <Button onClick={handleOnClick}>Profile</Button>
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
  top: 30px;
  right: -5px;
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
