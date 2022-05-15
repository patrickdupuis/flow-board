import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: var(--header-height);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Spinner = styled.div`
  border: 5px solid #e5e5e5;
  border-top: 5px solid grey;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1.25s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
