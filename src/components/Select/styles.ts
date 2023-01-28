import styled, { css } from 'styled-components'
import * as Select from '@radix-ui/react-select'

export const StyledSelectTrigger = styled(Select.Trigger)`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 10rem;
    padding: 0 15px;
    line-height: 1;
    height: 4rem;
    gap: 5px;
    background-color: ${theme.colors.primaryLight2};
    color: ${theme.colors.white};
    border: 0;
    font-weight: ${theme.font.bold};
    transition: all 0.2s ease-in;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.primary};
    }

    &:focus {
      box-shadow: 0 0 0 2px ${theme.colors.primary};
    }
  `}
`

export const StyledSelectIcon = styled(Select.Icon)`
  display: flex;
  align-items: center;
`

export const StyledSelectContent = styled(Select.Content)`
  ${({ theme }) => css`
    overflow: hidden;
    background-color: ${theme.colors.primaryLight2};
    border-radius: 2rem;
    box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
      0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  `}
`

export const StyledSelectViewport = styled(Select.Viewport)`
  padding: 1.5rem 0.5rem;
`

export const StyledSelectScrollDownButton = styled(Select.ScrollDownButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: red;
  color: green;
  cursor: default;
`

export const StyledSelectLabel = styled(Select.Label)`
  ${({ theme }) => css`
    padding: 0 25px;
    line-height: 25px;
    color: ${theme.colors.lightGray};
  `}
`
