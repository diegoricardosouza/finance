import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 2rem 0;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    margin: 0 0 2.5rem 0;
    color: ${theme.colors.white};
    font-size: 2.4rem;
    font-weight: ${theme.font.bold};
    padding: 0 2.5rem;
  `}
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const Thead = styled.thead``

export const TrHeader = styled.tr``

export const Th = styled.th`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    font-weight: ${theme.font.medium};
    text-align: left;
    display: table-cell;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
    padding-bottom: 0.8rem;

    span {
      margin-left: 0.7rem;

      svg {
        margin-bottom: -0.6rem;
      }
    }

    &:first-child {
      padding-left: 2.5rem;
    }

    &:last-child {
      padding-right: 2.5rem;
      width: 12rem;
    }
  `}
`

export const Tbody = styled.tbody``

export const TrBody = styled.tr``

export const TdBody = styled.td`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    padding: 1.5rem 0 0.7rem 0;

    &:first-child {
      padding-left: 2.5rem;
    }
  `}
`
