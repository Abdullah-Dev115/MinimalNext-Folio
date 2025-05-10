import { ImageSolid } from '@mynaui/icons-react'
import { EyeIcon } from 'lucide-react'

export const CardSkeleton = () => {
  return (
    <div
      dir="rtl"
      className="group flex w-full animate-pulse flex-col items-center justify-between gap-4 rounded-2xl border border-gray-300/0 p-4 transition-colors hover:border-white/30 hover:bg-gray-400/10 hover:backdrop-blur-xl sm:flex-row sm:gap-6"
    >
      <div className="flex w-full items-center sm:w-1/2">
        <div className="flex aspect-video w-full items-center justify-center rounded-xl bg-gray-300/20 sm:max-w-[375px]">
          <ImageSolid className="size-12 text-cyan-400" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 sm:w-1/2">
        <div className="h-6 w-full rounded-lg bg-gray-300/20"></div>

        <div className="flex items-center gap-2 text-sm text-zinc-200">
          <span className="h-4 w-0.5 rounded-full bg-zinc-300"></span>
          <div className="h-4 w-1/4 rounded-lg bg-gray-300/20"></div>
        </div>

        <div className="flex items-center gap-2">
          <div className="rounded-lg border border-zinc-200/20 bg-zinc-700/20 px-2 py-1 text-xs font-medium text-zinc-200">
            <div className="h-4 w-12 rounded-lg bg-gray-300/20"></div>
          </div>
          <div className="rounded-lg border border-zinc-200/20 bg-zinc-700/20 px-2 py-1 text-xs font-medium text-zinc-200">
            <div className="h-4 w-10 rounded-lg bg-gray-300/20"></div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <EyeIcon className="size-5 text-zinc-400" />
          <div className="h-4 w-1/12 rounded-lg bg-gray-300/20"></div>
        </div>

        <div className="flex items-center gap-2 group-hover:text-teal-500">
          <div className="h-4 w-1/12 rounded-lg bg-gray-300/20"></div>
        </div>
      </div>
    </div>
  )
}

const PostLoading = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-12 px-2 py-10 pb-24 lg:px-0">
      <div className="h-8 w-2/4 animate-pulse rounded-lg bg-gray-300/20"></div>

      <div className="grid w-full max-w-3xl grid-cols-1 items-center gap-2">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  )
}

export default PostLoading
