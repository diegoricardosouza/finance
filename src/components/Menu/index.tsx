import { useState } from 'react'
import { signOut } from 'next-auth/react'
import {
  MdHome,
  MdTableChart,
  MdLogout,
  MdOutlineClose,
  MdOutlineMenu
} from 'react-icons/md'
import { TbLayoutKanban } from 'react-icons/tb'
import { ImUser } from 'react-icons/im'
import { TbReportMoney } from 'react-icons/tb'

import Logo from '../Logo'
import MenuItem from '../MenuItem'

import * as S from './styles'

const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <S.Overlay open={open} />
      <S.ButtonOpenMenu>
        <button onClick={() => setOpen(!open)} aria-label="Open Menu">
          <MdOutlineMenu size={28} />
        </button>
      </S.ButtonOpenMenu>

      <S.Container open={open}>
        <S.WrapperLogo>
          <S.ButtonClose>
            <button onClick={() => setOpen(!open)} aria-label="Close Menu">
              <MdOutlineClose size={24} />
            </button>
          </S.ButtonClose>

          <Logo />
        </S.WrapperLogo>

        <S.WrapperMenu>
          <ul>
            <MenuItem href="/dashboard" icon={<MdHome size={20} />}>
              Dashboard
            </MenuItem>

            <MenuItem
              href="/dashboard/finance"
              icon={<TbReportMoney size={20} />}
            >
              Financeiro
            </MenuItem>

            <MenuItem
              href="/dashboard/freela"
              icon={<MdTableChart size={20} />}
            >
              Freelas
            </MenuItem>

            <MenuItem href="/" icon={<TbLayoutKanban size={20} />}>
              Kanban
            </MenuItem>

            <MenuItem href="/dashboard/profile" icon={<ImUser size={20} />}>
              Profile
            </MenuItem>

            <S.LogoutWrapper>
              <S.Logout
                onClick={() =>
                  signOut({
                    callbackUrl: `${window.location.origin}`
                  })
                }
                aria-label="Logout"
              >
                <S.IconMenu>
                  <MdLogout size={20} />
                </S.IconMenu>
                Sair
              </S.Logout>
            </S.LogoutWrapper>
          </ul>
        </S.WrapperMenu>
      </S.Container>
    </>
  )
}

export default Menu
