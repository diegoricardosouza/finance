import Link from 'next/link'
import {
  MdHome,
  MdOutlineShoppingCart,
  MdTableChart,
  MdLock,
  MdOutlineClose,
  MdOutlineMenu
} from 'react-icons/md'
import { TbLayoutKanban } from 'react-icons/tb'
import { ImUser } from 'react-icons/im'

import Logo from '../Logo'
import * as S from './styles'
import { useState } from 'react'

const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <S.Overlay open={open} />
      <S.ButtonOpenMenu>
        <button onClick={() => setOpen(!open)}>
          <MdOutlineMenu size={28} />
        </button>
      </S.ButtonOpenMenu>

      <S.Container open={open}>
        <S.WrapperLogo>
          <S.ButtonClose>
            <button onClick={() => setOpen(!open)}>
              <MdOutlineClose size={24} />
            </button>
          </S.ButtonClose>

          <Logo />
        </S.WrapperLogo>

        <S.WrapperMenu>
          <ul>
            <S.ItemMenu active>
              <Link href="/">
                <S.IconMenu>
                  <MdHome size={20} />
                </S.IconMenu>
                Dashboard
              </Link>
            </S.ItemMenu>

            <S.ItemMenu>
              <Link href="/">
                <S.IconMenu>
                  <MdOutlineShoppingCart size={20} />
                </S.IconMenu>
                NFT Marketplace
              </Link>
            </S.ItemMenu>

            <S.ItemMenu>
              <Link href="/">
                <S.IconMenu>
                  <MdTableChart size={20} />
                </S.IconMenu>
                Tables
              </Link>
            </S.ItemMenu>

            <S.ItemMenu>
              <Link href="/">
                <S.IconMenu>
                  <TbLayoutKanban size={20} />
                </S.IconMenu>
                Kanban
              </Link>
            </S.ItemMenu>

            <S.ItemMenu>
              <Link href="/">
                <S.IconMenu>
                  <ImUser size={20} />
                </S.IconMenu>
                Profile
              </Link>
            </S.ItemMenu>

            <S.ItemMenu>
              <Link href="/">
                <S.IconMenu>
                  <MdLock size={20} />
                </S.IconMenu>
                Sign In
              </Link>
            </S.ItemMenu>
          </ul>
        </S.WrapperMenu>
      </S.Container>
    </>
  )
}

export default Menu
