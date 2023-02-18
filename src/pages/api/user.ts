import type { NextApiRequest, NextApiResponse } from 'next'
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
  userExists
} from '@/services/user'
import { getSession } from 'next-auth/react'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })

  if (!session) {
    res.status(401).json({ message: 'Você não está autenticado' })
    return
  }

  try {
    switch (req.method) {
      case 'GET': {
        if (req.query.id) {
          const user = await getUser(req.query.id as string)
          return res.status(200).json(user)
        } else {
          const users = await getAllUsers()
          return res.json(users)
        }
      }

      case 'POST': {
        const { name, email, password, role } = req.body
        if (await userExists(email)) {
          res.status(404).json({ error: 'Usuário já existe' })

          return
        }

        const user = await createUser(name, email, password, role)
        return res.json(user)
      }

      case 'PUT': {
        const { id, ...updateData } = req.body
        const user = await updateUser(id, updateData)
        return res.json(user)
      }

      case 'DELETE': {
        const { id } = req.body
        const user = await deleteUser(id)
        return res.json(user)
      }
      default:
        break
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
