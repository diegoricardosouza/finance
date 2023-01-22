import * as S from './styles'

interface SpinnerProps {
  size?: number
}

const Spinner = ({ size = 32 }: SpinnerProps) => {
  return <S.StyledSpinner size={size} />
}

export default Spinner
