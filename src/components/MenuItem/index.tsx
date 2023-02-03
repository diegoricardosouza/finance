import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'
import * as S from './styles'

interface MenuItemProps {
  children: React.ReactNode
  href: string
  icon?: React.ReactNode
}

const MenuItem = ({ children, href, icon }: MenuItemProps) => {
  const router = useRouter()
  const { asPath } = router
  const active = asPath === href

  const handleClick = (e: FormEvent) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <S.ItemMenu active={active}>
      <Link href={href} onClick={handleClick}>
        {icon && <S.IconMenu>{icon}</S.IconMenu>}

        {children}
      </Link>
    </S.ItemMenu>
  )
}

export default MenuItem
