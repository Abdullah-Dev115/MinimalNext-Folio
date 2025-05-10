import About from '@/components/About'
import EaseAnimation from '@/components/ui/EaseAnimation'
import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'

export async function generateMetadata() {
  const t = await getTranslations('dynamicMetadata')

  return {
    title: `${t('name')} | ${t('position')}`,
  }
}

export default async function Home({ params }) {
  const { locale } = await params

  // Handle invalid locales
  if (!['en', 'ar'].includes(locale)) {
    notFound()
  }

  return (
    // <EaseAnimation delay={200} translateY={20}>
    <div className="relative flex flex-col items-center justify-center">
      <About />
    </div>
    // </EaseAnimation>
  )
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}
