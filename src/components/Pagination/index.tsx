import usePagination from '@/hooks/usePagination'
import * as S from './styles'

interface PaginationProps {
  totalPages: number
  currentPage: number
  maxPages?: number
  onPageChange: (page: number) => void
}

const Pagination = ({
  totalPages,
  onPageChange,
  maxPages = 5,
  currentPage
}: PaginationProps) => {
  const { pages, pagesCount } = usePagination(currentPage, maxPages, totalPages)

  return (
    <S.PaginationWrapper>
      {pages.length > 1 ? (
        <S.PaginationContainer>
          {currentPage > 1 && (
            <S.ItemPagination key={0}>
              <a onClick={() => onPageChange(currentPage - 1)}>«</a>
            </S.ItemPagination>
          )}

          {pages.map((page, index) => {
            if (page === null) {
              return (
                <S.ItemPaginationDots key={index}>...</S.ItemPaginationDots>
              )
            }

            const isBeforeCurrentPage = page < currentPage
            const isAfterCurrentPage = page > currentPage
            const isCurrentPage = page === currentPage

            const handleClick = () => onPageChange(page)

            return (
              <S.ItemPagination key={index}>
                {isBeforeCurrentPage && <a onClick={handleClick}>{page}</a>}
                {isCurrentPage && <span>{page}</span>}
                {isAfterCurrentPage && <a onClick={handleClick}>{page}</a>}
              </S.ItemPagination>
            )
          })}

          {currentPage < pagesCount && (
            <S.ItemPagination key={pagesCount + 1}>
              <a onClick={() => onPageChange(currentPage + 1)}>»</a>
            </S.ItemPagination>
          )}
        </S.PaginationContainer>
      ) : (
        ''
      )}
    </S.PaginationWrapper>
  )
}

export default Pagination
