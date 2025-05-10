import { ImageSolid } from '@mynaui/icons-react'

export const CardLoading = () => {
  return (
    <li
      dir="rtl"
      className="group relative flex animate-pulse flex-col items-start gap-4 rounded-2xl border border-white/20 p-6 transition-all hover:border-white/30 hover:bg-gray-400/10"
    >
      <div className="relative z-10 flex h-12 w-12 items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center text-2xl font-bold text-cyan-500 dark:text-cyan-400">
          <ImageSolid className="size-12" />
        </div>
      </div>

      <div className="h-5 w-2/3 rounded-lg bg-skeleton"></div>

      <div className="line-clamp-6 flex w-full flex-col gap-2">
        <div className="h-3 w-full rounded-full bg-skeleton"></div>
        <div className="h-3 w-full rounded-full bg-skeleton"></div>
        <div className="h-3 w-full rounded-full bg-skeleton"></div>
        <div className="h-3 w-full rounded-full bg-skeleton"></div>
        <div className="h-3 w-full rounded-full bg-skeleton"></div>
        <div className="h-3 w-full rounded-full bg-skeleton"></div>
      </div>

      <div className="relative z-10 flex items-center text-sm font-medium text-cyan-500">
        <div className="h-3 w-12 rounded-full bg-skeleton"></div>
      </div>
    </li>
  )
}

const ProjectsLoading = () => {
  return (
    <>
      <CardLoading />
      <CardLoading />
      <CardLoading />
      <CardLoading />
      <CardLoading />
    </>
  )
}

export default ProjectsLoading
