import { useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

import Select from '../Select'
import { months } from '@/utils/months'

import * as S from './styles'
import { currentMonthExt } from '@/utils/dateFilter'

interface SelectDataProps {
  onButtonClick: (data: { month: string }) => void
}

const SelectedMonth = ({ onButtonClick }: SelectDataProps) => {
  const [selectedValueMonth, setSelectedValueMonth] = useState<string>('')

  const handleChangeMonth = (value: string) => {
    setSelectedValueMonth(value)
  }

  return (
    <S.Container>
      <S.WrapperTitle>Filtrar por Mês</S.WrapperTitle>

      <S.WrapperContainer>
        <Select
          label="Mês"
          items={months}
          selected={currentMonthExt()}
          onValueChange={handleChangeMonth}
        />

        <S.FilterButton
          onClick={() => {
            onButtonClick({
              month: selectedValueMonth
            })
          }}
          aria-label="Search"
        >
          <HiOutlineSearch size={20} />
        </S.FilterButton>
      </S.WrapperContainer>
    </S.Container>
  )
}

export default SelectedMonth
