import styled, { css } from 'styled-components'

export const Header = styled.div`
  display: flex;
`

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

export const AddButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 2rem;
    right: 2rem;
    border: 0;
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border-radius: 0.6rem;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in;
    z-index: 3;

    &:hover {
      background: ${theme.colors.secondaryHover};
    }
  `}
`
