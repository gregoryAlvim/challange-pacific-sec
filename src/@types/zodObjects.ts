import * as z from 'zod'
import { calcUserAge } from '../utils/calcUserAge'

const noScripts = (value: string) => {
  const scriptRegex = /<script\b[^>]*>[\s\S]*<\/script>/i
  return scriptRegex.test(value) ? null : value
}

export const UserSchema = z.object({
  name: z
    .string()
    .nonempty('O nome é obrigatório')
    .refine(noScripts, {
      message: 'Este campo não permite scripts.',
    })
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
  dateOfBirth: z
    .string()
    .nonempty('A data de nascimento é obrigatória')
    .refine((value) => (calcUserAge(value) < 18 ? null : value), {
      message: 'Usuário menor de idade',
    }),
  phone: z.string().nonempty('O telefone é obrigatório').refine(noScripts, {
    message: 'Este campo não permite scripts.',
  }),
  linkedin: z.string().optional(),
  github: z.string().optional(),
})
