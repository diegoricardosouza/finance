/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import dynamic from 'next/dynamic'

import { MdOutlineAttachMoney } from 'react-icons/md'
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi'

import Base from '../Base'
import Card from '@/components/Card'
import SelectedData from '@/components/SelectedData'
import { currentMonthExt } from '@/utils/dateFilter'
import { lineChartOptionsArea } from '@/utils/charts'

import * as S from './styles'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

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

      <S.WrapperCharts>
        <S.WrapperLineChart>
          {/* <Chart
            options={lineChartOptionsArea}
            series={[
              {
                name: 'Entradas',
                data: [50, 64, 48, 66, 49, 68, 50, 64, 48, 66, 49, 68]
              },
              {
                name: 'Saídas',
                data: [30, 40, 24, 46, 20, 46, 30, 40, 24, 46, 20, 46]
              }
            ]}
            type="line"
            width="100%"
          /> */}
        </S.WrapperLineChart>
      </S.WrapperCharts>
    </Base>
  )
}

export default Dashboard
