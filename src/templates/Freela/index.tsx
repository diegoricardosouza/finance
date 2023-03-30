import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import Base from '../Base'
import TableCheckbox from '@/components/TableCheckbox'

import * as S from './styles'
import 'react-toastify/dist/ReactToastify.css'

const columns = [
  {
    title: '#',
    width: 70
  },
  {
    title: 'Título'
  },
  {
    title: 'Valor',
    width: 170
  }
]

const list = [
  {
    id: 'sfasfasdfas',
    title: 'teste',
    value: 10.23,
    active: false
  },
  {
    id: '234214sfw',
    title: 'teste 2',
    value: 13.51,
    active: true
  },
  {
    id: 'asdaswe1e',
    title: 'teste 3',
    value: 14.51,
    active: false
  },
  {
    id: '123r4r4',
    title: 'teste 4',
    value: 15.51,
    active: true
  }
]

const Freela = () => {
  const [loading, setLoading] = useState(false)

  const handleDelete = async (id: string) => {
    console.log('delete', id)
  }

  return (
    <Base title="Freelas" titleBreadcrumb="Freelas">
      <S.Container>
        <TableCheckbox
          title="Lista dos Freelas"
          columns={columns}
          list={list}
          deleteButton
          onDelete={handleDelete}
          isLoading={loading}
        />
      </S.Container>

      <ToastContainer />
    </Base>
  )
}

export default Freela
