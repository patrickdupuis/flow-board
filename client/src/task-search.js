import { useState } from "react";
import TaskList from "./task-list";
import Card from "./card";
import styled from "styled-components";

const TaskSearch = ({ droppableId }) => {
  const [state, setState] = useState({
    repositoryInput: "",
    searchBarInput: "",
    searchResults: [],
  });

  const fetchSearchResults = async (query) => {
    try {
      const response = await fetch(`/search-issues-and-pulls?q=${query}`);
      const results = await response.json();
      if (results.status === 200) {
        // don't clear input texts for user convenience when searching again
        setState({ ...state, searchResults: results.results });
      } else {
        setState({ ...state, searchResults: [] });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearchInputChange = (ev) => {
    setState({ ...state, searchBarInput: ev.target.value });
  };

  const handleRepoInputChange = (ev) => {
    setState({ ...state, repositoryInput: ev.target.value });
  };

  const handleSearchButtonClicked = () => {
    let query = state.searchBarInput;
    let repo = state.repositoryInput;
    if (repo.length > 0) {
      // make array of split words
      repo = repo.split("github.com/");
      // check that the last word in repo array isn't empty string
      if (repo[repo.length - 1].length > 0 && query.length > 0) {
        // get the last element from repo array
        repo = repo[repo.length - 1];
        query = query.replaceAll(" ", "+");
        query = query + `+repo:${repo}`;
        // force search for issues only
        query = query + "+is:issue";
        fetchSearchResults(encodeURIComponent(query));
      }
    }
  };

  return (
    <Wrapper>
      <TaskList title="search" droppableId={droppableId}>
        <Form>
          <FormInput
            type="text"
            placeholder="github public repo url"
            onChange={handleRepoInputChange}
            value={state.repositoryInput}
          />
          <SearchContainer>
            <SearchBar
              type="text"
              placeholder="search issues"
              onChange={handleSearchInputChange}
              value={state.searchBarInput}
            />
            <SearchButton
              type="button"
              onClick={handleSearchButtonClicked}
              // onClick={() => console.log("foo")}
              value="search"
            />
          </SearchContainer>
        </Form>
        {state.searchResults.length > 0 ? (
          state.searchResults.map((el, index) => (
            <Card
              key={index}
              card={{ id: el.url, content: el.title }}
              index={index}
            />
          ))
        ) : (
          <div></div>
        )}
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
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
`;

const FormInput = styled.input`
  padding: 8px;
  font-size: 18px;
`;

const SearchBar = styled(FormInput)`
  min-width: 0;
  flex: 3 1 0;
`;

const SearchButton = styled.input`
  min-width: 0;
  flex: 1 1 0;
  height: 41px;
  padding: 8px;
  border: 1px solid lightgrey;
  font-size: 14px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: lightgrey;
  }
`;

export default TaskSearch;
