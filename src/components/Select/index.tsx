import * as SelectUi from '@radix-ui/react-select'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import SelectItem from '../SelectItem'
import { SelectProps } from '@/types/Select'

import * as S from './styles'

const Select = ({ label, items, selected }: SelectProps) => {
  return (
    <SelectUi.Root defaultValue={selected}>
      <S.StyledSelectTrigger aria-label={label}>
        <SelectUi.Value placeholder={`${label}...`} />

        <S.StyledSelectIcon>
          <IoIosArrowDown size={20} />
        </S.StyledSelectIcon>
      </S.StyledSelectTrigger>

      <SelectUi.Portal>
        <S.StyledSelectContent>
          <S.StyledSelectScrollDownButton>
            <IoIosArrowUp />
          </S.StyledSelectScrollDownButton>

          <S.StyledSelectViewport>
            <SelectUi.Group>
              <S.StyledSelectLabel>{label}</S.StyledSelectLabel>
              {items.map((item) => (
                <SelectItem key={item.title} value={item.value}>
                  {item.title}
                </SelectItem>
              ))}
            </SelectUi.Group>
          </S.StyledSelectViewport>

          <S.StyledSelectScrollDownButton>
            <IoIosArrowDown />
          </S.StyledSelectScrollDownButton>
        </S.StyledSelectContent>
      </SelectUi.Portal>
    </SelectUi.Root>
  )
}

export default Select
