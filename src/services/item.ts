import { addZeroToDate } from '@/utils/dateFilter'
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

export const getAllItemsByDate = async (
  year: number,
  month: number,
  page?: string,
  limit?: string
) => {
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

  // // Obtém o deslocamento UTC em minutos
  // const utcOffsetInMinutes = now.getTimezoneOffset()

  // // Converte o deslocamento UTC para milissegundos
  // const utcOffsetInMilliseconds = utcOffsetInMinutes * 60 * 1000

  // // Adiciona o deslocamento UTC ao horário atual para obter o horário UTC do Brasil
  // const utcTimeInBrazil = now.getTime() + utcOffsetInMilliseconds

  // // Cria um novo objeto Date a partir do horário UTC do Brasil
  // const dateInBrazil = new Date(utcTimeInBrazil)

  // const dateFormatted = dayjs(date)
  //   .locale('pt-br')
  //   .set('hour', now.getHours())
  //   .set('minute', now.getMinutes())
  //   .set('second', now.getSeconds())
  //   .toISOString()
  const dateFormatted = `${date}T${addZeroToDate(
    now.getHours() as number
  )}:${addZeroToDate(now.getMinutes() as number)}:${addZeroToDate(
    now.getSeconds()
  )}.000Z`

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
