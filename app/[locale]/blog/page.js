import { POSTS_CARDS_QUERY } from '@/sanity/lib/queries'
import { client } from '@/sanity/lib/client'

import BlurText from '@/components/ui/BlurText'
import IsEnglish from '@/components/IsEnglish'
import EaseAnimation from '@/components/ui/EaseAnimation'
import { PostCard } from '@/components/ui/Cards'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const t = await getTranslations('dynamicMetadata')

  return {
    title: `${t('blog')} | ${t('name')}`,
    description: t('blogDescription'),
  }
}

export default async function BlogPage() {
  const posts = await client.fetch(POSTS_CARDS_QUERY)
  const t2 = await getTranslations('blog')
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-12 px-2 py-10 pb-24 lg:px-0">
      <BlurText
        text={t2('AnotherDimensionToExpressAndShareThoughts')}
        delay={150}
        animateBy="words"
        direction="top"
        className="justify-center px-2 text-center text-2xl font-semibold"
      />
      <IsEnglish />

      {/* Post Cards */}
      <EaseAnimation delay={200} translateY={20}>
        <div
          // You can remove the () in the files in blog and projects folders from the divs to make it change the direction base in the locale changing in root layout.js
          dir="rtl"
          className="grid w-full max-w-5xl grid-cols-1 items-center gap-2"
        >
          {posts.map((post, index) => (
            <PostCard key={`${post.slug.current}-${index}`} {...post} />
          ))}
        </div>
      </EaseAnimation>
    </div>
  )
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}
