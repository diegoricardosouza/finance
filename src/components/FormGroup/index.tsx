import * as S from './styles'

interface FormGroupProps {
  children: React.ReactNode
  label: string
  required?: boolean
}

const FormGroup = ({ children, label, required }: FormGroupProps) => {
  return (
    <S.Label>
      <p>
        {label}
        {required && <span>*</span>}
      </p>
      {children}
    </S.Label>
  )
}

export default FormGroup
