import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;

      transition: box-shadow 0.3s ease;
  }

  body, html {
    font-family: ${p => p.theme.fonts.main};
    height: 100%;
    /* overflow-x: hidden; */
  }
`
