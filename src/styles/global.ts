import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #__next {
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
    --background:	#191622;
    --foreground: #E1E1E6;
    --current-line:	#44475a;
    --selection:	#41414D;
    --comment:	#483C67;
    --cyan: #78D1E1;
    --green:	#67E480;
    --orange:	#E89E64;
    --pink:	#FF79C6;
    --purple:	#988BC7;
    --red:	#E96379;
    --yellow:	#E7DE79;
  }
`;

