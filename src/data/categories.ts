import { Category } from '@/types/Category'

export const categories: Category = {
  food: { title: 'Alimentação', expense: true },
  rent: { title: 'Despesa', expense: true },
  marketplace: { title: 'Mercado', expense: true },
  salary: { title: 'Salário', expense: false }
}
