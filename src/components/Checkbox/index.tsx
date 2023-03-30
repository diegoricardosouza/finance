import * as S from './styles'

interface CheckboxProps {
  id: string
  checked: boolean
  onChange: (id: string, checked: boolean) => void
}

const Checkbox = ({ id, checked, onChange }: CheckboxProps) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, event.target.checked)
  }

  return (
    <S.Container>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
    </S.Container>
  )
}

export default Checkbox
