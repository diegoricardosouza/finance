interface SelectItem {
  title: string
  value: string
}

export interface SelectProps {
  label: string
  items: SelectItem[]
  selected?: string
}
