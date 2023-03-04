import { device } from '@/utils/device'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primaryLight};
    border-radius: 2rem;
    width: 100%;
    min-height: 9.7rem;
    padding: 1.4rem 1.3rem;

    @media (${device.laptop}) {
      width: auto;
    }
  `}
`

export const WrapperTitle = styled.span`
  ${({ theme }) => css`
    display: block;
    text-align: center;
    color: ${theme.colors.white};
    margin-bottom: 1rem;
  `}
`

export const WrapperContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  justify-content: center;
`

export const FilterButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.secondary};
    border-radius: 0.6rem;
    height: 4rem;
    cursor: pointer;
    color: ${theme.colors.white};
    align-items: center;
    justify-content: center;
    border: 0;
    width: 4rem;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${theme.colors.secondaryHover};
    }
  `}
`
