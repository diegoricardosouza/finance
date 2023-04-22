import prisma from '../lib/db'

interface updateItemProps {
  active?: boolean
}

export const getAllItems = async () => {
  return await prisma.freela.findMany({
    orderBy: [{ active: 'asc' }, { title: 'asc' }]
  })
}

export const getItem = async (id: string) => {
  const item = await prisma.freela.findUnique({
    where: { id }
  })

  return item
}

export const createItem = async (
  title: string,
  value: number,
  id: string,
  active: boolean
) => {
  const item = await prisma.freela.create({
    data: {
      title,
      value,
      active,
      user: {
        connect: {
          id
        }
      }
    }
  })

  return item
}

export const updateItem = async (id: string, updateData: updateItemProps) => {
  const item = await prisma.freela.update({
    where: {
      id
    },
    data: {
      active: updateData.active
    }
  })

  return item
}

export const deleteItem = async (id: string) => {
  const item = await prisma.freela.delete({
    where: { id }
  })

  return item
}
