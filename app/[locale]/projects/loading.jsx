import ProjectsLoading from '@/components/ProjectsLoading'
import React from 'react'

export default function ProjectsPageLoading() {
  return (
    <div
      dir="rtl"
      className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-12 px-5 py-10 pb-24 xl:px-0"
    >
      <div className="h-8 w-2/4 animate-pulse rounded-lg bg-gray-300/20"></div>

      <div className="mt-5 grid w-full max-w-5xl grid-cols-1 gap-2 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectsLoading />
      </div>
    </div>
  )
}
