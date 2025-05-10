import Image from 'next/image'
import Link from 'next/link'

export default function RoundedSectionItem({
  link,
  title,
  src,
  alt,
  imageClassName,
  children,
}) {
  return (
    <Link href={link} target="_blank" rel="noreferrer">
      <div className="h-full">
        <div className="flex h-auto min-h-[160px] w-full max-w-[120px] flex-col items-center justify-center rounded-2xl border border-white/15 bg-indigo-400/10 px-2 shadow-xl backdrop-blur-xl transition-all hover:scale-110 hover:border-white/30 hover:bg-indigo-400/15 sm:min-h-[180px] sm:max-w-[160px]">
          <Image
            className={`my-2 aspect-square w-10 sm:w-12 md:w-14 lg:w-14 ${imageClassName}`}
            alt={alt}
            src={src}
            decoding="async"
            width={56}
            height={56}
          />

          <h3 className="text-center text-xs sm:text-base lg:text-sm">
            {title}
          </h3>

          <div className="my-2 flex w-full justify-center px-5">
            <hr className="w-full rounded-full border-white/20" />
          </div>

          <div className="my-1 flex items-center">{children}</div>
        </div>
      </div>
    </Link>
  )
}
