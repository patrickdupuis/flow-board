import styled from "styled-components";

const AuthButton = ({ primary = false, handleClick, className, children }) => {
  return (
    <Button className={className} primary={primary} onClick={handleClick}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  background: ${(props) =>
    props.primary ? "var(--color-normal-blue-button)" : "transparent"};
  color: ${(props) =>
    props.primary ? "white" : "var(--color-normal-blue-button)"};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid var(--color-blue-button);
  border-radius: 3px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) =>
      props.primary
        ? "var(--color-darker-blue-button)"
        : "var(--color-normal-blue-button)"};
    color: white;
  }
`;

export default AuthButton;
