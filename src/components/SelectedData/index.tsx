import { useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

import Select from '../Select'
import { currentMonthExt } from '@/utils/dateFilter'
import { years } from '@/utils/years'
import { months } from '@/utils/months'

import * as S from './styles'

interface SelectDataProps {
  onButtonClick: (data: { month: string; year: string }) => void
}

const SelectedData = ({ onButtonClick }: SelectDataProps) => {
  const [selectedValueMonth, setSelectedValueMonth] = useState<string>('')
  const [selectedValueYear, setSelectedValueYear] = useState<string>('')
  const date = new Date()

  const handleChangeMonth = (value: string) => {
    setSelectedValueMonth(value)
  }

  const handleChangeYear = (value: string) => {
    setSelectedValueYear(value)
  }

  return (
    <S.Container>
      <S.WrapperTitle>Filtrar por Data</S.WrapperTitle>

      <S.WrapperContainer>
        <Select
          label="Mês"
          items={months}
          selected={currentMonthExt()}
          onValueChange={handleChangeMonth}
        />
        <Select
          label="Ano"
          items={years}
          selected={String(date.getFullYear())}
          onValueChange={handleChangeYear}
        />

        <S.FilterButton
          onClick={() => {
            onButtonClick({
              month: selectedValueMonth,
              year: selectedValueYear
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

export default SelectedData
