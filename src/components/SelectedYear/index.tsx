import { useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

import Select from '../Select'
import { years } from '@/utils/years'

import * as S from './styles'

interface SelectDataProps {
  onButtonClick: (data: { year: string }) => void
}

const SelectedYear = ({ onButtonClick }: SelectDataProps) => {
  const [selectedValueYear, setSelectedValueYear] = useState<string>('')
  const date = new Date()

  const handleChangeYear = (value: string) => {
    setSelectedValueYear(value)
  }

  return (
    <S.Container>
      <S.WrapperTitle>Filtrar por Ano</S.WrapperTitle>

      <S.WrapperContainer>
        <Select
          label="Ano"
          items={years}
          selected={String(date.getFullYear())}
          onValueChange={handleChangeYear}
        />

        <S.FilterButton
          onClick={() => {
            onButtonClick({
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

export default SelectedYear
