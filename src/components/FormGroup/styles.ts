import styled, { css } from 'styled-components'

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;
    margin-bottom: 2.4rem;

    p {
      margin: 0 0 1.3rem 0;
      color: ${theme.colors.white};
      font-weight: ${theme.font.medium};

      span {
        color: ${theme.colors.secondary};
      }
    }
  `}
`
