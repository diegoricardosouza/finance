/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
import { TableProps } from '@/types/Table'
import { useTable, useSortBy, Column } from 'react-table'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import * as S from './style'

interface TablePropsComponent {
  data: TableProps[]
  columns: Column[]
  title?: string
}

const Table = ({ data, columns, title }: TablePropsComponent) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy)

  const firstPageRows = rows.slice(0, 20)

  return (
    <S.Container>
      {title && <S.Title>{title}</S.Title>}

      <S.Table {...getTableProps()}>
        <S.Thead>
          {headerGroups.map((headerGroup) => (
            <S.TrHeader {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <S.Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}

                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <IoIosArrowDown size={20} />
                      ) : (
                        <IoIosArrowUp size={20} />
                      )
                    ) : (
                      <IoIosArrowDown size={20} />
                    )}
                  </span>
                </S.Th>
              ))}

              <S.Th
                style={{
                  width: 110
                }}
              >
                Ações
              </S.Th>
            </S.TrHeader>
          ))}
        </S.Thead>

        <S.Tbody {...getTableBodyProps()}>
          {firstPageRows.map((row) => {
            prepareRow(row)
            return (
              <S.TrBody {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <S.TdBody {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </S.TdBody>
                  )
                })}

                <S.TdBody>ssfas</S.TdBody>
              </S.TrBody>
            )
          })}
        </S.Tbody>
      </S.Table>
    </S.Container>
  )
}

export default Table
