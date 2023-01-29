import { useState } from 'react'
import { MdOutlineArrowForward } from 'react-icons/md'

import { years } from '@/utils/years'
import { months } from '@/utils/months'
import { getCurrentMonth } from '@/utils/dateFilter'

import Select from '../Select'
import * as S from './styles'

const SelectedData = () => {
  const [selectedValueMonth, setSelectedValueMonth] = useState<string>('')
  const [selectedValueYear, setSelectedValueYear] = useState<string>('')

  // const [selectedMonth, setSelectedMonth] = useState<string>('')
  // const [selectedYear, setSelectedYear] = useState<string>('')

  const handleChangeMonth = (value: string) => {
    setSelectedValueMonth(value)
  }

  const handleChangeYear = (value: string) => {
    setSelectedValueYear(value)
  }

  // const handleCurrentYear = () => {
  //   setSelectedYear()
  // }

  // const handleCurrentMonth = () => {
  //   setSelectedMonth()
  // }

  const onClick = () => {
    console.log('ok', getCurrentMonth(), selectedValueMonth, selectedValueYear)
  }

  return (
    <S.Container>
      <S.WrapperTitle>Filtrar por Data</S.WrapperTitle>

      <S.WrapperContainer>
        <Select
          label="Mês"
          items={months}
          selected="fevereiro"
          onValueChange={handleChangeYear}
        />
        <Select label="Ano" items={years} onValueChange={handleChangeMonth} />

        <S.FilterButton onClick={onClick}>
          <MdOutlineArrowForward size={20} />
        </S.FilterButton>
      </S.WrapperContainer>
    </S.Container>
  )
}

export default SelectedData
