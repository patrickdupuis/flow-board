import { useEffect, useState } from "react";
import DropDownProvider from "./dropdown-context";
import CardMenu from "./card-menu";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const CardContent = ({ card, index, listIndex }) => {
  const [isGithub, setIsGithub] = useState(false);
  const [repoInfo, setRepoInfo] = useState({
    name: "",
    number: "",
  });

  useEffect(() => {
    if (card.url) {
      const split = card.url.split("/").reverse();
      setRepoInfo({
        ...repoInfo,
        url: card.url,
        name: split[2],
        number: `#${split[0]}`,
      });
      setIsGithub(true);
    }
  }, [card, isGithub, repoInfo]);

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
      {isGithub && (
        <LinkWrapper>
          <IssueLink href={repoInfo.url} target="_blank">
            <LinkGroup>
              <FaGithub />
              <span>{repoInfo.name}</span>
              <span>{repoInfo.number}</span>
            </LinkGroup>
          </IssueLink>
        </LinkWrapper>
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

const LinkWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
  font-size: 15px;
`;

const IssueLink = styled.a`
  color: grey;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export default CardContent;
