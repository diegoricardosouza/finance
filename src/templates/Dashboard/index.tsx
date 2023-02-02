import { MdOutlineAttachMoney } from 'react-icons/md'
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi'

import Card from '@/components/Card'
import Base from '../Base'
import SelectedData from '@/components/SelectedData'
import Table from '@/components/Table'

import * as S from './styles'

const columns = [
  {
    title: 'Data',
    width: 170
  },
  {
    title: 'Categoria',
    width: 170
  },
  {
    title: 'Título'
  },
  {
    title: 'Valor',
    width: 170
  }
]

const data = [
  {
    id: 'sdafasdfsa-123sa1df32a1',
    date: '2022-10-20',
    category: 'Alimentação',
    title: 'McDonalds',
    value: 32.12
  },
  {
    id: 'wqerty78-789as7df',
    date: '2022-10-22',
    category: 'Aluguel',
    title: 'Aluguel Apt',
    value: 2300
  },
  {
    id: 'xzcv4f56as-4asdf-78a9s',
    date: '2022-10-25',
    category: 'Alimentação',
    title: 'Burger King',
    value: 28
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
        <Table
          title="Development Table"
          columns={columns}
          data={data}
          deleteButton
        />
      </S.WrapperTable>
    </Base>
  )
}

export default Dashboard
