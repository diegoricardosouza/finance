import Link from 'next/link'
import { HeaderProps } from '../../utils/types'
import * as S from './styles'

const Header = ({ title, titleBreadcrumb }: HeaderProps) => {
  return (
    <S.Wrapper>
      <S.Content>
        <ul>
          <li>
            <Link href="/dashboard">Home</Link>
          </li>
          <li>/</li>
          <li>{titleBreadcrumb}</li>
        </ul>
        <h1>{title}</h1>
      </S.Content>
    </S.Wrapper>
  )
}

export default Header
