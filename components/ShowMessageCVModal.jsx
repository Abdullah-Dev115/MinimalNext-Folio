'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Button } from '@headlessui/react'
import { TbFileCv } from 'react-icons/tb'
import { useTranslations } from 'next-intl'

const ShowMessageCVModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('cvModal')

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="flex w-fit cursor-pointer items-center gap-1 rounded-2xl border border-neutral-300/40 p-1 px-2 py-2 transition duration-200 hover:border-neutral-300/60 hover:bg-neutral-300/20 md:rounded-xl md:py-1"
        aria-label="CV"
      >
        <TbFileCv className="size-6 md:size-5" />
        <span className="hidden md:block">{t('CV')}</span>
      </div>

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
              <p className="mt-2 text-sm/6 text-zinc-300">
                {t('CVLastUpdatedOn')}
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-indigo-400/15 px-3 py-1.5 text-sm/6 font-semibold text-white transition-all duration-200 hover:border-indigo-200/20 focus:outline-none data-[hover]:bg-indigo-400/25 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                  onClick={() => {
                    setIsOpen(false)
                    window.open('./Media/MyCV.pdf', '_blank')
                  }}
                >
                  {t('Download')}
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default ShowMessageCVModal
