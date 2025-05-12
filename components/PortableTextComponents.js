import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

// Notice that this is not a next/link Link component, it is a Link component from the i18n/routing library
import { Link } from '@/i18n/routing'
// If you want to use the Link component from next/link, use this code:
// const locale = pathname.split('/')[1]
// then make sure to specify the locale in the href:
// <Link href={`${locale}/blog/${slug}`}>

export const portableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-14 w-full">
          <div className="relative w-full overflow-hidden rounded-2xl border-2 border-white/15 p-0.5">
            <Image
              src={urlFor(value).url()}
              alt={value.alt || ' '}
              className="h-auto w-full rounded-xl shadow-xl"
              width={1000}
              height={1000}
              priority
              loading="eager" // Force eager loading for important images
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add responsive sizes
              quality={75}
              placeholder="blur"
              blurDataURL={urlFor(value).width(50).quality(20).blur(50).url()} // Generate blur placeholder
            />
          </div>
          {value.caption && (
            <div className="mt-2 text-center text-base text-zinc-200">
              {value.caption}
            </div>
          )}
        </div>
      )
    },
  },
  block: {
    h1: ({ children }) => {
      return (
        <h1
          style={{ lineHeight: '1em' }}
          className="mb-8 text-3xl font-medium tracking-[-0.010em] text-zinc-100 sm:text-4xl md:tracking-wide lg:tracking-normal"
        >
          {children}
        </h1>
      )
    },
    h2: ({ children }) => {
      return (
        <h2
          style={{ lineHeight: '1em' }}
          className="mb-8 text-2xl font-semibold tracking-[-0.010em] text-zinc-100 sm:text-3xl md:tracking-wide lg:tracking-normal"
        >
          {children}
        </h2>
      )
    },
    h3: ({ children }) => {
      return (
        <h3
          style={{ lineHeight: '1em' }}
          className="mb-8 text-xl font-medium tracking-[-0.010em] text-zinc-100 sm:text-2xl md:tracking-wide lg:tracking-normal"
        >
          {children}
        </h3>
      )
    },
    h4: ({ children }) => {
      return (
        <h4 className="mb-8 text-lg font-medium tracking-[-0.010em] text-zinc-100 sm:text-xl md:tracking-wide lg:tracking-normal">
          {children}
        </h4>
      )
    },
    h5: ({ children }) => {
      return (
        <h5 className="mb-8 text-base font-medium tracking-[-0.010em] text-zinc-100 sm:text-lg md:tracking-wide lg:tracking-normal">
          {children}
        </h5>
      )
    },
    h6: ({ children }) => {
      return (
        <h6 className="mb-8 text-sm font-medium tracking-[-0.010em] text-zinc-100 sm:text-base md:tracking-wide lg:tracking-normal">
          {children}
        </h6>
      )
    },
    normal: ({ children }) => {
      // Get the text from children
      const text = children
        .map((child) =>
          typeof child === 'string' ? child : child?.props?.children
        )
        .join(' ')

      return (
        <p
          style={{ lineHeight: '1.5em' }}
          className="mb-8 text-lg font-normal tracking-[-0.010em] text-zinc-100 sm:text-xl md:tracking-wide lg:tracking-normal"
        >
          {children}
        </p>
      )
    },
    blockquote: ({ children }) => {
      return (
        <blockquote className={`my-4 border-zinc-500 italic text-zinc-300`}>
          {children}
        </blockquote>
      )
    },
  },
  marks: {
    link: ({ children, value }) => {
      if (value?.href?.includes('embed')) {
        return (
          <div className="my-12">
            <div className="relative w-full">
              <iframe
                title="YouTube video"
                src={value.href}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="aspect-video w-full rounded-xl border-2 border-white/15 p-1 shadow-xl"
              ></iframe>
            </div>
          </div>
        )
      }

      return (
        <Link
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-regular mb-8 text-lg tracking-[-0.010em] text-cyan-400 underline transition-colors hover:text-cyan-500 sm:text-xl md:tracking-wide lg:tracking-normal"
        >
          {children}
        </Link>
      )
    },
    strong: ({ children }) => {
      return <strong className="font-semibold text-zinc-200">{children}</strong>
    },
  },
  list: {
    bullet: ({ children }) => {
      return (
        <ul
          className={`mb-4 list-disc space-y-2 text-zinc-400 marker:text-cyan-400`}
        >
          {children}
        </ul>
      )
    },
    number: ({ children }) => {
      return (
        <ol
          className={`mb-4 list-decimal space-y-2 text-zinc-400 marker:text-cyan-400`}
        >
          {children}
        </ol>
      )
    },
  },
}
