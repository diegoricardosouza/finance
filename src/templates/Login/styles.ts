import styled, { css } from 'styled-components'
import { device } from '../../utils/device'

export const Container = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 1rem;
  `}
`

export const FormContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 52rem;
    background: ${theme.colors.primaryLight};
    border-radius: 3rem;
    position: relative;
    z-index: 1;

    @media ${device.mobileS} {
      padding: 5rem 3rem;
    }

    @media ${device.laptop} {
      padding: 5rem;
    }
  `}
`

export const Form = styled.div`
  width: 100%;
`

export const Header = styled.header`
  ${({ theme }) => css`
    margin-bottom: 3.6rem;

    h1 {
      margin: 0 0 0.8rem 0;
      color: ${theme.colors.white};
      font-size: 3.6rem;
      font-weight: ${theme.font.bold};
      line-height: 1.2;
    }

    span {
      display: block;
      color: ${theme.colors.lightGray};
      font-size: 1.6rem;
      line-height: 1;
    }
  `}
`

export const LineBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  background-image: linear-gradient(
    135deg,
    rgb(134, 140, 255) 0%,
    rgb(67, 24, 255) 100%
  );
  z-index: 0;
`
