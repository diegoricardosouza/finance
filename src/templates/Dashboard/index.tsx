/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'

import { MdOutlineAttachMoney } from 'react-icons/md'
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi'

import Base from '../Base'
import Card from '@/components/Card'
import SelectedData from '@/components/SelectedData'
import BarChart from '@/components/BarChart'
import {
  totalYearByMonthCashIn,
  totalYearByMonthCashOut
} from '@/utils/itemsFilter'

import * as S from './styles'
import { Item } from '@/types/Item'

const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState('')
  const [dataYear, setDataYear] = useState<Item[]>([])

  const handleFilter = ({ year }: { year: string }) => {
    const date = new Date()
    setSelectedYear(year === '' ? String(date.getFullYear()) : year)
  }

  useEffect(() => {
    const date = new Date()
    setSelectedYear((prevState) =>
      prevState === '' ? String(date.getFullYear()) : prevState
    )
  }, [selectedYear])

  useEffect(() => {
    const itensByMonth = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/item?year=${selectedYear}`
      )
      const data = await response.json()
      setDataYear(data)
    }

    itensByMonth()
  }, [selectedYear])

  const data = {
    labels: [
      'JAN',
      'FEV',
      'MAR',
      'ABR',
      'MAI',
      'JUN',
      'JUL',
      'AGO',
      'SET',
      'OUT',
      'NOV',
      'DEZ'
    ],
    datasets: {
      labelOne: 'Entradas',
      dataOne: totalYearByMonthCashIn(dataYear),
      labelTwo: 'Saídas',
      dataTwo: totalYearByMonthCashOut(dataYear)
    }
  }

  return (
    <Base title="Dashboard" titleBreadcrumb="Dashboard">
      <S.Container>
        <Card
          icon={<GiMoneyStack size={30} />}
          title="Receita Anual"
          subtitle="R$ 4682.50"
          color="white"
        />

        <Card
          icon={<GiTakeMyMoney size={30} />}
          title="Despesa Anual"
          subtitle="R$ 3682.50"
          color="white"
        />

        <Card
          icon={<MdOutlineAttachMoney size={30} />}
          title="Balanço Anual"
          subtitle="R$ 2682.50"
          color="green"
        />

        <SelectedData onButtonClick={handleFilter} />
      </S.Container>

      <S.WrapperCharts>
        <S.WrapperLineChart>
          <BarChart data={data} />
        </S.WrapperLineChart>
      </S.WrapperCharts>
    </Base>
  )
}

export default Dashboard
