export interface ButtonProps {
  type: 'button' | 'submit' | 'reset'
  disabled?: boolean
  isLoading?: boolean
  children: React.ReactNode
  onClick?: () => void
}
