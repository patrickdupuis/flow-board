import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { BoardContext } from "./board-context";

const TaskListHeader = ({ listIndex, title, canAdd }) => {
  const { state, setState } = useContext(BoardContext);
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleAddNewCard = () => {
    const newCard = { id: uuidv4(), content: inputText };
    const newState = [...state];
    newState[listIndex].unshift(newCard);
    setState(newState);
    handleToggleAdd();
  };

  const handleToggleAdd = () => {
    if (isOpen) {
      setInputText("");
    }
    setIsOpen(!isOpen);
  };

  const handleInputChange = (ev) => {
    setInputText(ev.target.value);
  };

  return (
    <Wrapper>
      <TitleContainer>
        <Title>{title}</Title>
        {canAdd && <AddButton onClick={handleToggleAdd}>+</AddButton>}
      </TitleContainer>
      {isOpen && (
        <>
          <TextArea
            placeholder="what to do?"
            onChange={handleInputChange}
            value={inputText}
          />
          <Button type="button" value="Cancel" onClick={handleToggleAdd} />
          <Button type="button" value="Add" onClick={handleAddNewCard} />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Title = styled.div`
  margin: 0;
  padding: 8px 0;
  font-size: 18px;
`;

const AddButton = styled.button`
  border: none;
  font-size: 26px;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const TextArea = styled.textarea`
  padding: 8px;
  font-size: 18px;
  height: 100px;
  resize: none;
`;

const Button = styled.input`
  min-width: 0;
  flex: 1 1 0;
  height: 41px;
  padding: 8px;
  border: 1px solid lightgrey;
  text-align: right;
  font-size: 14px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: lightgrey;
  }
`;

export default TaskListHeader;
