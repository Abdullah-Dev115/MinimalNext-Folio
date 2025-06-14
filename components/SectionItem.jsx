'use client'

import Image from 'next/image'
import Link from 'next/link'

export const SectionItem = ({
  link,
  title,
  src,
  alt,
  imageClassName,
  contribution,
  children,
}) => {
  return (
    <>
      <Link
        href={link || ''}
        target="_blank"
        rel="noreferrer"
        className="rounded-lg border border-white/15 bg-indigo-400/10 py-1 pe-2 ps-1 backdrop-blur-xl transition-all duration-150 hover:z-20 hover:scale-110 hover:border-white/30 hover:bg-indigo-400/15"
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-start gap-2">
            <Image
              className={`h-7 w-7 sm:h-8 sm:w-8 ${imageClassName} aspect-square`}
              alt={alt}
              src={src}
              width={32}
              height={32}
            />
            <div className="flex flex-col">
              <h5 className="text-sm font-medium md:text-base">{title}</h5>
              {contribution && (
                <h5 className="text-xs text-slate-400 md:text-base">
                  {contribution}
                </h5>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between">{children}</div>
        </div>
      </Link>
    </>
  )
}
