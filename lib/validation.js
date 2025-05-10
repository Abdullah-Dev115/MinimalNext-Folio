import { z } from 'zod'

// Validation schema for contact form
export const formSchema = (t) =>
  z.object({
    firstname: z
      .string()
      .min(2, t('validation.firstNameMin'))
      .max(50, t('validation.firstNameMax')),
    lastname: z
      .string()
      .min(2, t('validation.lastNameMin'))
      .max(50, t('validation.lastNameMax')),
    email: z.string().email(t('validation.email')),
    phone: z.string().min(10, t('validation.phoneMin')),
    message: z
      .string()
      .min(10, t('validation.messageMin'))
      .max(1000, t('validation.messageMax')),
  })
