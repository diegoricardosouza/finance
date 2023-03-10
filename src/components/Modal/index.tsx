import { MdClose } from 'react-icons/md'

import * as S from './styles'

interface ModalProps {
  children: React.ReactNode
  visible: boolean
  onClose: () => void
}

const Modal = ({ children, visible, onClose }: ModalProps) => {
  return (
    <>
      <S.Overlay open={visible} />

      <S.Container open={visible}>
        <S.CloseButton onClick={onClose} aria-label="Close Modal">
          <MdClose size={23} />
        </S.CloseButton>

        {children}
      </S.Container>
    </>
  )
}

export default Modal
