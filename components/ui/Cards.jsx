'use client'

import { ArrowLeftIcon, EyeIcon } from 'lucide-react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { FormatDate } from '@/lib/utils'
// Notice that this is not a next/link Link component, it is a Link component from the i18n/routing library
import { Link } from '@/i18n/routing'
// If you want to use the Link component from next/link, first import the usePathname hook:
// import { usePathname } from 'next/navigation'
// then use this code:
// const locale = pathname.split('/')[1]
// then make sure to specify the locale in the href:
// <Link href={`${locale}/blog/${slug}`}>

export const PostCard = ({
  title,
  description,
  publishedAt,
  tag,
  cover,
  slug,
  views,
}) => {
  const imageUrl = cover ? urlFor(cover).url() : ''

  return (
    <Link href={`/blog/${slug}`}>
      <div className="group flex w-full flex-col items-center justify-between gap-4 rounded-2xl border border-gray-300/0 p-4 transition-colors duration-300 hover:border-white/30 hover:bg-gray-400/10 hover:backdrop-blur-xl sm:flex-row sm:gap-6">
        <div className="flex w-full items-center sm:w-1/2">
          <Image
            src={imageUrl}
            alt="blog"
            className="aspect-video h-full w-full rounded-xl shadow-xl"
            width={375}
            height={375}
            priority
          />
        </div>
        <div className="flex w-full flex-col gap-2 sm:w-1/2">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-base text-zinc-400">{description}</p>
          <div className="flex items-center gap-2 text-sm text-zinc-200 sm:text-xs lg:text-sm">
            <span className="h-4 w-0.5 rounded-full bg-zinc-300"></span>
            {FormatDate(publishedAt)}
          </div>

          <div className="flex items-center gap-2">
            {tag.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-zinc-200/20 bg-zinc-700/20 px-2 py-1 text-xs font-medium text-zinc-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <EyeIcon className="size-5 text-zinc-400" />
            <p className="text-sm text-zinc-400">{views}</p>
          </div>

          <div className="flex items-center gap-2 group-hover:text-teal-500">
            <p className="text-sm font-medium text-teal-400">قراءة</p>
            <ArrowLeftIcon className="h-4 w-4 text-teal-400 group-hover:text-teal-500" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export const ProjectCard = ({
  title,
  description,
  cover,
  img,
  slug,
  badge,
  className,
}) => {
  const imageUrl = cover ? urlFor(cover).url() : ''

  return (
    <Link href={`/projects/${slug}`}>
      <li
        className={`bg- group relative flex h-full min-h-[315px] flex-col items-start gap-4 rounded-2xl border border-white/20 p-6 backdrop-blur-lg transition-all duration-300 hover:border-white/30 hover:bg-gray-400/10 ${className}`}
      >
        <div className="relative z-10 flex w-full items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center text-2xl font-bold text-cyan-500 dark:text-cyan-400">
            <Image
              src={cover ? imageUrl : img}
              alt={title}
              className="h-full w-full rounded-xl"
              width={50}
              height={50}
            />
          </div>
          {badge && (
            <p className="rounded-lg border border-zinc-200/20 bg-zinc-700/20 px-2 py-1 text-xs font-medium text-zinc-200">
              {badge}
            </p>
          )}
        </div>

        <h2 className="text-white">{title}</h2>

        <p
          style={{ lineHeight: '1.50em' }}
          className="relative z-10 line-clamp-6 text-sm text-zinc-200"
        >
          {description}
        </p>

        <div className="relative z-10 flex items-center text-sm font-medium text-cyan-500">
          {slug && (
            <>
              قراءة
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="ml-1 h-4 w-4 stroke-current"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
              </svg>
            </>
          )}
        </div>
      </li>
    </Link>
  )
}
