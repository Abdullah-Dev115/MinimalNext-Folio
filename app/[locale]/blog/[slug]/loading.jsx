import PostStatics from '@/components/PostStatics'

export default function BlogPostLoading() {
  return (
    <div
      dir="rtl"
      className="container mx-auto flex min-h-screen max-w-5xl flex-col items-center py-10 pb-24"
    >
      <div className="w-full animate-pulse px-5">
        <div className="mb-8 h-10 w-10 rounded-full bg-gray-300/20"></div>

        <div className="h-10 w-3/4 rounded-lg bg-gray-300/20"></div>
        <div className="mt-4 h-6 w-1/2 rounded-lg bg-gray-300/20"></div>

        <div className="mt-6 flex gap-2">
          <div className="h-4 w-24 rounded-lg bg-gray-300/20"></div>
        </div>

        <div className="mt-8">
          <PostStatics />
          <div className="my-8 h-[2px] rounded-xl bg-gray-300/20"></div>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          <div className="h-6 w-full rounded-lg bg-gray-300/20"></div>
          <div className="h-6 w-5/6 rounded-lg bg-gray-300/20"></div>
          <div className="h-6 w-4/6 rounded-lg bg-gray-300/20"></div>
        </div>
      </div>
    </div>
  )
}
