import { FormGroupProps } from '@/types/Form'
import * as S from './styles'

const FormGroup = ({
  children,
  label,
  error,
  required,
  password
}: FormGroupProps) => {
  return (
    <S.Label password={password}>
      <p>
        {label}
        {required && <span>*</span>}
      </p>
      {children}

      {error && <S.Error>{error}</S.Error>}
    </S.Label>
  )
}

export default FormGroup
