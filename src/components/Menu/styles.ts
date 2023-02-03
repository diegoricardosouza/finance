import { device } from '@/utils/device'
import styled, { css } from 'styled-components'

interface OpenMenuProps {
  open: boolean
}

export const Container = styled.div<OpenMenuProps>`
  ${({ theme, open }) => css`
    background-color: ${theme.colors.primaryLight};
    height: 100vh;
    width: 29rem;
    overflow: hidden;
    position: relative;
    transition: all 0.2s ease-in;
    left: ${open ? 0 : '-100%'};
    z-index: 6;

    @media ${device.laptop} {
      left: 0;
    }
  `}
`

export const WrapperLogo = styled.div`
  width: 100%;
  height: 13rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
`

export const WrapperMenu = styled.nav`
  width: 100%;
  height: calc(100vh - 13rem);
  overflow: auto;
  padding: 3.8rem 0 1rem 3.3rem;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

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
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10rem;
    transition: all 0.2s ease-in;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`

export const ButtonClose = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    button {
      background: transparent;
      border: 0;
      cursor: pointer;
      margin: 0 2rem 3rem 0;

      svg {
        color: ${theme.colors.white};
      }
    }

    @media ${device.laptop} {
      display: none;
    }
  `}
`

export const Overlay = styled.div<OpenMenuProps>`
  ${({ open }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-in;
    z-index: 6;
    background: rgba(0, 0, 0, 0.48);
    opacity: ${open ? 1 : 0};
    pointer-events: ${open ? 'inherit' : 'none'};
    cursor: none;
  `}
`

export const ButtonOpenMenu = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 4.1rem;
    right: 2rem;
    z-index: 5;

    button {
      background: transparent;
      border: 0;
      cursor: pointer;

      svg {
        color: ${theme.colors.white};
      }
    }

    @media ${device.laptop} {
      display: none;
    }
  `}
`
