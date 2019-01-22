import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
  }
  #root {
    flex: 1;
    display: flex;
    justyfy-content: center;
    align-itmes: center;
  }
`
