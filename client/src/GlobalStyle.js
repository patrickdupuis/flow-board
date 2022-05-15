// use styled.createGlobalStyle in order for
// Prettier to format things properly
import * as styled from "styled-components";

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --header-height: 60px;
    --footer-height: 40px;
    --card-min-height: 80px;
    --tasklist-width: 320px;
    --color-grey-background: #f3f3f3;
    --input-placeholder-color: #aaaaaa;
    --drag-source-background: #ffeeee;
    --drag-destination-background: #effff1;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

export default GlobalStyle;
