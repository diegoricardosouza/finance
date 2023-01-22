import styled, { css } from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => css`
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
  `}
`
