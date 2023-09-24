import { differenceInYears, parse } from 'date-fns'

export function calcUserAge(dataNascimento: string): number {
  const dataNascimentoObj = parse(dataNascimento, 'yyyy-MM-dd', new Date())

  const dataAtual = new Date()

  const idade = differenceInYears(dataAtual, dataNascimentoObj)

  return idade
}
