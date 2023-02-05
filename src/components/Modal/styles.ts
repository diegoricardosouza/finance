import { device } from '@/utils/device'
import styled, { css, keyframes } from 'styled-components'

interface StyleModalProps {
  open: boolean
}

const overlayShow = keyframes`
  to {
    opacity: 1;
    pointer-events: inherit;
  }
`

const overlayHide = keyframes`
  to {
    opacity: 0;
    pointer-events: none;
  }
`

const contentShow = keyframes`
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    pointer-events: inherit;
  }
`

const contentHide = keyframes`
  to {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
    pointer-events: none;
  }
`

export const WrapperContainer = styled.div``

export const Overlay = styled.div<StyleModalProps>`
  ${({ open }) => css`
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    position: fixed;
    inset: 0;
    opacity: 0;
    z-index: 6;
    animation: ${open ? overlayShow : overlayHide} 150ms
      cubic-bezier(0.16, 1, 0.3, 1) forwards;
  `}
`

export const Container = styled.div<StyleModalProps>`
  ${({ theme, open }) => css`
    background-color: ${theme.colors.primary};
    border-radius: 0.6rem;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
    width: 90vw;
    max-width: 500px;
    max-height: 85vh;
    padding: 25px;
    animation: ${open ? contentShow : contentHide} 150ms
      cubic-bezier(0.16, 1, 0.3, 1) forwards;
    z-index: 6;

    &:focus {
      outline: none;
    }
  `}
`

export const CloseButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: -2.8rem;
    right: -1.8rem;
    border: 0;
    background: transparent;
    color: ${theme.colors.white};
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (${device.laptop}) {
      right: -2.8rem;
    }
  `}
`
