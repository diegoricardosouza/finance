import { device } from '@/utils/device'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 1.7rem;
  flex-wrap: wrap;

  @media (${device.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${device.laptop}) {
    display: flex;
    flex-wrap: nowrap;
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
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
`

export const WrapperLineChart = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primaryLight};
    border-radius: 2rem;
    width: 100%;
    padding: 2rem;
    overflow-x: scroll;
    position: relative;
    min-height: 49rem;

    @media (${device.tablet}) {
      overflow-x: auto;
    }
  `}
`

export const LoadingWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
