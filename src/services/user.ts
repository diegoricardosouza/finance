import { hashPassword } from '@/utils/passwordHash'
import prisma from '../lib/db'

interface createUserProps {
  name: string
  email: string
  password: string
  role: string
}

interface updateUserProps {
  updateData?: createUserProps
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
  const user = await prisma.user.update({
    where: {
      id
    },
    data: {
      ...updateData
    }
  })

  return user
}

export const deleteUser = async (id: string) => {
  const user = await prisma.user.delete({
    where: { id }
  })

  return user
}
