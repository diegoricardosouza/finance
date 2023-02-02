import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { RiDeleteBinLine } from 'react-icons/ri'

import * as S from './styles'

interface ButtonDeleteProps {
  id?: string
  title: string
  content: string
  titleCancel: string
  titleConfirm: string
  onClick?: () => void
}

const ButtonDelete = ({
  title,
  content,
  titleCancel,
  titleConfirm,
  onClick
}: ButtonDeleteProps) => {
  return (
    <AlertDialog.Root>
      <S.StyledAlertDialogTrigger asChild>
        <button>
          <RiDeleteBinLine size={17} />
        </button>
      </S.StyledAlertDialogTrigger>

      <AlertDialog.Portal>
        <S.StyledAlertDialogOverlay />

        <S.StyledAlertDialogContent>
          <S.StyledAlertDialogTitle>{title}</S.StyledAlertDialogTitle>

          <S.StyledAlertDialogDescription>
            {content}
          </S.StyledAlertDialogDescription>

          <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
            <S.StyledAlertDialogCancel asChild>
              <button className="Button">{titleCancel}</button>
            </S.StyledAlertDialogCancel>

            <S.StyledAlertDialogAction asChild>
              <button className="Button red" onClick={onClick}>
                {titleConfirm}
              </button>
            </S.StyledAlertDialogAction>
          </div>
        </S.StyledAlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

export default ButtonDelete
