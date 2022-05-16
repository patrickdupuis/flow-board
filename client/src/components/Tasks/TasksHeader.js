import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { BoardContext } from "../BoardProvider";

const TasksHeader = ({ listIndex, title }) => {
  const { state, updateBoard } = useContext(BoardContext);
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleAddNewCard = () => {
    const newCard = { id: uuidv4(), content: inputText };
    const newState = [...state];
    newState[listIndex].unshift(newCard);
    updateBoard(newState);
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
        <AddButton onClick={handleToggleAdd}>+</AddButton>
      </TitleContainer>
      {isOpen && (
        <>
          <TextArea
            placeholder="what's your task?"
            onChange={handleInputChange}
            value={inputText}
          />
          <ButtonGroup>
            <Button type="button" value="Cancel" onClick={handleToggleAdd} />
            <Button type="button" value="Add" onClick={handleAddNewCard} />
          </ButtonGroup>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 40px;
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
  margin: 0;
  padding: 0;
  border: none;
  font-size: 26px;
  background-color: transparent;
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

const ButtonGroup = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.input`
  margin-left: 8px;
  height: 32px;
  width: 80px;
  border: 1px solid lightgrey;
  text-align: center;
  font-size: 14px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: lightgrey;
  }
`;

export default TasksHeader;
