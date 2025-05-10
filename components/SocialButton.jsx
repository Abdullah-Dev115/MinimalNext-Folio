'use client'
import Link from 'next/link'

export const SocialButton = ({ link, children, text, ...props }) => {
  return (
    <Link
      href={link}
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 rounded-2xl border border-neutral-300/40 px-2 py-1.5 transition duration-200 hover:border-neutral-300/60 hover:bg-neutral-300/20 md:rounded-xl md:py-1"
    >
      {children}
      <span className="hidden md:block">{text}</span>
    </Link>
  )
}

export default SocialButton
