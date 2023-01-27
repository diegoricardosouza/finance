import Header from '@/components/Header'
import Menu from '@/components/Menu'
import { BaseProps } from '@/types/Base'

import * as S from './styles'

const Base = ({ children, title, titleBreadcrumb }: BaseProps) => {
  return (
    <S.Container>
      <Menu />

      <S.Content>
        <Header title={title} titleBreadcrumb={titleBreadcrumb} />
        {children}
      </S.Content>
    </S.Container>
  )
}

export default Base
