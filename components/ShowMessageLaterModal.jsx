'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Button } from '@headlessui/react'
import { useTranslations } from 'next-intl'

export const ShowMessageLaterModal = ({ children, message }) => {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('projects')
  return (
    <div>
      <div onClick={() => setIsOpen(true)}>{children}</div>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-[100] focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 z-[100] bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 z-[101] w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="data-[closed]:transform-[scale(95%)] w-full max-w-md rounded-xl border border-white/25 bg-indigo-400/5 p-6 backdrop-blur-xl transition-all duration-200 ease-out data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base font-semibold text-white"
              >
                {t('Disclaimer')}
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-zinc-300">{message || ''}</p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-indigo-400/15 px-3 py-1.5 text-sm/6 font-semibold text-white transition-all duration-200 hover:border-indigo-200/20 focus:outline-none data-[hover]:bg-indigo-400/25 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                  onClick={() => {
                    setIsOpen(false)
                  }}
                >
                  {t('GotIt')}
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default ShowMessageLaterModal
