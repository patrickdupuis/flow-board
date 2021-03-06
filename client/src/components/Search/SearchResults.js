import { useContext } from "react";
import styled from "styled-components";
import { SearchContext } from "../SearchProvider";
import Card from "../Card";

const SearchResults = ({ message }) => {
  const { searchResults } = useContext(SearchContext);

  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((el, index) => (
          <Card key={el.id} card={el} index={index} listIndex={-1} />
        ))
      ) : (
        <Message>{message}</Message>
      )}
    </>
  );
};

const Message = styled.div`
  margin-top: var(--header-height);
  display: flex;
  justify-content: center;
`;

export default SearchResults;
