import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      overflow-x: hidden;
    }

    body {
      font-family: ${theme.font.family.dmsans};
      font-size: 1.4rem;
      overflow-x: hidden;
    }
  `}
`

export default GlobalStyles
