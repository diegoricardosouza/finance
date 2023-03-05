import type { NextApiRequest, NextApiResponse } from 'next'
import {
  createItem,
  deleteItem,
  getAllItems,
  getAllItemsByDate,
  getAllItemsByYear,
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
        }

        if (req.query.date) {
          const date = req.query.date as string
          const [year, month] = date.split('-')

          const page = req.query.page ? Number(req.query.page) : 1
          const limit = req.query.limit ? Number(req.query.limit) : 10

          const item = await getAllItemsByDate(
            parseInt(year),
            parseInt(month),
            String(page),
            String(limit)
          )

          if (req.query.limit === '-1') {
            const item = await getAllItemsByDate(
              parseInt(year),
              parseInt(month),
              String(page),
              String('1000000')
            )

            return res.status(200).json({
              item: item.items
            })
          }

          return res.status(200).json({
            item: item.items,
            totalPages: item.totalPages,
            currentPage: Number(page)
          })
        }

        if (req.query.year) {
          const year = req.query.year as string

          const item = await getAllItemsByYear(parseInt(year))
          return res.status(200).json(item)
        }

        const items = await getAllItems()
        return res.json(items)
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
