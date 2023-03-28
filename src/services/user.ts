import { hashPassword } from '@/utils/passwordHash'
import prisma from '../lib/db'

interface updateUserProps {
  name: string
  email: string
  password?: string
}

export const getAllUsers = async () => {
  const users = await prisma.user.findMany({})
  return users
}

export const getUser = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id }
  })

  return user
}

export const userExists = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email }
  })

  return user
}

export const createUser = async (
  name: string,
  email: string,
  password: string,
  role: string
) => {
  const passwordHash = await hashPassword(password)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: passwordHash,
      role
    }
  })

  return user
}

export const updateUser = async (id: string, updateData: updateUserProps) => {
  let user = {}

  user = await prisma.user.update({
    where: {
      id
    },
    data: {
      ...updateData
    }
  })

  if (updateData.password) {
    const passwordHash = await hashPassword(updateData.password as string)
    user = await prisma.user.update({
      where: { id },
      data: {
        ...updateData,
        password: passwordHash
      }
    })
  }

  return user
}

export const deleteUser = async (id: string) => {
  const user = await prisma.user.delete({
    where: { id }
  })

  return user
}
