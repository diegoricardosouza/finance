import { Item } from '@/types/Item'
import { months } from './months'

export const getCurrentMonth = () => {
  const now = new Date()

  return `${now.getFullYear()}-${now.getMonth() + 1}`
}

export const filterListbyMonth = (list: Item[], date: string): Item[] => {
  const newList: Item[] = []
  const [year, month] = date.split('-')

  for (const i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i])
    }
  }

  return newList
}

// export const filterListbyMonth = (list: Item[], date: string): Item[] => {
//   const [year, month] = date.split('-')

//   return list.filter((itemList: Item) => {
//     itemList.date.getFullYear() === parseInt(year) &&
//       itemList.date.getMonth() + 1 === parseInt(month)
//   })
// }

export const formatDate = (date: Date): string => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
}

export const getCurrentDateNow = () => {
  const date = new Date()
  return `${date.getFullYear()}-${addZeroToDate(
    date.getMonth() + 1
  )}-${addZeroToDate(date.getDate())}`
}

const addZeroToDate = (n: number): string => (n < 10 ? `0${n}` : `${n}`)

export const currentMonthExt = () => {
  const date = new Date()
  const currentMonth = date.getMonth()

  return months[currentMonth].value
}

export const orderItems = (items: Item[]) => {
  return items.sort((a, b) => b.date.getTime() - a.date.getTime())
}
