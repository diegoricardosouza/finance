import Spinner from '../Spinner'
import * as S from './styles'

interface CardProps {
  icon?: React.ReactNode
  title: string
  subtitle: string
  color: 'white' | 'green' | 'red'
  isLoading?: boolean
}

const Card = ({ icon, title, subtitle, color, isLoading }: CardProps) => {
  return (
    <S.Container>
      {isLoading ? (
        <S.LoadingWrapper>
          <Spinner size={27} />
        </S.LoadingWrapper>
      ) : (
        <>
          {icon && <S.Icon>{icon}</S.Icon>}

          <S.Content>
            <S.Title>{title}</S.Title>
            <S.Subtitle color={color}>{subtitle}</S.Subtitle>
          </S.Content>
        </>
      )}
    </S.Container>
  )
}

export default Card
