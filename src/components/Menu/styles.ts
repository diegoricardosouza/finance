import styled, { css } from 'styled-components'

interface MenuStyleProps {
  active?: boolean
}

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryLight};
    height: 100vh;
    width: 29rem;
    overflow: hidden;
  `}
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
    background: transparent;
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
