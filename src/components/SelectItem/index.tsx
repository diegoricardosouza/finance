import React from 'react'
import * as Select from '@radix-ui/react-select'
import { MdCheck } from 'react-icons/md'

import * as S from './styles'

interface SelectItemProps {
  children: React.ReactNode
  value: string
}

// eslint-disable-next-line react/display-name
const SelectItem = React.forwardRef<HTMLInputElement, SelectItemProps>(
  ({ children, ...props }, ref) => {
    return (
      <S.StyledItems {...props} ref={ref}>
        <Select.ItemText>{children}</Select.ItemText>

        <S.StyledItemIndicator>
          <MdCheck size={15} />
        </S.StyledItemIndicator>
      </S.StyledItems>
    )
  }
)

export default SelectItem
