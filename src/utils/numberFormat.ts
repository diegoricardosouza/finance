import { ChangeEvent } from 'react'

export const convertMoney = (e: ChangeEvent<HTMLInputElement>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let v: any = e.currentTarget.value.replace(/\D/g, '')
  v = (v / 100).toFixed(2) + ''
  v = v.replace('.', ',')
  v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  return (e.currentTarget.value = v)
}
