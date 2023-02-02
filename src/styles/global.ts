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
      font-weight: ${theme.font.normal};
      overflow-x: hidden;
      background-color: ${theme.colors.primary};
    }

    .input-password {
      width: 100%;
      height: 5rem;
      border: 0.1rem solid rgba(255, 255, 255, 0.1);
      background: transparent;
      border-radius: 1.6rem;
      padding: 0 2.4rem;
      color: ${theme.colors.white};
      font-size: 1.4rem;
      outline: ${theme.colors.secondary};
      transition: all 0.2s ease-in;

      &:focus {
        border: 0.1rem solid ${theme.colors.secondary};
      }

      &::placeholder {
        color: ${theme.colors.lightGray};
      }
    }

    .Button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.4rem;
      padding: 0 1.5rem;
      font-size: 1.5rem;
      line-height: 1;
      font-weight: 500;
      height: 3.5rem;
      cursor: pointer;
    }
  `}
`

export default GlobalStyles
