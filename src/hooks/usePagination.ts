export default function usePagination(
  currentPage: number,
  maxPages: number,
  totalPages: number
) {
  const pagesCount = totalPages
  let pages: (number | null)[] = Array.from(
    { length: pagesCount },
    (_, i) => i + 1
  )

  if (pagesCount > maxPages) {
    let startPage = Math.max(1, currentPage - Math.floor(maxPages / 2))
    const endPage = Math.min(pagesCount, startPage + maxPages - 1)

    if (endPage - startPage < maxPages - 1) {
      const diff = maxPages - (endPage - startPage)
      startPage -= diff
      if (startPage < 1) startPage = 1
    }

    pages = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    )

    if (startPage > 1) {
      if (startPage > 2) {
        pages.unshift(null)
      }
      pages.unshift(1)
    }

    if (endPage < pagesCount) {
      if (currentPage < pagesCount - maxPages + 1) {
        pages.push(null)
      }
      pages.push(pagesCount)
    }

    if (startPage === 2 && pages[1] !== 2) {
      pages.splice(1, 0, 2)
    }

    if (startPage > 2 && pages[1] !== null) {
      pages.splice(1, 0, null)
    }

    if (
      endPage === pagesCount - 1 &&
      pages[pages.length - 2] !== pagesCount - 1
    ) {
      pages.splice(pages.length - 1, 0, pagesCount - 1)
    }

    if (endPage < pagesCount - 1 && pages[pages.length - 2] !== null) {
      pages.splice(pages.length - 1, 0, null)
    }
  }

  return {
    pages,
    pagesCount
  }
}
