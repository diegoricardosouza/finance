import { device } from '@/utils/device'
import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.7rem;

  @media (${device.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${device.laptop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (${device.laptopL}) {
    grid-template-columns: repeat(4, 1fr);
  }
`
