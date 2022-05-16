import styled from "styled-components";
import SignupButton from "../AuthNav/SignupButton";
import ImgSrc from "../../assets/landing.png";

const Landing = () => {
  return (
    <Wrapper>
      <Content>
        <Container>
          <Title>FlowBoard</Title>
          <Lorem>
            Collaborate, manage projects, and reach new heights. From the home
            office and beyond, the way you work is unique—accomplish your goals
            with FlowBoard.
          </Lorem>
          <GetStartedButton primary>Get Started</GetStartedButton>
        </Container>
        <ImageGroup>
          <Image
            src={ImgSrc}
            atl="various people working together next to a circular arrow"
          />
          <Acknowledgment>
            <Anchor href="http://www.freepik.com">
              Designed by katemangostar / Freepik
            </Anchor>
          </Acknowledgment>
        </ImageGroup>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
`;

const Content = styled.main`
  margin-top: calc(2 * var(--header-height));
  display: flex;
  justify-content: center;
  min-width: 1400px;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 500px;
  text-align: left;
  font-family: serif;
  color: #727e8c;
`;

const Title = styled.h3`
  font-size: 38px;
  color: #5d6773;
`;

const Lorem = styled.article`
  font-size: 1.8em;
`;

const GetStartedButton = styled(SignupButton)`
  margin-top: var(--header-height);
  padding: 20px 60px;
  border-radius: 40px;
  font-size: 1.5em;
  background-color: var(--color-normal-blue-button);
  transform: scale(1);
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background-color: var(--color-lighter-blue-button);
  }
`;

const ImageGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  height: auto;
  width: 700px;
`;

const Acknowledgment = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Anchor = styled.a`
  font-size: 12px;
  color: black;
  text-align: right;
  text-decoration: none;
  opacity: 0.5;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

export default Landing;
