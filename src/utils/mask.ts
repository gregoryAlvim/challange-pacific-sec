export const maskPhone = (value: string) => {
  const numericValue = value.replace(/\D/g, '')

  const maskedValue = numericValue.replace(
    /^(\d{2})(\d{1,5})(\d{0,4}).*$/,
    '($1) $2-$3',
  )

  return maskedValue
}
