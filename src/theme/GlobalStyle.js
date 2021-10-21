import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;         /* Opera/IE 8+ */
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
  background-color: var(--color-primary-100);
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


    --color-primary-50: #212121;
    --color-primary-100: #2c2c2c;
    --color-primary-200: #424242;
    --color-primary-300: #616161;
    --color-primary-400: #757575;
    --color-primary-500: #9e9e9e;
    --color-primary-600: #bdbdbd;
    --color-primary-700: #e0e0e0;
    --color-primary-800: #eeeeee;
    --color-primary-900: #f5f5f5;
}
`

export default GlobalStyle
