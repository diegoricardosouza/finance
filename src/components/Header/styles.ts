import { device } from '@/utils/device'
import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  position: fixed;
  top: 1.5rem;
  right: 0;
  width: 100%;
  padding: 0 2rem;

  @media ${device.laptop} {
    width: calc(100% - 29rem);
    top: 3.5rem;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    backdrop-filter: blur(20px);
    padding: 0.8rem 1rem;
    border-radius: 1rem;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      gap: 0.5rem;
    }

    li,
    a {
      color: ${theme.colors.white};
      font-weight: ${theme.font.normal};
    }

    a {
      &:hover {
        text-decoration: underline;
      }
    }

    h1 {
      margin: 0.5rem 0 0 0;
      color: ${theme.colors.white};
      font-size: 3.4rem;
      font-weight: ${theme.font.bold};
      line-height: 1.2;
    }
  `}
`
