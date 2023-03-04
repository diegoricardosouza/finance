import { Item } from '@/types/Item'
import dayjs from 'dayjs'

export const filterListbyMonth = (list: Item[], date: string): Item[] => {
  const newList: Item[] = []
  const month = date
  const monthList = (a: string) => dayjs(a).locale('pt-br').format('MM')

  for (const i in list) {
    if (monthList(list[i].date) === String(month)) {
      newList.push(list[i])
    }
  }

  return newList
}

export const filterListByCashOut = (list: Item[], month: string): number => {
  const filteredList = filterListbyMonth(list, month)
  let incomeCount = 0

  for (const i in filteredList) {
    if (filteredList[i].category !== 'salary') {
      incomeCount += filteredList[i].value
    }
  }

  return incomeCount
}

export const filterListByCashIn = (list: Item[], month: string): number => {
  const filteredList = filterListbyMonth(list, month)
  let expenseCount = 0

  for (const i in filteredList) {
    if (filteredList[i].category === 'salary') {
      expenseCount += filteredList[i].value
    }
  }

  return expenseCount
}

export const totalYearByMonthCashOut = (list: Item[]) => {
  const jan = filterListByCashOut(list, '01').toFixed(2)
  const fev = filterListByCashOut(list, '02').toFixed(2)
  const mar = filterListByCashOut(list, '03').toFixed(2)
  const abr = filterListByCashOut(list, '04').toFixed(2)
  const mai = filterListByCashOut(list, '05').toFixed(2)
  const jun = filterListByCashOut(list, '06').toFixed(2)
  const jul = filterListByCashOut(list, '07').toFixed(2)
  const ago = filterListByCashOut(list, '08').toFixed(2)
  const set = filterListByCashOut(list, '09').toFixed(2)
  const out = filterListByCashOut(list, '10').toFixed(2)
  const nov = filterListByCashOut(list, '11').toFixed(2)
  const dec = filterListByCashOut(list, '12').toFixed(2)

  return [
    parseInt(jan),
    parseInt(fev),
    parseInt(mar),
    parseInt(abr),
    parseInt(mai),
    parseInt(jun),
    parseInt(jul),
    parseInt(ago),
    parseInt(set),
    parseInt(out),
    parseInt(nov),
    parseInt(dec)
  ]
}

export const totalYearByMonthCashIn = (list: Item[]) => {
  const jan = filterListByCashIn(list, '01').toFixed(2)
  const fev = filterListByCashIn(list, '02').toFixed(2)
  const mar = filterListByCashIn(list, '03').toFixed(2)
  const abr = filterListByCashIn(list, '04').toFixed(2)
  const mai = filterListByCashIn(list, '05').toFixed(2)
  const jun = filterListByCashIn(list, '06').toFixed(2)
  const jul = filterListByCashIn(list, '07').toFixed(2)
  const ago = filterListByCashIn(list, '08').toFixed(2)
  const set = filterListByCashIn(list, '09').toFixed(2)
  const out = filterListByCashIn(list, '10').toFixed(2)
  const nov = filterListByCashIn(list, '11').toFixed(2)
  const dec = filterListByCashIn(list, '12').toFixed(2)

  return [
    parseInt(jan),
    parseInt(fev),
    parseInt(mar),
    parseInt(abr),
    parseInt(mai),
    parseInt(jun),
    parseInt(jul),
    parseInt(ago),
    parseInt(set),
    parseInt(out),
    parseInt(nov),
    parseInt(dec)
  ]
}

export const totalYearCashIn = (list: Item[]) => {
  const total = totalYearByMonthCashIn(list)

  return total.reduce(function (accumulator, value) {
    return accumulator + value
  }, 0)
}

export const totalYearCashOut = (list: Item[]) => {
  const total = totalYearByMonthCashOut(list)

  return total.reduce(function (accumulator, value) {
    return accumulator + value
  }, 0)
}
