import type { NextApiRequest, NextApiResponse } from 'next'
import {
  createItem,
  deleteItem,
  getAllItems,
  getItem,
  updateItem
} from '@/services/item'
import { getSession } from 'next-auth/react'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })

  if (!session) {
    res.status(401).json({ message: 'Unauthorized' })
    return
  }

  try {
    switch (req.method) {
      case 'GET': {
        if (req.query.id) {
          const item = await getItem(req.query.id as string)
          return res.status(200).json(item)
        } else {
          const items = await getAllItems()
          return res.json(items)
        }
      }

      case 'POST': {
        const { date, category, title, value, id } = req.body
        const item = await createItem(date, category, title, value, id)
        return res.json(item)
      }

      case 'PUT': {
        const { id, idUser, ...updateData } = req.body
        const item = await updateItem(id, idUser, updateData)
        return res.json(item)
      }

      case 'DELETE': {
        const { id } = req.body
        const item = await deleteItem(id)
        return res.json(item)
      }
      default:
        break
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
