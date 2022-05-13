import { useAuth0 } from "@auth0/auth0-react";
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { SearchContext } from "./search-context";
import DroppableContainer from "./droppable-container";
import Card from "./card";
import styled from "styled-components";

const TaskSearch = ({ droppableId }) => {
  const { searchResults, setSearchResults } = useContext(SearchContext);
  const [state, setState] = useState({
    repositoryInput: "",
    searchBarInput: "",
  });
  const { getAccessTokenSilently } = useAuth0();

  const fetchSearchResults = async (query) => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(`/search-issues?q=${query}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const results = await response.json();
      if (results.status === 200) {
        const cards = results.results.map((el) => {
          return {
            id: uuidv4(),
            content: el.title,
            url: el.url,
          };
        });
        setSearchResults(cards);
      } else {
        setSearchResults([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const clearSearchResults = () => {
    // clear previous results
    if (searchResults.length > 0) {
      setSearchResults([]);
    }
  };

  const handleSearchInputChange = (ev) => {
    clearSearchResults();
    setState({ ...state, searchBarInput: ev.target.value });
  };

  const handleRepoInputChange = (ev) => {
    clearSearchResults();
    setState({ ...state, repositoryInput: ev.target.value });
  };

  const handleSearchButtonClicked = () => {
    let query = state.searchBarInput;
    let repo = state.repositoryInput;
    if (repo.length > 0) {
      // make array of split words
      repo = repo.split("github.com/");
      // check that the last word in repo array isn't empty string
      if (repo[repo.length - 1].length > 0) {
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
    <StyledDroppable droppableId={droppableId} isDropDisabled={true}>
      <Header>
        <Title>Search</Title>
      </Header>
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
            value="search"
          />
        </SearchContainer>
      </Form>
      {searchResults.length > 0 ? (
        searchResults.map((el, index) => (
          <Card
            key={el.id}
            card={el}
            index={index}
            listIndex={Number(droppableId)}
          />
        ))
      ) : (
        <EmptySpace />
      )}
    </StyledDroppable>
  );
};

const StyledDroppable = styled(DroppableContainer)`
  margin: 8px;
  padding: 8px;
  padding-bottom: 8rem;
  width: var(--tasklist-width);
  min-height: 450px;
  background-color: #f8f8f8;
`;

const EmptySpace = styled.div`
  width: 100%;
  height: 100px;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Title = styled.div`
  margin: 0;
  padding: 8px 0;
  font-size: 18px;
`;

const Form = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

const SearchContainer = styled.div`
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
