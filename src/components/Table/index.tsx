import ButtonDelete from '../ButtonDelete'
import { Item } from '@/types/Item'

import * as S from './style'
import { formatDate } from '@/utils/dateFilter'
import { categories } from '@/data/categories'

interface Column {
  title: string
  width?: number
}

interface TablePropsComponent {
  list: Item[]
  columns: Column[]
  title?: string
  deleteButton?: boolean
}

const Table = ({ list, columns, title, deleteButton }: TablePropsComponent) => {
  const handleDelete = (id: string) => {
    console.log(id)
  }

  return (
    <S.Container>
      {title && <S.Title>{title}</S.Title>}

      <S.Table>
        <S.Thead>
          <S.TrHeader>
            {columns.map((column) => (
              <S.Th key={column.title} style={{ width: column?.width }}>
                {column.title}
              </S.Th>
            ))}

            {deleteButton && (
              <S.Th
                style={{
                  width: 110
                }}
              >
                Ações
              </S.Th>
            )}
          </S.TrHeader>
        </S.Thead>

        <S.Tbody>
          {list.map((item) => (
            <S.TrBody key={item.title}>
              <S.TdBody>{formatDate(item.date)}</S.TdBody>
              <S.TdBody>
                <S.LabelCategory>
                  {categories[item.category].title}
                </S.LabelCategory>
              </S.TdBody>
              <S.TdBody>{item.title}</S.TdBody>
              <S.TdBodyValue
                color={categories[item.category].expense ? 'red' : 'green'}
              >
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  maximumFractionDigits: 2
                }).format(item.value)}
              </S.TdBodyValue>

              {deleteButton && (
                <S.TdBody>
                  <ButtonDelete
                    id={item.id}
                    title="Você tem certeza?"
                    content="Essa ação não pode ser desfeita. Isso excluirá permanentemente e removerá os dados de nossos servidores."
                    titleCancel="Cancelar"
                    titleConfirm="Sim, quero deletar"
                    onClick={() => handleDelete(item.id)}
                  />
                </S.TdBody>
              )}
            </S.TrBody>
          ))}
        </S.Tbody>
      </S.Table>
    </S.Container>
  )
}

export default Table
