/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'

import { MdOutlineAttachMoney } from 'react-icons/md'
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi'

import Base from '../Base'
import Card from '@/components/Card'
import SelectedYear from '@/components/SelectedYear'
import BarChart from '@/components/BarChart'
import {
  totalYearByMonthCashIn,
  totalYearByMonthCashOut,
  totalYearCashIn,
  totalYearCashOut
} from '@/utils/itemsFilter'
import { Item } from '@/types/Item'

import * as S from './styles'

const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState('')
  const [dataYear, setDataYear] = useState<Item[]>([])
  const balance = totalYearCashIn(dataYear) - totalYearCashOut(dataYear)

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
          subtitle={new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 2
          }).format(totalYearCashIn(dataYear))}
          color="white"
        />

        <Card
          icon={<GiTakeMyMoney size={30} />}
          title="Despesa Anual"
          subtitle={new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 2
          }).format(totalYearCashOut(dataYear))}
          color="white"
        />

        <Card
          icon={<MdOutlineAttachMoney size={30} />}
          title="Balanço Anual"
          subtitle={new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 2
          }).format(balance)}
          color={balance < 0 ? 'red' : balance > 1 ? 'green' : 'white'}
        />

        <SelectedYear onButtonClick={handleFilter} />
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
