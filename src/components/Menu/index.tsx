import { useState } from 'react'
import {
  MdHome,
  MdTableChart,
  MdLock,
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
            <MenuItem href="/dashboard" icon={<MdHome size={20} />}>
              Dashboard
            </MenuItem>

            <MenuItem href="/finance" icon={<TbReportMoney size={20} />}>
              Financeiro
            </MenuItem>

            <MenuItem href="/" icon={<MdTableChart size={20} />}>
              Tables
            </MenuItem>

            <MenuItem href="/" icon={<TbLayoutKanban size={20} />}>
              Kanban
            </MenuItem>

            <MenuItem href="/" icon={<ImUser size={20} />}>
              Profile
            </MenuItem>

            <MenuItem href="/" icon={<MdLock size={20} />}>
              Sign In
            </MenuItem>
          </ul>
        </S.WrapperMenu>
      </S.Container>
    </>
  )
}

export default Menu
