import React from 'react'

import { ProjectCard } from '@/components/ui/Cards'
import { client } from '@/sanity/lib/client'
import { PROJECTS_CARDS_QUERY } from '@/sanity/lib/queries'
import BlurText from '@/components/ui/BlurText'

import EaseAnimation from '@/components/ui/EaseAnimation'
import IsEnglish from '@/components/IsEnglish'
import { getTranslations } from 'next-intl/server'
import ShowMessageLaterModal from '@/components/ShowMessageLaterModal'

export async function generateMetadata() {
  const t = await getTranslations('dynamicMetadata')

  return {
    title: `${t('projects')} | ${t('name')}`,
    description: t('projectsDescription'),
  }
}

export default async function ProjectsPage() {
  const projects = await client.fetch(PROJECTS_CARDS_QUERY)
  const t2 = await getTranslations('projects')

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-12 px-5 py-10 pb-24 xl:px-0">
      <BlurText
        text={t2('PersonalProjectsAndSomeDetailsAboutThem')}
        delay={150}
        animateBy="words"
        direction="top"
        className="justify-center text-center text-2xl font-semibold"
      />
      <IsEnglish />

      {/* ProjectCards */}
      <EaseAnimation delay={200} translateY={10}>
        <ul
          // You can remove the () in the files in blog and projects folders from the divs to make it change the direction base in the locale changing in root layout.js
          dir="rtl"
          className="grid max-w-5xl grid-cols-1 gap-2 gap-y-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Projects */}
          {projects.map((project) => (
            <ProjectCard key={project.slug.current} {...project} />
          ))}
        </ul>
      </EaseAnimation>
    </div>
  )
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}
