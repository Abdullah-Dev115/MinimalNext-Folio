'use client'
import { useTranslations } from 'next-intl'
import { SectionItem } from '../SectionItem'

export default function OperatingSystems() {
  const t = useTranslations('sections.OperatingSystems.OSes')

  const operatingSystems = [
    {
      title: t('MacOS'),
      src: '/Media/OperatingSystems/Apple.png',
      alt: 'Apple',
    },
    {
      title: t('Windows'),
      src: '/Media/OperatingSystems/Windows.png',
      alt: 'Windows',
    },
    {
      title: 'Kali Linux (VM)',
      src: '/Media/OperatingSystems/KaliLinux.png',
      alt: 'Kali Linux',
    },
    {
      title: 'Ubuntu VPS',
      src: '/Media/OperatingSystems/Ubuntu.png',
      alt: 'Ubuntu',
    },
  ]

  return (
    <>
      {/* Operating Systems Section */}
      <div className="grid grid-cols-1 gap-2">
        {operatingSystems.map((os, index) => (
          <SectionItem key={index} title={os.title} src={os.src} alt={os.alt} />
        ))}
      </div>
    </>
  )
}
