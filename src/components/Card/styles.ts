import styled, { css, DefaultTheme } from 'styled-components'

interface CardStyleProps {
  color?: 'white' | 'green' | 'red'
}

const wrapperModifiers = {
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
  green: (theme: DefaultTheme) => css`
    color: ${theme.colors.success};
  `,
  red: (theme: DefaultTheme) => css`
    color: ${theme.colors.error};
  `
}

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.primaryLight};
    border-radius: 2rem;
    min-height: 9.7rem;
    padding: 1.4rem 1.7rem;
    align-items: center;
    gap: 1.8rem;
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    width: 5.6rem;
    height: 5.6rem;
    flex: 0 0 5.6rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primaryLight2};
    color: ${theme.colors.white};

    svg {
      color: ${theme.colors.white};
    }
  `}
`

export const Content = styled.div``

export const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    display: block;
    margin-bottom: 0.2rem;
  `}
`

export const Subtitle = styled.p<CardStyleProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors.white};
    font-size: 2.2rem;
    font-weight: ${theme.font.bold};

    ${!!color && wrapperModifiers[color](theme)};
  `}
`
