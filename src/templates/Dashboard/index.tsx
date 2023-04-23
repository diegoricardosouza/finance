/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'

import { MdOutlineAttachMoney } from 'react-icons/md'
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi'

import Base from '../Base'
import Card from '@/components/Card'
import SelectedYear from '@/components/SelectedYear'
import BarChart from '@/components/BarChart'
import Spinner from '@/components/Spinner'
import PieChart from '@/components/PieChart'
import SelectedMonth from '@/components/SelectedMonth'
import {
  totalCategoryItens,
  totalYearByMonthCashIn,
  totalYearByMonthCashOut,
  totalYearCashIn,
  totalYearCashOut
} from '@/utils/itemsFilter'
import { currentMonthExt, getCurrentMonth } from '@/utils/dateFilter'
import { Item } from '@/types/Item'

import * as S from './styles'

const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState('')
  const [loading, setLoading] = useState(true)
  const [dataYear, setDataYear] = useState<Item[]>([])
  const balance = totalYearCashIn(dataYear) - totalYearCashOut(dataYear)
  const [selectedMonth, setSelectedMonth] = useState('')
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [list, setList] = useState<any>([])

  const handleFilter = ({ year }: { year: string }) => {
    const date = new Date()
    setSelectedYear(year === '' ? String(date.getFullYear()) : year)
  }

  const handleFilterMonth = ({ month }: { month: string }) => {
    const date = new Date()
    setSelectedMonth(month === '' ? String(date.getFullYear()) : month)
  }

  useEffect(() => {
    const getItensMonth = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/item?date=${currentMonth}&limit=-1`
      )
      const resData = await response.json()

      setList(resData.item)
    }

    getItensMonth()
  }, [currentMonth])

  useEffect(() => {
    setSelectedMonth((prevState) =>
      prevState === '' ? currentMonthExt() : prevState
    )

    setCurrentMonth(`${selectedYear}-${selectedMonth}`)
  }, [selectedMonth, selectedYear])

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
    setLoading(false)
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

  const dataPie = [
    totalCategoryItens(list, 'food'),
    totalCategoryItens(list, 'rent'),
    totalCategoryItens(list, 'marketplace'),
    totalCategoryItens(list, 'salary')
  ]

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
          isLoading={loading}
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
          isLoading={loading}
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
          isLoading={loading}
        />

        <SelectedYear onButtonClick={handleFilter} />
      </S.Container>

      <S.WrapperCharts>
        <S.WrapperLineChart>
          {loading ? (
            <S.LoadingWrapper>
              <Spinner size={27} />
            </S.LoadingWrapper>
          ) : (
            <BarChart data={data} />
          )}
        </S.WrapperLineChart>

        <S.ContainerPieChart>
          <SelectedMonth onButtonClick={handleFilterMonth} />

          <S.WrapperPieChart>
            {loading ? (
              <S.LoadingWrapper>
                <Spinner size={27} />
              </S.LoadingWrapper>
            ) : (
              <PieChart data={dataPie} />
            )}
          </S.WrapperPieChart>
        </S.ContainerPieChart>
      </S.WrapperCharts>
    </Base>
  )
}

export default Dashboard
