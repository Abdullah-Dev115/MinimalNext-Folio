'use client'

import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { Book, Grid, UserCircle } from '@mynaui/icons-react'
import { Link, usePathname } from '@/i18n/routing'

export default function NavBar() {
  const t = useTranslations('navBar')
  const router = useRouter()
  const locale = useLocale()
  const pathname = usePathname()

  const navLinks = [
    {
      name: t('about'),
      link: '',
      icon: <UserCircle className="size-5" />,
    },
    {
      name: t('projects'),
      link: 'projects',
      icon: <Grid className="size-5" />,
    },
    {
      name: t('blog'),
      link: 'blog',
      icon: <Book className="size-5" />,
    },
  ]

  const languageSwitcher = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar'

    const pathWithoutLocale = pathname.replace(/^\/(ar|en)/, '')
    const newPath = `/${newLocale}${pathWithoutLocale === '' ? '/' : pathWithoutLocale}`

    router.replace(newPath)
  }

  const buttonBaseClasses =
    'flex items-center justify-center gap-2 rounded-xl px-3 py-1.5 transition duration-200'
  const inactiveClasses =
    'border border-transparent bg-transparent text-neutral-300 hover:bg-white/10 hover:text-neutral-100'
  const activeClasses =
    'border border-slate-300/30 bg-slate-300/15 text-neutral-100'

  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto w-fit pb-8 sm:static sm:w-auto sm:pb-0">
      <div className="mx-2 flex justify-center rounded-2xl border border-neutral-300/30 bg-neutral-950/40 px-2 py-1 shadow-lg backdrop-blur-3xl md:mx-0">
        <div className="flex flex-row items-center gap-2 text-sm">
          {/* Language toggle button */}
          <button
            onClick={languageSwitcher}
            className={`${buttonBaseClasses} ${inactiveClasses}`}
            aria-label={
              locale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'
            }
          >
            <span>{locale === 'ar' ? 'EN' : 'ع'}</span>
          </button>

          <div className="h-[80%] w-[1px] rounded-full bg-neutral-300/40"></div>

          {/* Navigation links */}
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={`/${item.link}`}
              prefetch={true}
              className={`${buttonBaseClasses} ${
                pathname === `/${item.link}` ? activeClasses : inactiveClasses
              }`}
            >
              <div className="flex items-center justify-center gap-2 font-semibold">
                {item.icon}
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
