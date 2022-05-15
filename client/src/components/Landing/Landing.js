import styled from "styled-components";
import KanbanIcon from "../Header/KanbanIcon";
import SignupButton from "../AuthNav/SignupButton";

const Landing = () => {
  return (
    <Wrapper>
      <Container>
        <Title>FlowBoard</Title>
        <SubTitle>Effective project management made easy</SubTitle>
        <GetStartedButton primary>Get Started</GetStartedButton>
      </Container>
      <StyledKanbanIcon />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  color: #6d6d6d;
`;

const Container = styled.div`
  width: 400px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 38px;
`;

const SubTitle = styled.h3`
  font-size: 26px;
`;

const GetStartedButton = styled(SignupButton)`
  width: 90%;
  font-size: 32px;
  border-radius: 25px;
`;

const StyledKanbanIcon = styled(KanbanIcon)`
  width: 265px;
  height: auto;
  opacity: 0.25;
`;

export default Landing;
