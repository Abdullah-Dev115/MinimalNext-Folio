'use client'
import { useTranslations } from 'next-intl'
import { SectionItem } from '../SectionItem'

export default function Other() {
  const t = useTranslations('sections.Other')

  const others = [
    {
      link: 'https://mega.nz/folder/WeJCzQAZ#hTkiPCWDZHSRSPJetxHktA',
      title: t('PCWallpaperPack'),
      src: '/Media/pack.png',
      alt: 'Gallery',
      moreAttribute: 'lazy',
    },
    {
      link: 'https://mega.nz/folder/rLYRhDiR#IntZV486iGaB4HnqYEf9EA',
      title: t('MobileWallpaperPack'),
      src: '/Media/pack.png',
      alt: 'Gallery',
      moreAttribute: 'lazy',
    },
  ]

  return (
    <>
      {/* Other Section */}
      <div className="grid grid-cols-1 gap-2">
        {others.map((other, index) => (
          <SectionItem
            key={index}
            link={other.link}
            title={other.title}
            src={other.src}
            alt={other.alt}
          />
        ))}
      </div>
    </>
  )
}
