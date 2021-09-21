import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  font-family: 'Montserrat', sans-serif;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  background-color: #5c5c5c;
    font-family: 'Montserrat', sans-serif;
}

:root {
  --spacing-small: 1px;
  --spacing-medium: 1.3px;
  --color-white: white;
  --color-primary:rgba(51, 51, 51, 1);
  --color-primary-light: rgba(51, 51, 51, 0.8);
  --color-secondary: #5c5c5c;
  --color-black-light: rgba(18, 18, 15, 0.3);
  --color-black-medium: rgba(18, 18, 15, 0.3);
  --color-black-hard: rgba(18, 18, 15, 0.6);
  --color-neutral: #f8f8f9;
  --color-neutral-400: #f2f2f2;
}
`


export default GlobalStyle