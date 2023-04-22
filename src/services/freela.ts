import prisma from '../lib/db'

interface createItemProps {
  title: string
  value: number
  id: string
  active: boolean
}

interface updateItemProps {
  updateData?: createItemProps
}

export const getAllItems = async () => {
  return await prisma.freela.findMany({})
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

export const updateItem = async (
  id: string,
  idUser: string,
  updateData: updateItemProps
) => {
  const item = await prisma.freela.update({
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
  const item = await prisma.freela.delete({
    where: { id }
  })

  return item
}
