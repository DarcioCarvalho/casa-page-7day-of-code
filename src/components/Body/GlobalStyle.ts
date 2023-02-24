import { createGlobalStyle } from 'styled-components';
import { ResetCSS } from './ResetCSS';

export const GlobalStyle = createGlobalStyle`
${ResetCSS}

body {
  font-family: 'Montserrat', sans-serif;
}

main {
  max-width: 1203px;
  display: flex;
  flex-direction: column;
  margin-inline: auto;
}

@media (min-width: 920px) {
  body {
    background-color: white;
    background-image: url('/assets/app-bg.png');
    background-repeat: no-repeat, repeat-x;
    background-position: 43.5rem top; /* 60.1rem top ; */
  }
}

`;