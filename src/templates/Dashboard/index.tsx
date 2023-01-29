import { MdOutlineAttachMoney } from 'react-icons/md'
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi'

import Card from '@/components/Card'
import Base from '../Base'

import * as S from './styles'
import SelectedData from '@/components/SelectedData'

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
    </Base>
  )
}

export default Dashboard
