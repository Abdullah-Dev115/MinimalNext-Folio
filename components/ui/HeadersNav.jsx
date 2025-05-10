import { useTranslations } from 'next-intl'

export default function HeadersNav() {
  const t = useTranslations('sections')

  const headers = [
    {
      href: '#work-experience',
      label: t('WorkExperience.title'),
    },
    {
      href: '#developer-skills',
      label: t('DeveloperSkills.title'),
    },
    {
      href: '#operating-systems',
      label: t('OperatingSystems.title'),
    },
    {
      href: '#contributions',
      label: t('Contributions.title'),
    },
    {
      href: '#pc-softwares',
      label: t('PCSoftwares.title'),
    },
    {
      href: '#mobile-apps',
      label: t('MobileApps.title'),
    },
    {
      href: '#interesting-websites',
      label: t('Websites.title'),
    },
    {
      href: '#other',
      label: t('Other.title'),
    },
    {
      href: '#contactme',
      label: t('ContactMe.title'),
    },
  ]

  return (
    <div className="sticky top-0 z-[100] hidden h-screen lg:block">
      <nav className="absolute top-1/2 z-50 flex w-[250px] -translate-y-1/2 flex-col gap-4 rounded-lg p-3">
        {headers.map((header, index) => {
          return (
            <a
              key={index}
              href={header.href}
              className="flex items-center gap-2 transition-all duration-150 hover:mx-2 hover:text-cyan-400"
            >
              <div className="h-[2px] w-4 rounded-full bg-slate-500"></div>
              <span>{header.label}</span>
            </a>
          )
        })}
      </nav>
    </div>
  )
}
