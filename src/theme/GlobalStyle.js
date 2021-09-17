import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&display=swap");
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
  --color-black-light: rgba(18, 18, 15, 0.3);
  --color-black-medium: rgba(18, 18, 15, 0.3);
  --color-neutral: #f8f8f9;
  --color-neutral-400: #f2f2f2;
}
`


export default GlobalStyle