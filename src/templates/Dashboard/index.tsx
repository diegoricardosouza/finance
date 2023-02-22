/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi'

import Base from '../Base'
import Card from '@/components/Card'
import SelectedData from '@/components/SelectedData'
import { currentMonthExt } from '@/utils/dateFilter'

import * as S from './styles'

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const date = new Date()

  const handleFilter = ({ month, year }: { month: string; year: string }) => {
    setSelectedMonth(month === '' ? currentMonthExt() : month)
    setSelectedYear(year === '' ? String(date.getFullYear()) : year)
  }

  // console.log('click', selectedMonth, selectedYear)

  return (
    <Base title="Dashboard" titleBreadcrumb="Dashboard">
      <S.Container>
        <Card
          icon={<GiMoneyStack size={30} />}
          title="Receita"
          subtitle="R$ 4682.50"
          color="white"
        />

        <Card
          icon={<GiTakeMyMoney size={30} />}
          title="Despesa"
          subtitle="R$ 3682.50"
          color="white"
        />

        <Card
          icon={<MdOutlineAttachMoney size={30} />}
          title="Balanço"
          subtitle="R$ 2682.50"
          color="green"
        />

        <SelectedData onButtonClick={handleFilter} />
      </S.Container>
    </Base>
  )
}

export default Dashboard
