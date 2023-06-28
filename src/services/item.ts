import prisma from '../lib/db'
import dayjs from 'dayjs'

interface createItemProps {
  date: Date
  category: string
  title: string
  value: number
  id: string
}

interface updateItemProps {
  updateData?: createItemProps
}

export const getAllItems = async () => {
  const items = await prisma.item.findMany({})
  return items
}

export const getItem = async (id: string) => {
  const item = await prisma.item.findUnique({
    where: { id }
  })

  return item
}

export const getAllItemsByDate = async (
  year: number,
  month: number,
  page?: string,
  limit?: string
) => {
  // const firstDayOfMonth = new Date(year, month - 1, 1)
  // const lastDayOfMonth = new Date(year, month, 0)
  // lastDayOfMonth.setDate(lastDayOfMonth.getDate() + 1) // adiciona 1 dia

  const firstDayOfMonth = new Date(Date.UTC(year, month - 1))
  const lastDayOfMonth = new Date(Date.UTC(year, month))
  // lastDayOfMonth.setDate(lastDayOfMonth.getDate() + 1) // adiciona 1 dia

  const items = await prisma.item.findMany({
    where: {
      date: {
        gte: firstDayOfMonth,
        lt: lastDayOfMonth
      }
    },
    orderBy: {
      date: 'desc'
    },
    skip: (Number(page) - 1) * Number(limit),
    take: Number(limit)
  })

  const totalPosts = await prisma.item.count({
    where: {
      date: {
        gte: new Date(firstDayOfMonth),
        lt: new Date(lastDayOfMonth)
      }
    }
  })
  const totalPages = Math.ceil(totalPosts / Number(limit))

  return { items, totalPosts, totalPages }
}

export const getAllItemsByYear = async (year: number) => {
  const firstDayOfYear = `${year}-01-01`
  const lastDayOfYear = `${year}-12-31`

  const items = await prisma.item.findMany({
    where: {
      date: {
        gte: new Date(firstDayOfYear),
        lt: new Date(lastDayOfYear)
      }
    },
    orderBy: {
      date: 'desc'
    }
  })
  return items
}

export const createItem = async (
  date: string,
  category: string,
  title: string,
  value: number,
  id: string
) => {
  const now = new Date()
  // const dateAdjustment = `${date} ${addZeroToDate(
  //   now.getHours()
  // )}:${addZeroToDate(now.getMinutes())}:${addZeroToDate(now.getSeconds())}`

  const dateFormatted = dayjs(date)
    .set('hour', now.getHours() - 3)
    .set('minute', now.getMinutes())
    .set('second', now.getSeconds())
    .toISOString()
  // const dateFormatted = `${date}T${addZeroToDate(
  //   now.getHours() - 3
  // )}:${addZeroToDate(now.getMinutes())}:${addZeroToDate(now.getSeconds())}.000Z`

  // const dateFormatted = new Date(dateAdjustment)

  const item = await prisma.item.create({
    data: {
      date: new Date(date),
      category,
      title,
      value,
      user: {
        connect: {
          id
        }
      }
    }
  })

  return item
}

export const updateItem = async (
  id: string,
  idUser: string,
  updateData: updateItemProps
) => {
  const item = await prisma.item.update({
    where: {
      id
    },
    data: {
      ...updateData,
      user: {
        connect: {
          id: idUser
        }
      }
    }
  })

  return item
}

export const deleteItem = async (id: string) => {
  const item = await prisma.item.delete({
    where: { id }
  })

  return item
}
