import * as AlertDialog from '@radix-ui/react-alert-dialog'
import styled, { css, keyframes } from 'styled-components'

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`

export const StyledAlertDialogTrigger = styled(AlertDialog.Trigger)`
  ${({ theme }) => css`
    border: 0;
    padding: 0 0.7rem;
    cursor: pointer;
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border-radius: 0.6rem;
    display: flex;
    height: 3rem;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${theme.colors.secondaryHover};
    }
  `}
`

export const StyledAlertDialogOverlay = styled(AlertDialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 6;
`

export const StyledAlertDialogContent = styled(AlertDialog.Content)`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: 0.6rem;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 500px;
    max-height: 85vh;
    padding: 25px;
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 6;

    &:focus {
      outline: none;
    }
  `}
`

export const StyledAlertDialogTitle = styled(AlertDialog.Title)`
  ${({ theme }) => css`
    margin: 0 0 1.5rem 0;
    color: ${theme.colors.white};
    font-size: 2.2rem;
    font-weight: ${theme.font.medium};
  `}
`

export const StyledAlertDialogDescription = styled(AlertDialog.Description)`
  ${({ theme }) => css`
    margin-bottom: 20px;
    color: ${theme.colors.lightGray};
    font-size: 1.5rem;
    line-height: 1.5;
  `}
`

export const StyledAlertDialogCancel = styled(AlertDialog.Cancel)`
  ${({ theme }) => css`
    background: ${theme.colors.primaryLight2};
    color: ${theme.colors.lightGray};
    border: 0;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${theme.colors.primaryLight};
    }
  `}
`

export const StyledAlertDialogAction = styled(AlertDialog.Action)`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border: 0;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${theme.colors.secondaryHover};
    }
  `}
`
