import styled, { css } from 'styled-components'

export const PaginationWrapper = styled.div`
  width: 100%;
  border-radius: 2rem;
  margin-top: 1.7rem;
  position: relative;
  overflow: hidden;
`

export const PaginationContainer = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0;
  list-style: none;
  gap: 1rem;
  padding: 1.5rem 0;
  flex-wrap: wrap;
`

export const ItemPagination = styled.li`
  ${({ theme }) => css`
    a {
      display: flex;
      width: 4rem;
      height: 4rem;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.white};
      cursor: pointer;
      background: ${theme.colors.primaryLight};
      border-radius: 0.4rem;
      transition: all 300ms ease-in;

      &:hover {
        background: ${theme.colors.secondary};
      }
    }

    span {
      display: flex;
      width: 4rem;
      height: 4rem;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.white};
      background: ${theme.colors.secondary};
      border-radius: 0.4rem;
    }
  `}
`

export const ItemPaginationDots = styled.li`
  ${({ theme }) => css`
    display: flex;
    width: 2rem;
    height: 4rem;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    border-radius: 0.4rem;
    letter-spacing: 0.2rem;
  `}
`
