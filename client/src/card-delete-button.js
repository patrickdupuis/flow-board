import { useContext } from "react";
import styled from "styled-components";
import { BoardContext } from "./board-context";

const CardDeleteButton = ({ index, listIndex }) => {
  const { state, setState } = useContext(BoardContext);

  return (
    <DeleteButton
      onClick={() => {
        const newState = [...state];
        newState[listIndex].splice(index, 1);
        setState(newState);
      }}
    >
      x
    </DeleteButton>
  );
};

const DeleteButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

export default CardDeleteButton;
