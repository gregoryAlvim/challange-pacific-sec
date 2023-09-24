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
import { useNavigate } from 'react-router-dom'
import { maskPhone } from '../../../../utils/mask'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserSchema } from '../../../../@types/zodObjects'
import { useUserContext } from '../../../../hooks/useUserContext'
import { CustomInput } from '../../../../components/InputWithIcon'
import { ErrorMessage } from '../../../../components/ErrorMessage'
import { DefaultButton } from '../../../../components/DefaultButton'

export function Form() {
  const navigate = useNavigate()
  const { createNewUser } = useUserContext()

  const newUserFormSchema = UserSchema
  type NewUserFormInputs = z.infer<typeof newUserFormSchema>

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<NewUserFormInputs>({
    resolver: zodResolver(newUserFormSchema),
  })

  function handleUserDataFromForm(data: NewUserFormInputs) {
    createNewUser(data)
    reset()
    navigate('/user-details')
  }

  return (
    <S.UserForm onSubmit={handleSubmit(handleUserDataFromForm)}>
      <h1>Formulário de entrada</h1>

      <CustomInput.Root>
        <CustomInput.Icon icon={User} />
        <CustomInput.Field
          type="text"
          placeholder="Nome"
          {...register('name')}
        />
        {errors.name && <ErrorMessage message={errors.name.message ?? ''} />}
      </CustomInput.Root>

      <CustomInput.Root>
        <CustomInput.Icon icon={EnvelopeSimple} />
        <CustomInput.Field
          type="email"
          placeholder="E-mail"
          {...register('email')}
        />
        {errors.email && <ErrorMessage message={errors.email.message ?? ''} />}
      </CustomInput.Root>

      <CustomInput.Root>
        <CustomInput.Icon icon={Calendar} />
        <CustomInput.Field
          type="date"
          title="Data de nascimento"
          {...register('dateOfBirth')}
        />
        {errors.dateOfBirth && (
          <ErrorMessage message={errors.dateOfBirth.message ?? ''} />
        )}
      </CustomInput.Root>

      <CustomInput.Root>
        <CustomInput.Icon icon={Phone} />
        <Controller
          name="phone"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <CustomInput.Field
              type="text"
              id="phone"
              placeholder="(00) 0000-0000"
              onChange={(e) => {
                const maskedValue = maskPhone(e.target.value)
                e.target.value = maskedValue
                field.onChange(maskedValue)
              }}
            />
          )}
        />
        {errors.phone && <ErrorMessage message={errors.phone.message ?? ''} />}
      </CustomInput.Root>

      <CustomInput.Root>
        <CustomInput.Icon icon={LinkedinLogo} />
        <CustomInput.Field
          type="url"
          placeholder="Linkedin"
          {...register('linkedin')}
        />
        {errors.linkedin && (
          <ErrorMessage message={errors.linkedin.message ?? ''} />
        )}
      </CustomInput.Root>

      <CustomInput.Root>
        <CustomInput.Icon icon={GithubLogo} />
        <CustomInput.Field
          type="url"
          placeholder="GitHub"
          {...register('github')}
        />
        {errors.github && (
          <ErrorMessage message={errors.github.message ?? ''} />
        )}
      </CustomInput.Root>

      <DefaultButton
        type="submit"
        disabled={isSubmitting}
        title="Registrar dados"
      />
    </S.UserForm>
  )
}
