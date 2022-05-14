import { useState, useContext, useEffect } from "react";
import { SearchContext } from "./search-context";
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";

const TaskSearchHeader = () => {
  const { searchResults, setSearchResults } = useContext(SearchContext);
  const [visible, setVisible] = useState(false);

  const handleClickTrash = () => {
    setSearchResults([]);
  };

  useEffect(() => {
    if (searchResults.length === 0) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [searchResults, setSearchResults]);

  return (
    <Wrapper>
      <Title>Github Search</Title>
      <Trash visible={visible} onClick={handleClickTrash}>
        <FaRegTrashAlt size={20} />
      </Trash>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 18px;
`;

const Trash = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  opacity: 0.5;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

export default TaskSearchHeader;
