import { ButtonProps } from '@/types/Button'
import Spinner from '../Spinner'

import * as S from './styles'

const Button = ({
  type,
  disabled,
  isLoading,
  children,
  onClick
}: ButtonProps) => {
  return (
    <S.StyledButton
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {!isLoading && children}
      {isLoading && <Spinner size={27} />}
    </S.StyledButton>
  )
}

export default Button
