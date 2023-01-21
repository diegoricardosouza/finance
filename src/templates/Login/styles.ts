import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
  `}
`
