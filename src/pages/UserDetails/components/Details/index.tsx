import * as S from './styles'
import { useNavigate } from 'react-router-dom'

import { UserType } from '../../../../@types/mockes'
import { dateFormatter } from '../../../../utils/formatter'
import { calcUserAge } from '../../../../utils/calcUserAge'
import { DetailData } from '../../../../components/DetailData'
import { useUserContext } from '../../../../hooks/useUserContext'
import { Eraser, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

interface DetailsProps {
  data: UserType
}

export function Details({ data }: DetailsProps) {
  const navigate = useNavigate()
  const { deleteUserData } = useUserContext()

  function handleResetUserData() {
    deleteUserData(null)
    navigate('/challange-pacific-sec')
  }

  return (
    <S.UserDetails>
      <h1>Detalhes do usuário</h1>
      <DetailData title="Nome" description={data.name} />
      <DetailData
        title="Idade"
        description={calcUserAge(data.dateOfBirth).toString()}
      />
      <DetailData
        title="Data de nascimento"
        description={dateFormatter.format(new Date(data.dateOfBirth))}
      />
      <DetailData title="E-mail" description={data.email} />
      <DetailData title="Telefone" description={data.phone} />

      <S.LinksContainer>
        <S.LinkIcon
          target="_blank"
          title="Linkedin"
          variant="linkedin"
          className={data.linkedin === '' ? 'noHaveLink' : ''}
          {...(data.linkedin !== '' && { href: data.linkedin })}
        >
          <LinkedinLogo size={32} />
        </S.LinkIcon>

        <S.LinkIcon
          title="GitHub"
          target="_blank"
          variant="github"
          className={data.github === '' ? 'noHaveLink' : ''}
          {...(data.github !== '' && { href: data.github })}
        >
          <GithubLogo size={32} />
        </S.LinkIcon>

        <S.ButtonIcon title="Limpar dados" onClick={handleResetUserData}>
          <Eraser size={32} />
        </S.ButtonIcon>
      </S.LinksContainer>
    </S.UserDetails>
  )
}
