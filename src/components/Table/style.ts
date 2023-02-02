import { device } from '@/utils/device'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 2rem 0;
  overflow-x: auto;
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
  display: table;
  width: 70rem;
  border-collapse: collapse;

  @media (${device.laptop}) {
    width: 100%;
  }
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
    display: table-cell;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    padding: 1.5rem 0 0.7rem 0;

    &:first-child {
      padding-left: 2.5rem;
    }

    &:last-child {
      padding-right: 2.5rem;
    }
  `}
`

export const LabelCategory = styled.span`
  ${({ theme }) => css`
    display: inline-flex;
    background: ${theme.colors.primaryLight2};
    border-radius: 0.5rem;
    padding: 0.7rem 1rem;
  `}
`
