'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

import { BrandGithub, BrandLinkedinSolid } from '@mynaui/icons-react'

export default function Footer() {
  const t = useTranslations('footer')

  const SocialLinks = [
    {
      link: 'https://www.linkedin.com/in/{your-linkedin-username}',
      ariaLabel: 'LinkedIn',
      icon: (
        <BrandLinkedinSolid className="h-6 w-6 text-zinc-200 opacity-80 transition-opacity duration-300 hover:text-zinc-100 hover:opacity-100" />
      ),
    },
    {
      link: 'https://github.com/{your-github-username}',
      ariaLabel: 'Github',
      icon: (
        <BrandGithub className="h-6 w-6 text-zinc-200 opacity-80 transition-opacity duration-300 hover:text-zinc-100 hover:opacity-100" />
      ),
    },
  ]
  return (
    <footer>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-y-4 py-6 pb-24 md:flex-row md:pb-6">
        <div className="text-zinc-400 transition-colors duration-200 hover:text-zinc-300">
          <span>{t('Copyright')}</span>
          <span className="text-white">{t('name')}</span>
        </div>

        <div className="flex justify-center gap-x-3">
          {SocialLinks.map((SocialLink) => {
            return (
              <Link
                key={SocialLink.ariaLabel}
                href={SocialLink.link}
                className="transition-colors duration-200"
                target="_blank"
                rel="noreferrer"
                aria-label={SocialLink.ariaLabel}
              >
                {SocialLink.icon}
              </Link>
            )
          })}
        </div>
      </div>

      {/* <p className="mt-3 cursor-default text-sm text-gray-400 transition-colors duration-200 hover:text-gray-300">
          {t('Version')} 2.0.0
        </p> */}
    </footer>
  )
}
