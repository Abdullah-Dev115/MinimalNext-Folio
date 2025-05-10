'use server'

import { getTranslations } from 'next-intl/server'
import { z } from 'zod'

export const getContactFormSchema = async () => {
  const t = await getTranslations('validation')
  return z.object({
    firstname: z.string().min(2, t('firstNameMin')).max(50, t('firstNameMax')),
    lastname: z.string().min(2, t('lastNameMin')).max(50, t('lastNameMax')),
    email: z.string().email(t('email')),
    phone: z.string().min(10, t('phoneMin')),
    message: z.string().min(10, t('messageMin')).max(1000, t('messageMax')),
  })
}

export async function SendContact(prevState, formData) {
  try {
    // Extract form data
    const rawData = {
      firstname: formData.get('firstname'),
      lastname: formData.get('lastname'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    }

    // Get the schema with translations
    const schema = await getContactFormSchema()

    // Validate the form data
    const validatedData = schema.safeParse(rawData)

    if (!validatedData.success) {
      const fieldErrors = validatedData.error.flatten().fieldErrors
      return {
        status: 'ERROR',
        error: 'Please check your inputs',
        fieldErrors,
      }
    }

    // Submit form to formspree
    const response = await fetch(`${process.env.CONTACT_FORM_POST_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedData.data),
    })

    if (!response.ok) {
      throw new Error('Failed to send message')
    }

    const t = await getTranslations('validation')
    return {
      status: 'SUCCESS',
      message: t('messageSentSuccessfully'),
    }
  } catch (error) {
    console.error('Form error:', error)

    const t = await getTranslations('validation')
    return {
      status: 'ERROR',
      error: t('failedToSendMessage'),
    }
  }
}
