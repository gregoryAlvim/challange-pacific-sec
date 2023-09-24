import * as S from './styles'

interface DetailDataProps {
  title: string
  description: string
}

export function DetailData({ title, description }: DetailDataProps) {
  return (
    <S.ItemContainer>
      <S.Label htmlFor={title}>{`${title}:`}</S.Label>
      <S.Description id={title}>{description}</S.Description>
    </S.ItemContainer>
  )
}
