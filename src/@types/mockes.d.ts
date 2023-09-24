import * as z from 'zod'
import { UserSchema } from './zodObjects'

export type UserType = z.infer<typeof UserSchema>
