import { useState } from "react";
import TaskList from "./task-list";
import Card from "./card";
import styled from "styled-components";

const TaskSearch = ({ droppableId, children }) => {
  const [state, setState] = useState({
    searchBarInput: "",
    searchResults: [],
  });

  const fetchSearchResults = async (query) => {
    try {
      const response = await fetch(`/search-issues-and-pulls?q=${query}`);
      const { results } = await response.json();
      setState({ ...state, searchResults: results });
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (ev) => {
    setState({ ...state, searchBarInput: ev.target.value });
  };

  const handleSearchButtonClicked = (ev) => {
    ev.preventDefault();
    if (state.searchBarInput.length > 0) {
      const query = state.searchBarInput.replaceAll(" ", "+");
      // force search for issues only
      fetchSearchResults(
        encodeURIComponent(query + "+is:issue+repo:octocat/Spoon-knife")
      );
    }
  };

  return (
    <Wrapper>
      <TaskList title="search" droppableId={droppableId}>
        <Form>
          <SearchBar
            type="text"
            placeholder="search for issues"
            onChange={handleInputChange}
          />
          <SearchButton
            type="button"
            onClick={handleSearchButtonClicked}
            value="search"
          />
        </Form>
        <Card index={0} card={{ id: "foobar-0", content: "foobar" }} />
        {children}
      </TaskList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Form = styled.form`
  margin-bottom: 20px;
  display: flex;
  width: 100%;
  gap: 5px;
`;

const SearchBar = styled.input`
  padding: 8px;
  font-size: 18px;
  width: 100%;
`;

const SearchButton = styled.input`
  padding: 8px;
  border: none;
  font-size: 14px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: lightgrey;
  }
`;

export default TaskSearch;
