import { client } from '@/sanity/lib/client'
import { POST_VIEWS_QUERY } from '@/sanity/lib/queries'
import { writeClient } from '@/sanity/lib/write-client'
import { getTranslations } from 'next-intl/server'

import Ping from './ui/Ping'

import { EyeIcon } from 'lucide-react'

const PostViews = async ({ slug }) => {
  const t = await getTranslations('views')
  const currentSlug = typeof slug === 'object' ? slug.current : slug

  const post = await client
    .withConfig({ useCdn: false })
    .fetch(POST_VIEWS_QUERY, { slug: currentSlug })

  if (!post) return null

  const views = post.views || 0

  try {
    const postId = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]._id`,
      { slug: currentSlug }
    )

    await writeClient
      .patch(postId)
      .set({ views: views + 1 })
      .commit()
  } catch (error) {
    console.error('Error updating views:', error)
  }

  return (
    <div className="fixed right-3 z-50 mb-20 mt-5 flex items-center justify-end gap-2 rounded-xl border border-zinc-200/20 bg-zinc-700/20 px-3 py-2 backdrop-blur-lg max-sm:top-0 sm:bottom-3 sm:mb-0">
      <Ping />

      <div className="flex items-center gap-1">
        <EyeIcon className="size-5 text-zinc-200" />
        <p className="text-zinc-200">
          {views} {t('views')}
        </p>
      </div>
    </div>
  )
}

export default PostViews
