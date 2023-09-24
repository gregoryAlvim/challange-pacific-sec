import { ElementType } from 'react'

interface InputIconProps {
  icon: ElementType
}

export function InputIcon({ icon: Icon }: InputIconProps) {
  return <Icon size={24} />
}
