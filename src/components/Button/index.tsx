import Spinner from '../Spinner'

import * as S from './styles'

interface ButtonProps {
  type: 'button' | 'submit' | 'reset'
  disabled?: boolean
  isLoading?: boolean
  children: React.ReactNode
  onClick: () => void
}

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
