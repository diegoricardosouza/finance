export interface HeaderProps {
  title: string
  titleBreadcrumb: string
}

export interface BaseProps extends HeaderProps {
  children: React.ReactNode
}
