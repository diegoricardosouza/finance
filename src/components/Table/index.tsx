import { TableProps } from '@/types/Table'
import ButtonDelete from '../ButtonDelete'

import * as S from './style'

interface Column {
  title: string
  width?: number
}

interface TablePropsComponent {
  data: TableProps[]
  columns: Column[]
  title?: string
  deleteButton?: boolean
}

const Table = ({ data, columns, title, deleteButton }: TablePropsComponent) => {
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
          {data.map((item) => {
            return (
              <S.TrBody key={item.title}>
                <S.TdBody>{item.date}</S.TdBody>
                <S.TdBody>
                  <S.LabelCategory>{item.category}</S.LabelCategory>
                </S.TdBody>
                <S.TdBody>{item.title}</S.TdBody>
                <S.TdBody>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    maximumFractionDigits: 2
                  }).format(item.value)}
                </S.TdBody>

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
            )
          })}
        </S.Tbody>
      </S.Table>
    </S.Container>
  )
}

export default Table
