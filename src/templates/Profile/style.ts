import { device } from '@/utils/device'
import styled, { css } from 'styled-components'

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (${device.laptop}) {
    grid-template-columns: 1fr 1fr;
  }
`

export const LeftContainer = styled.div``

export const HeaderProfile = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.primaryLight};
    padding: 2rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-direction: column;
    text-align: center;
    position: relative;
    min-height: 12.7rem;
    overflow: hidden;

    @media (${device.laptop}) {
      flex-direction: row;
      text-align: left;
    }
  `}
`

export const ProfilePhoto = styled.figure`
  ${({ theme }) => css`
    margin: 0;
    width: 8.7rem;
    height: 8.7rem;
    border-radius: 50%;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.5rem;
  `}
`

export const ProfileInfos = styled.div``

export const ProfileTitle = styled.h2`
  ${({ theme }) => css`
    margin: 0 0 0.3rem 0;
    font-size: 2.5rem;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
  `}
`

export const ProfileEmail = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: 1.6rem;
    color: ${theme.colors.lightGray};
  `}
`

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primaryLight};
    padding: 2rem;
    border-radius: 2rem;
    margin-top: 2rem;
    position: relative;
    min-height: 40.9rem;
    overflow: hidden;
  `}
`

export const LoadingWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
