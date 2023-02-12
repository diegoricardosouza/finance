import { device } from '@/utils/device'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.7rem;

  @media (${device.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${device.laptopL}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const WrapperTable = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.primaryLight};
    border-radius: 2rem;
    margin-top: 1.7rem;
    position: relative;
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

    &:hover {
      background: ${theme.colors.secondaryHover};
    }
  `}
`
