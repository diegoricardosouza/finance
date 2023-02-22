import { device } from '@/utils/device'
import styled, { css } from 'styled-components'

export const Container = styled.main``

export const Content = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    overflow: auto;
    overflow-x: hidden;
    padding: 12rem 2rem 2rem 2rem;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;

    /* width */
    ::-webkit-scrollbar {
      width: 0.6rem;
      transition: all 0.2s ease-in;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.4);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.secondary};
      border-radius: 10rem;
      transition: all 0.2s ease-in;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.secondaryHover};
    }

    @media ${device.laptop} {
      width: calc(100% - 29rem);
      padding-top: 13.5rem;
    }
  `}
`
