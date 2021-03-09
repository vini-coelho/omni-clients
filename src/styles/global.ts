import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: Montserrat, sans-serif;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    background: var(--background);
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  :root {
    --background:#282a36;
    --current-line: #44475a;
    --foreground:#f8f8f2;
    --comment:#6272a4;
    --cyan:#8be9fd;
    --green:#50fa7b;
    --orange:#ffb86c;
    --pink:#ff79c6;
    --purple:#bd93f9;
    --red:#ff5555;
    --yellow:#f1fa8c;
  }
`;
