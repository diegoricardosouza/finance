import { months } from './months'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

export const getCurrentMonth = () => {
  const now = new Date()

  return `${now.getFullYear()}-${now.getMonth() + 1}`
}

// export const filterListbyMonth = (list: Item[], date: string): Item[] => {
//   const newList: Item[] = []
//   const [year, month] = date.split('-')

//   for (const i in list) {
//     if (
//       list[i].date.getFullYear() === parseInt(year) &&
//       list[i].date.getMonth() + 1 === parseInt(month)
//     ) {
//       newList.push(list[i])
//     }
//   }

//   return newList
// }

export const formatDate = (date: string): string => {
  // const dateFormated = new Date(date)
  // const now = new Date()
  // dateFormated.setUTCHours(now.getUTCHours() - 3)

  // const year = dateFormated.getFullYear()
  // const month = dateFormated.getMonth() + 1
  // const day = dateFormated.getDate()

  // return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
  return dayjs(date).locale('pt-br').format('DD/MM/YYYY')
}

export const getCurrentDateNow = () => {
  const date = new Date()
  return `${date.getFullYear()}-${addZeroToDate(
    date.getMonth() + 1
  )}-${addZeroToDate(date.getDate())}`
}

export const addZeroToDate = (n: number): string => (n < 10 ? `0${n}` : `${n}`)

export const currentMonthExt = () => {
  const date = new Date()
  const currentMonth = date.getMonth()

  return months[currentMonth].value
}
