import * as S from './styles'

interface CardProps {
  icon?: React.ReactNode
  title: string
  subtitle: string
  color: 'white' | 'green' | 'red'
}

const Card = ({ icon, title, subtitle, color }: CardProps) => {
  return (
    <S.Container>
      {icon && <S.Icon>{icon}</S.Icon>}

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle color={color}>{subtitle}</S.Subtitle>
      </S.Content>
    </S.Container>
  )
}

export default Card
