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
  `}
`

export const WrapperCharts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
`

export const WrapperLineChart = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primaryLight};
    border-radius: 2rem;
    width: 100%;
    padding: 2rem;
  `}
`
