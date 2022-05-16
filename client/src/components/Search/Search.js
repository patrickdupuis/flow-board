import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect, useContext, createRef } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { SearchContext } from "../SearchProvider";
import DroppableContainer from "../DroppableContainer";
import SearchHeader from "./SearchHeader";
import SearchResults from "./SearchResults";
import Loading from "../Loading";
import { FaSearch } from "react-icons/fa";

const Search = ({ droppableId }) => {
  const ref = createRef();
  const { getAccessTokenSilently } = useAuth0();
  const { setSearchResults } = useContext(SearchContext);
  const [disabled, setDisabled] = useState(true);
  const [status, setStatus] = useState({
    isSearching: false,
    message: "",
  });
  const [formData, setFormData] = useState({
    repositoryInput: "",
    searchBarInput: "is:open",
  });

  const fetchSearchResults = async (query) => {
    let message = "An unknown error occured";
    setStatus({ ...status, isSearching: true });
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
        if (cards.length > 0) {
          message = "";
        } else {
          message = "No Results Found";
        }
      } else {
        setSearchResults([]);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setStatus({ ...status, isSearching: false, message });
    }
  };

  const handleSearchButtonClicked = () => {
    let query = formData.searchBarInput;
    let repo = formData.repositoryInput;
    query = query.replaceAll(" ", "+");
    query = query + `+repo:${repo}`;
    query = encodeURIComponent(query);
    fetchSearchResults(query);
  };

  const handleSearchInputChange = (ev) => {
    setStatus({ ...status, message: "" });
    setFormData({ ...formData, searchBarInput: ev.target.value });
  };

  const handleRepoInputChange = (ev) => {
    setStatus({ ...status, message: "" });
    setFormData({ ...formData, repositoryInput: ev.target.value });
  };

  const handleSearchKeyDown = (ev) => {
    // if Enter key pressed
    if (!disabled && ev.keyCode === 13) {
      handleSearchButtonClicked();
      // send focus to the search button
      ref.current.focus();
    }
  };

  useEffect(() => {
    Object.values(formData).includes("") || status.isSearching
      ? setDisabled(true)
      : setDisabled(false);
  }, [formData, status, setDisabled]);

  return (
    <StyledDroppable droppableId={droppableId} isDropDisabled={true}>
      <SearchHeader />
      <Form>
        <FormInput
          type="text"
          placeholder="organization/repository"
          onChange={handleRepoInputChange}
          onKeyDown={handleSearchKeyDown}
          value={formData.repositoryInput}
        />
        <FormGroup>
          <SearchBar
            type="text"
            onChange={handleSearchInputChange}
            onKeyDown={handleSearchKeyDown}
            value={formData.searchBarInput}
          />
          <SearchButton
            ref={ref}
            type="button"
            onClick={handleSearchButtonClicked}
            disabled={disabled}
          >
            <FaSearch />
          </SearchButton>
        </FormGroup>
      </Form>
      {status.isSearching ? (
        <Loading />
      ) : (
        <SearchResults message={status.message} />
      )}
    </StyledDroppable>
  );
};

const StyledDroppable = styled(DroppableContainer)`
  margin-left: 0;
  // fix bg color to avoid color change when dragging
  background-color: var(--drag-default-background);
`;

const Form = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

const FormGroup = styled.div`
  display: flex;
`;

const FormInput = styled.input`
  padding: 8px;
  font-size: 18px;
  border: 1px solid lightgrey;

  &::placeholder {
    color: var(--input-placeholder-color);
  }

  &:focus {
    outline: grey solid 1px;
  }
`;

const SearchBar = styled(FormInput)`
  flex: 5;
`;

const SearchButton = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: lightgrey;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.2s ease;

  &:hover:enabled {
    opacity: 1;
    background-color: lightgrey;
  }
`;

export default Search;
