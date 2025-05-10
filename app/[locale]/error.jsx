'use client'

import EaseAnimation from '@/components/ui/EaseAnimation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRouter } from '@/i18n/routing'

export default function Error({ error, reset }) {
  const router = useRouter()
  const t = useTranslations('error')

  return (
    <EaseAnimation delay={200} translateY={20}>
      <div className="mx-auto flex min-h-[80vh] flex-col items-center justify-center gap-10 px-4 text-center lg:flex-row lg:gap-20">
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="/Media/error.svg"
            alt="Error"
            width={500}
            height={500}
            priority
            className="inset-0 m-auto mx-auto h-auto w-[300px] object-contain md:w-[400px] lg:w-[500px]"
          />
        </div>

        <div className="flex max-w-lg flex-col items-center justify-center gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-neutral-300 md:text-5xl">
              {t('somethingWentWrong')}
            </h2>
            <p className="text-base font-medium text-zinc-200 md:text-lg">
              {`${t('error')}: ${error.message}`}
            </p>
            <p className="text-base font-medium text-zinc-200 md:text-lg">
              {t('somethingWentWrongDescription')}
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => router.back()}
              className="inline-block rounded-xl border border-neutral-300/30 bg-white/10 px-3 py-2.5 text-neutral-100 backdrop-blur-md transition duration-200 hover:bg-white/15"
            >
              {t('goBack')}
            </button>
            <button
              onClick={() => reset()}
              className="inline-block rounded-xl border border-neutral-300/30 bg-white/10 px-4 py-2.5 text-neutral-100 backdrop-blur-md transition duration-200 hover:bg-white/15"
            >
              {t('tryAgain')}
            </button>
          </div>
        </div>
      </div>
    </EaseAnimation>
  )
}
