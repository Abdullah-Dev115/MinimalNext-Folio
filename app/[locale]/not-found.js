'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

import EaseAnimation from '@/components/ui/EaseAnimation'
import FuzzyText from '@/components/ui/FuzzyText'

// Notice that this is not a next/link Link component, it is a Link component from the i18n/routing library
import { Link } from '@/i18n/routing'
// If you want to use the Link component from next/link, first import the usePathname hook:
// import { usePathname } from 'next/navigation'
// then use this code:
// const locale = pathname.split('/')[1]
// then make sure to specify the locale in the href:
// <Link href={`${locale}/`}>

export const dynamic = 'force-dynamic'

export default function NotFound() {
  const t = useTranslations('notFoundPage')

  return (
    <EaseAnimation delay={200} translateY={20}>
      <div className="mx-auto flex min-h-[80vh] flex-col items-center justify-center gap-10 px-4 text-center lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="/Media/Dead.svg"
            alt="404"
            width={500}
            height={500}
            priority
            className="inset-0 m-auto mx-auto h-auto w-[300px] object-contain md:w-[400px] lg:w-[500px]"
          />
        </div>

        <div className="flex max-w-lg flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <FuzzyText
              baseIntensity={0.09}
              hoverIntensity={0.5}
              enableHover={true}
              fontSize="7rem"
            >
              404
            </FuzzyText>
            <FuzzyText
              baseIntensity={0.09}
              hoverIntensity={0.5}
              enableHover={true}
              fontSize="3.5rem"
            >
              Not Found
            </FuzzyText>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-neutral-300 md:text-4xl">
              {t('notFoundTitle')}
            </h2>
            <p className="text-zinc-200">
              {t('notFoundDescription')}
              <br />
              {t('notFoundDescription2')}
            </p>
          </div>

          <Link
            href="/"
            className="inline-block rounded-xl border border-neutral-300/30 bg-white/10 px-4 py-2.5 text-neutral-100 backdrop-blur-md transition duration-200 hover:bg-white/15"
          >
            {t('backToHome')}
          </Link>
        </div>
      </div>
    </EaseAnimation>
  )
}
