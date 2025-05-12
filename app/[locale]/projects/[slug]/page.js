import PostStatics from '@/components/PostStatics'

import { client } from '@/sanity/lib/client'
import React from 'react'
import { PROJECT_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import { FormatDate } from '@/lib/utils'
import ProjectViews from '@/components/ProjectViews'
import SuspensePortableText from '@/components/SuspensePortableText'
import { getTranslations } from 'next-intl/server'
// Notice that this is not a next/link Link component, it is a Link component from the i18n/routing library
import { Link } from '@/i18n/routing'
// If you want to use the Link component from next/link, first import the usePathname hook:
// import { usePathname } from 'next/navigation'
// then use this code:
// const locale = pathname.split('/')[1]
// then make sure to specify the locale in the href:
// <Link href={`${locale}/projects`}>

export async function generateStaticParams() {
  const projects = await client.fetch(`
    *[_type == "project" && defined(slug.current)][0...10] {
      "slug": slug.current,
    }
  `)

  // Generate for all locales
  return projects.flatMap((project) => [
    { slug: project.slug, locale: 'en' },
    { slug: project.slug, locale: 'ar' },
  ])
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const t = await getTranslations('dynamicMetadata')

  const project = await client.fetch(PROJECT_QUERY, { slug })

  if (!project) {
    return {
      title: t('ProjectNotFound'),
      description: t('ProjectNotFoundDescription'),
    }
  }

  return {
    title: `${project.title} | ${t('name')}`,
    description: project.description || '',
    openGraph: {
      title: project.title,
      description: project.description || '',
      type: 'article',
      images: project.cover?.url ? [project.cover.url] : [],
    },
  }
}

// revalidate every hour
export const revalidate = 3600

const ProjectPage = async ({ params }) => {
  const { slug } = await params

  try {
    const project = await client.fetch(PROJECT_QUERY, { slug })
    if (!project) return notFound()

    const projectTags = project.tag || []

    return (
      <div
        // You can remove the () in the files in blog and projects folders from the divs to make it change the direction base in the locale changing in root layout.js
        // dir="rtl"
        className="container mx-auto flex min-h-screen max-w-5xl flex-col items-center py-10 pb-24"
      >
        <div className="w-full px-4">
          {/* Back to Projects Page Button */}
          <div className="flex w-full flex-col items-start justify-start">
            <Link
              href={`/projects`}
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 shadow-md shadow-zinc-800/5 ring-0 ring-white/10 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:ring-white/20 group-hover:bg-white/15"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 448 512"
                className="h-4 w-4 stroke-zinc-500 transition-all duration-150 group-hover:ml-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
              </svg>
            </Link>
          </div>

          {/* Project Title and Description */}
          <div className="flex w-full flex-col items-start justify-start gap-0.5">
            <h1 className="m-0 pb-4 text-4xl font-bold leading-snug text-zinc-100 sm:text-5xl">
              {project.title}
            </h1>

            {project.description && (
              <p className="text-base text-slate-300">{project.description}</p>
            )}

            {/* Project Published Date */}
            <time className="mt-3 flex items-center gap-2 text-zinc-400">
              <span className="h-4 w-0.5 rounded-full bg-zinc-500"></span>
              <span className="mr-3">{FormatDate(project.publishedAt)}</span>
            </time>

            {/* Project Tags */}
            <div className="mt-4 flex items-center gap-2">
              {projectTags.map((projectTag) => (
                <span
                  key={projectTag}
                  className="rounded-lg border border-zinc-200/20 bg-zinc-700/20 px-2 py-1 text-xs font-medium text-zinc-200"
                >
                  {projectTag}
                </span>
              ))}
            </div>

            {/* Project Views */}
            <div className="block">
              <ProjectViews slug={slug} />
            </div>

            {/* Project Statics */}
            <div className="w-full">
              <PostStatics />
              <hr className="my-8 h-[2px] rounded-xl border-0 bg-zinc-400 bg-opacity-40" />
            </div>

            {/* Project Body */}
            <div className="prose-invert prose mt-8 w-full max-w-none">
              <SuspensePortableText value={project.body} />
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching project:', error)
    throw new Error('Failed to fetch project')
  }
}

export default ProjectPage
