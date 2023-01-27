import { SpinnerProps } from '@/types/Spinner'
import * as S from './styles'

const Spinner = ({ size = 32 }: SpinnerProps) => {
  return <S.StyledSpinner size={size} />
}

export default Spinner
