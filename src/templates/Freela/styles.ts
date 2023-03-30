import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.primaryLight};
    border-radius: 2rem;
    margin-top: 1.7rem;
    position: relative;
    overflow: hidden;
  `}
`
