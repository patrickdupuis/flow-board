import { useEffect } from "react";
import styled from "styled-components";

const CardDropdown = ({
  menuItems,
  handleToggleMenu,
  handleClickOutside,
  handleDeleteCard,
}) => {
  const handleMenuSelect = (item) => {
    handleToggleMenu();
    switch (item) {
      case "Delete":
        handleDeleteCard();
        break;
      default:
        console.log(item);
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <Wrapper>
      <List>
        {menuItems.map((el, index) => {
          return (
            <ListItem key={index}>
              <Button name={el.name} onClick={() => handleMenuSelect(el.name)}>
                <Item>
                  {el.icon}
                  {el.name}
                </Item>
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 20px;
  right: -20px;
  width: auto;
  box-shadow: -3px 2px 8px #e5e5e5;
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

const Item = styled.div`
  display: flex;
  gap: 8px;
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

export default CardDropdown;
