import * as Select from '@radix-ui/react-select'
import styled, { css } from 'styled-components'

export const StyledItems = styled(Select.Item)`
  ${({ theme }) => css`
    line-height: 1;
    color: ${theme.colors.white};
    border-radius: 3px;
    display: flex;
    align-items: center;
    height: 25px;
    padding: 0 35px 0 25px;
    position: relative;
    user-select: none;
    font-weight: ${theme.font.bold};
    transition: all 0.2s ease-in;

    &[data-disabled] {
      color: ${theme.colors.lightGray};
      pointer-events: none;
    }

    &[data-highlighted] {
      outline: none;
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.white};
    }
  `}
`

export const StyledItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`
