import prisma from '../lib/db'

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

export const getAllItemsByDate = async (year: number, month: number) => {
  const firstDayOfMonth = new Date(year, month - 1, 1).toISOString()
  const lastDayOfMonth = new Date(year, month, 0).toISOString()

  const items = await prisma.item.findMany({
    where: {
      date: {
        gte: new Date(firstDayOfMonth),
        lt: new Date(lastDayOfMonth)
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
  const dateString = date
  const now = new Date()

  const dateParts = dateString.split('-')
  const year = parseInt(dateParts[0])
  const month = parseInt(dateParts[1]) - 1
  const day = parseInt(dateParts[2])
  const utcDate = Date.UTC(year, month, day)
  const localDate = new Date(
    utcDate + new Date().getTimezoneOffset() * 60 * 1000
  )
  localDate.setHours(now.getHours())
  localDate.setMinutes(now.getMinutes())
  localDate.setSeconds(now.getSeconds())
  const dateFormatted = localDate.toISOString()

  const item = await prisma.item.create({
    data: {
      date: dateFormatted,
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
