import * as z from 'zod'
import * as S from './styles'
import {
  User,
  Phone,
  Calendar,
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
} from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputWithIcon } from '../../components/InputWithIcon'
import { DefaultButton } from '../../components/DefaultButton'
import { ErrorMessage } from '../../components/ErrorMessage'

export function UserForm() {
  const newUserFormSchema = z.object({
    name: z
      .string()
      .nonempty('O nome é obrigatório')
      .transform((name) => {
        return name
          .trim()
          .split(' ')
          .map((word) => {
            return word[0].toLocaleUpperCase().concat(word.substring(1))
          })
          .join(' ')
      }),
    email: z
      .string()
      .nonempty('O e-mail é obrigatório')
      .email('Formato de e-mail inválido')
      .toLowerCase(),
    dateOfBirth: z.string().nonempty('A data de nascimento é obrigatória'),
    phone: z.string().nonempty('O telefone é obrigatório'),
    linkedin: z.string().optional(),
    github: z.string().optional(),
  })

  type NewUserFormInputs = z.infer<typeof newUserFormSchema>

  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<NewUserFormInputs>({
    resolver: zodResolver(newUserFormSchema),
  })

  function handleUserDataFromForm(data: NewUserFormInputs) {
    console.log(data)
  }

  return (
    <S.UserFormContainer>
      <S.UserForm onSubmit={handleSubmit(handleUserDataFromForm)}>
        <h1>Formulário de entrada</h1>

        <InputWithIcon icon={User}>
          <S.InputField type="text" {...register('name')} placeholder="Nome" />
          {errors.name && <ErrorMessage message={errors.name.message ?? ''} />}
        </InputWithIcon>

        <InputWithIcon icon={EnvelopeSimple}>
          <S.InputField
            type="email"
            placeholder="E-mail"
            {...register('email')}
          />
          {errors.email && (
            <ErrorMessage message={errors.email.message ?? ''} />
          )}
        </InputWithIcon>

        <InputWithIcon icon={Calendar}>
          <S.InputField
            type="date"
            placeholder="Idade"
            title="Data de nascimento"
            {...register('dateOfBirth')}
          />
          {errors.dateOfBirth && (
            <ErrorMessage message={errors.dateOfBirth.message ?? ''} />
          )}
        </InputWithIcon>

        <InputWithIcon icon={Phone}>
          <S.InputField
            type="text"
            placeholder="Telefone"
            {...register('phone')}
          />
          {errors.phone && (
            <ErrorMessage message={errors.phone.message ?? ''} />
          )}
        </InputWithIcon>

        <InputWithIcon icon={LinkedinLogo}>
          <S.InputField
            type="url"
            placeholder="Linkedin"
            {...register('linkedin')}
          />
          {errors.linkedin && (
            <ErrorMessage message={errors.linkedin.message ?? ''} />
          )}
        </InputWithIcon>

        <InputWithIcon icon={GithubLogo}>
          <S.InputField
            type="url"
            placeholder="GitHub"
            {...register('github')}
          />
          {errors.github && (
            <ErrorMessage message={errors.github.message ?? ''} />
          )}
        </InputWithIcon>

        <DefaultButton
          type="submit"
          disabled={isSubmitting}
          title="Registrar dados"
        />
      </S.UserForm>
    </S.UserFormContainer>
  )
}
