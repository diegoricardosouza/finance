import { MdOutlineAttachMoney } from 'react-icons/md'
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi'

import Card from '@/components/Card'
import Base from '../Base'
import SelectedData from '@/components/SelectedData'
import Table from '@/components/Table'

import * as S from './styles'

const columns = [
  {
    Header: 'Data',
    accessor: 'date'
  },
  {
    Header: 'Categoria',
    accessor: 'category'
  },
  {
    Header: 'Título',
    accessor: 'title'
  },
  {
    Header: 'Valor',
    accessor: 'value'
  }
]

const data = [
  {
    date: '2022-10-20',
    category: 'Alimentação',
    title: 'McDonalds',
    value: 'R$ ' + 32.12
  },
  {
    date: '2022-10-22',
    category: 'Aluguel',
    title: 'Aluguel Apt',
    value: 'R$ ' + 2300
  },
  {
    date: '2022-10-25',
    category: 'Alimentação',
    title: 'Burger King',
    value: 'R$ ' + 28.0
  }
]

const Dashboard = () => {
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

        <SelectedData />
      </S.Container>

      <S.WrapperTable>
        <Table title="Development Table" columns={columns} data={data} />
      </S.WrapperTable>
    </Base>
  )
}

export default Dashboard
