import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    input[type='checkbox'] {
      position: relative;
      cursor: pointer;
      width: 2.1rem;
      background: transparent;
      transition: all 200ms ease-in-out;
      border-radius: 0.5rem;

      &::after {
        transition: all 200ms ease-in-out;
      }

      &:before {
        content: '';
        display: block;
        position: absolute;
        width: 1.8rem;
        height: 1.8rem;
        top: 0;
        left: 0;
        border: 0.2rem solid ${theme.colors.white};
        border-radius: 0.3rem;
        background: ${theme.colors.primaryLight};
        transition: all 200ms ease-in-out;
      }

      &:checked:before {
        content: '';
        display: block;
        position: absolute;
        width: 1.8rem;
        height: 1.8rem;
        top: 0;
        left: 0;
        border: 0.2rem solid ${theme.colors.secondary};
        border-radius: 0.3rem;
        background: ${theme.colors.secondary};
        transition: all 200ms ease-in-out;
      }

      &:checked:after {
        content: '';
        display: block;
        width: 5px;
        height: 10px;
        border: solid ${theme.colors.primary};
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        top: 4px;
        left: 8px;
        transition: all 200ms ease-in-out;
      }
    }
  `}
`
