import styled, { css } from 'styled-components'

interface MenuStyleProps {
  active?: boolean
}

export const ItemMenu = styled.li<MenuStyleProps>`
  ${({ theme, active }) => css`
    display: block;
    margin-bottom: 1.5rem;

    a {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      color: ${theme.colors.white};
      font-weight: ${active ? theme.font.bold : theme.font.normal};
      position: relative;
      padding: 0 1rem 0 0;
      height: 3.6rem;
      transition: all 0.2s ease-in;

      &::after {
        content: '';
        display: block;
        width: 0.4rem;
        height: 100%;
        background: ${active ? theme.colors.secondary : ''};
        border-radius: 2.5rem;
        position: absolute;
        top: 0;
        right: 0;
      }

      &:hover {
        color: ${theme.colors.secondary};
      }
    }
  `}
`

export const IconMenu = styled.div`
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
`
