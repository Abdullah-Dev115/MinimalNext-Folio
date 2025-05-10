import Image from 'next/image'

export default function InnerImg({ src, alt }) {
  return (
    <>
      <Image
        className="mx-0.5 h-3 w-3 md:h-3.5 md:w-3.5"
        src={src}
        alt={alt}
        width={16}
        height={16}
      />
    </>
  )
}
