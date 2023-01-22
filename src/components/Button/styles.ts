import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 5.4rem;
    border: 0;
    border-radius: 1.6rem;
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    outline: ${theme.colors.secondary};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${theme.colors.secondaryHover};
    }

    &[disabled] {
      background: #888 !important;
      cursor: not-allowed !important;
    }
  `}
`
