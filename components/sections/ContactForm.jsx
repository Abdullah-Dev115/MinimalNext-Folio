'use client'

import { useActionState } from 'react'
import { useTranslations } from 'next-intl'

import { GridBackground } from '../ui/backgrounds/GridBackground'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Send } from '@mynaui/icons-react'
import { SendContact } from '@/lib/actions'

const initialState = {
  error: '',
  status: 'INITIAL',
  fieldErrors: {},
}

const ContactForm = () => {
  const t = useTranslations('sections.ContactMe')
  const [state, formAction, isPending] = useActionState(
    SendContact,
    initialState
  )

  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden rounded-xl opacity-90">
        <GridBackground />
      </div>

      <div className="container mx-auto">
        <div className="relative flex-col rounded-xl border border-white/40 bg-transparent p-4 shadow-md sm:p-6 lg:p-8">
          <form action={formAction}>
            <div className="grid gap-4 lg:gap-6">
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="firstname"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    {t('firstName')}
                  </label>
                  <Input
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder={t('Ahmed')}
                    required
                  />
                  {state?.fieldErrors?.firstname && (
                    <p className="mt-1 h-2 text-sm text-red-500">
                      {state.fieldErrors.firstname}
                    </p>
                  )}
                </div>

                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="lastname"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    {t('lastName')}
                  </label>
                  <Input
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder={t('Mohammed')}
                    required
                  />

                  {state?.fieldErrors?.lastname && (
                    <p className="mt-1 h-2 text-sm text-red-500">
                      {state.fieldErrors.lastname}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    {t('email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                  />
                  {state?.fieldErrors?.email && (
                    <p className="mt-1 h-2 text-sm text-red-500">
                      {state.fieldErrors.email}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    {t('phoneNumber')}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="05XXXXXXXX"
                    required
                  />
                  {state?.fieldErrors?.phone && (
                    <p className="mt-1 h-2 text-sm text-red-500">
                      {state.fieldErrors.phone}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    {t('message')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t('howCanIHelpYou')}
                    required
                  />
                  {state?.fieldErrors?.message && (
                    <p className="mt-1 h-2 text-sm text-red-500">
                      {state.fieldErrors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 grid">
                <button
                  type="submit"
                  disabled={isPending}
                  className="group flex items-center justify-center gap-2 rounded-lg bg-indigo-600 py-3 text-center text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-white lg:text-base"
                >
                  {isPending ? t('submitting') : t('send')}
                  <Send className="mt-1 size-5 text-white transition-all duration-150 group-hover:-rotate-45" />
                </button>
              </div>

              {state?.status === 'SUCCESS' && (
                <p className="mt-1 h-3 text-center text-lg font-medium text-green-500">
                  {state.message}
                </p>
              )}

              {state?.status === 'ERROR' && (
                <p className="mt-1 h-3 text-center text-lg font-medium text-red-500">
                  {state.error}
                </p>
              )}

              <div className="text-center">
                <p className="text-sm text-gray-400">
                  {t('iWillTryToResponedInTheFastestICan')}
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
