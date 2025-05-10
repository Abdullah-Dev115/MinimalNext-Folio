'use client'

import { useTranslations } from 'next-intl'
import { SectionItem } from '../SectionItem'

export default function Contributions() {
  const t = useTranslations('sections.Contributions')

  const contributions = [
    {
      link: 'https://github.com/marticliment/UniGetUI/blob/main/README.md#translating-UniGetUI-to-other-languages',
      title: t('UniGetUIContributingInArabicTranslation'),
      src: '/Media/Contributions/UniGetUI.png',
      alt: 'UniGetUI',
    },
    {
      link: 'https://localazy.com/p/orion-browser',
      title: t('OrionBrowserContributingInArabicTranslation'),
      src: '/Media/Contributions/Orion.png',
      alt: 'Orion-Browser',
    },
  ]

  return (
    <>
      {/* Contributions Section */}
      <div className="grid grid-rows-1 gap-2">
        {contributions.map((contribution, index) => (
          <SectionItem
            key={index}
            link={contribution.link}
            title={contribution.title}
            src={contribution.src}
            alt={contribution.alt}
            contribution={contribution.contribution}
          />
        ))}
      </div>
    </>
  )
}
