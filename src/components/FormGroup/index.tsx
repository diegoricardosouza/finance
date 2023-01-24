import * as S from './styles'

interface FormGroupProps {
  children: React.ReactNode
  label: string
  error?: string
  required?: boolean
  password?: boolean
}

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
