import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::before,
*::after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: StratosSkyeng, sans-serif;
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
    font-family: StratosSkyeng;
    src:
      local('StratosSkyeng'),
      local('StratosSkyeng'),
      url('/fonts/stratosskyengweb-regular.woff2') format('woff2'),
      url('/fonts/stratosskyengweb-regular.woff') format('woff');
    // src: url("/fonts/stratosskyengweb-regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: StratosSkyeng, sans-serif;
    font-family: "StratosSkyeng", sans-serif;
    color: #ffffff;
  }

  `
  export default GlobalStyle;