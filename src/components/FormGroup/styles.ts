import styled, { css } from 'styled-components'

interface FormGroupStyleProps {
  password?: boolean
}

export const Label = styled.label<FormGroupStyleProps>`
  ${({ theme, password }) => css`
    display: block;
    margin-bottom: 2.4rem;
    position: relative;

    p {
      margin: 0 0 1.3rem 0;
      color: ${theme.colors.white};
      font-weight: ${theme.font.medium};

      span {
        color: ${theme.colors.secondary};
      }
    }

    svg {
      color: ${theme.colors.lightGray};
    }

    ${password &&
    css`
      div {
        position: relative;
      }

      input {
        padding: 0 4.5rem 0 2.4rem;
      }

      button {
        background: transparent;
        border: 0;
      }

      svg {
        cursor: pointer;
        position: absolute;
        right: 1.3rem;
        bottom: 1.4rem;
      }
    `}
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.error};
    margin-top: 0.5rem;
  `}
`
