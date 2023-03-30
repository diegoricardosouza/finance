import ButtonDelete from '../ButtonDelete'

import * as S from './style'
import { formatDate } from '@/utils/dateFilter'
import { categories } from '@/data/categories'
import Spinner from '../Spinner'
import { useState } from 'react'
import Checkbox from '../Checkbox'

interface Column {
  title: string
  width?: number
}

interface ItemTableCheck {
  id: string
  title: string
  value: number
  active: boolean
}

interface TablePropsComponent {
  list: ItemTableCheck[]
  columns: Column[]
  title?: string
  deleteButton?: boolean
  onDelete: (id: string) => void
  isLoading?: boolean
}

const TableCheckbox = ({
  list,
  columns,
  title,
  deleteButton,
  onDelete,
  isLoading
}: TablePropsComponent) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setIsChecked(checked)
  }

  return (
    <S.Container>
      {isLoading ? (
        <S.LoadingWrapper>
          <Spinner size={27} />
        </S.LoadingWrapper>
      ) : (
        <>
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
                <S.TrBody key={item.id}>
                  <S.TdBody>
                    <Checkbox
                      id={item.id}
                      checked={item.active}
                      onChange={handleCheckboxChange}
                    />
                  </S.TdBody>

                  <S.TdBody>{item.title}</S.TdBody>
                  <S.TdBodyValue>
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
                        onClick={() => onDelete(item.id)}
                      />
                    </S.TdBody>
                  )}
                </S.TrBody>
              ))}
            </S.Tbody>
          </S.Table>
        </>
      )}
    </S.Container>
  )
}

export default TableCheckbox
