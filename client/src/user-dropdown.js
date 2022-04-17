import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const UserDropdown = ({ handleShowMenu }) => {
  const { logout } = useAuth0();
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Profile",
      path: "/profile",
    },
    {
      name: "Foobar",
      path: "/foobar",
    },
  ];

  const handleMenuSelect = (path) => {
    handleShowMenu();
    if (window.location.pathname !== path) {
      navigate(path);
    } else {
      // equivalent to location.reload()
      navigate(0);
    }
  };

  return (
    <Wrapper>
      <List>
        {menuItems.map((el, index) => {
          return (
            <ListItem key={index}>
              <Button onClick={() => handleMenuSelect(el.path)}>
                {el.name}
              </Button>
            </ListItem>
          );
        })}
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
  border-bottom: 1px solid #e5e5e5;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background-color: #e5e5e5;
  }
`;

const Button = styled.button`
  padding: 1rem 1.5rem;
  width: 100%;
  text-align: left;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  cursor: pointer;
`;

export default UserDropdown;
