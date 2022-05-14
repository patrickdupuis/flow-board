import DropDownProvider from "./dropdown-context";
import CardMenu from "./card-menu";
import styled from "styled-components";

const CardContent = ({ card, index, listIndex }) => {
  return (
    <Wrapper>
      <Content>
        {/* Search has index -1 so we hide the menu in this case */}
        {listIndex !== -1 && (
          <Menu>
            <DropDownProvider>
              <CardMenu index={index} listIndex={listIndex} />
            </DropDownProvider>
          </Menu>
        )}
        {card.content}
      </Content>
      {card.url && (
        <IssueLink href={card.url} target="_blank">
          view on github
        </IssueLink>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  min-height: var(--card-min-height);
`;

const Menu = styled.div`
  position: relative;
  margin-left: 15px;
  padding: 0;
  float: right;
  right: 5px;
  top: -2px;
`;

const Content = styled.div`
  font-size: 18px;
  overflow-wrap: break-word;
`;

const IssueLink = styled.a`
  margin-top: 8px;
  font-size: 14px;
  color: grey;
`;

export default CardContent;
