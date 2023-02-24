import { css } from 'styled-components';

export const ResetCSS = css`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a,
button,
input {
  transition: .3s ease-in-out;
}

a {
  text-decoration: 'none';
}

button {
  cursor: pointer;
}
`;