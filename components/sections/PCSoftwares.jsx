'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

import RoundedSectionItem from '../RoundedSectionItem'
import InnerImg from '../InnerImg'

const softwaresList = [
  {
    link: 'https://www.cursor.com/',
    title: 'Cursor',
    src: '/Media/PCSoftwares/Cursor.jpg',
    alt: 'Cursor',
    os: ['Windows', 'Linux', 'MacOS'],
    moreAttribute: 'lazy',
    imageClassName: 'rounded-xl',
  },
  {
    link: 'https://code.visualstudio.com/',
    title: 'VS Code',
    src: '/Media/PCSoftwares/VSCode.png',
    alt: 'VS Code',
    os: ['Windows', 'Linux', 'MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://www.jetbrains.com/pycharm/download',
    title: 'PyCharm',
    src: '/Media/PCSoftwares/PyCharm.png',
    alt: 'PyCharm',
    os: ['Windows', 'Linux', 'MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://obsproject.com',
    title: 'OBS Studio',
    src: '/Media/PCSoftwares/OBS.png',
    alt: 'OBS Studio',
    os: ['Windows', 'Linux', 'MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://www.voidtools.com/downloads/',
    title: 'Everything',
    src: '/Media/PCSoftwares/Everything.png',
    alt: 'Everything',
    os: ['Windows'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion/',
    title: 'VMware Fusion',
    src: '/Media/PCSoftwares/Vmware.png',
    alt: 'Funter',
    os: ['MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://nektony.com/funter',
    title: 'Funter',
    src: '/Media/PCSoftwares/Funter.png',
    alt: 'Funter',
    os: ['MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://rectangleapp.com/',
    title: 'Rectangle',
    src: '/Media/PCSoftwares/Rectangle.png',
    alt: 'Rectangle',
    os: ['MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://www.macupdate.com/app/mac/62593/monitorcontrol',
    title: 'Monitor Control',
    src: '/Media/PCSoftwares/MonitorControl.png',
    alt: 'Monitor Control',
    os: ['MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://obsidian.md/',
    title: 'Obsidian',
    src: '/Media/PCSoftwares/Obsidian.png',
    alt: 'Obsidian',
    os: ['Windows', 'Linux', 'MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://www.raycast.com/',
    title: 'Raycast',
    src: '/Media/PCSoftwares/Raycast.png',
    alt: 'Raycast',
    os: ['MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://iterm2.com/',
    title: 'iTerm2',
    src: '/Media/PCSoftwares/iTerm.png',
    alt: 'iTerm2',
    os: ['MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://theunarchiver.com/',
    title: 'The Unarchiver',
    src: '/Media/PCSoftwares/Unarchiver.png',
    alt: 'The Unarchiver',
    os: ['MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://freemacsoft.net/appcleaner/',
    title: 'AppCleaner',
    src: '/Media/PCSoftwares/AppCleaner.png',
    alt: 'AppCleaner',
    os: ['MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://maccy.app/',
    title: 'Maccy',
    src: '/Media/PCSoftwares/Maccy.png',
    alt: 'Maccy',
    os: ['MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://apphousekitchen.com/pricing/',
    title: 'AlDente',
    src: '/Media/PCSoftwares/AlDente.png',
    alt: 'AlDente',
    os: ['MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://handbrake.fr/downloads.php',
    title: 'Handbrake',
    src: '/Media/PCSoftwares/Handbrake.png',
    alt: 'Handbrake',
    os: ['MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://mos.caldis.me/',
    title: 'Mos',
    src: '/Media/PCSoftwares/Mos.png',
    alt: 'Mos',
    os: ['MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://folivora.ai/keyboardcleantool',
    title: 'Clean Keyboard Tool',
    src: '/Media/PCSoftwares/cleanTool.png',
    alt: 'Clean Keyboard Tool',
    os: ['MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://www.winehq.org/',
    title: 'Wine Stable',
    src: '/Media/PCSoftwares/WineStable.png',
    alt: 'Wine Stable',
    os: ['MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://www.marticliment.com/unigetui/',
    title: 'UniGetUI',
    src: '/Media/PCSoftwares/UniGetUI.png',
    alt: 'UniGetUI',
    os: ['Windows'],
    imageClassName: 'rounded-md',
    moreAttribute: 'lazy',
  },
  {
    link: 'https://winaero.com/winaero-tweaker/',
    title: 'Winaero Tweaker',
    src: '/Media/PCSoftwares/Winaero.png',
    alt: 'Winaero Tweaker',
    os: ['Windows'],
    imageClassName: 'rounded-md',
    moreAttribute: 'lazy',
  },
  {
    link: 'https://www.virtualbox.org/',
    title: 'VirtualBox',
    src: '/Media/PCSoftwares/VirtualBox.png',
    alt: 'VirtualBox',
    os: ['Windows', 'Linux', 'MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://www.videolan.org/',
    title: 'VLC Media Player',
    src: '/Media/PCSoftwares/VLC.png',
    alt: 'VLC Media Player',
    os: ['Windows', 'Linux', 'MacOS'],
    moreAttribute: 'lazy',
  },

  {
    link: 'https://arc.net/',
    title: 'Arc Browser',
    src: '/Media/PCSoftwares/Arc.png',
    alt: 'Arc Browser',
    os: ['Windows', 'MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://kagi.com/orion/',
    title: 'Orion Browser',
    src: '/Media/PCSoftwares/Orion.png',
    alt: 'Orion Browser',
    os: ['MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://ticktick.com/features',
    title: 'TickTick',
    src: '/Media/PCSoftwares/TickTick.webp',
    alt: 'TickTick',
    os: ['Windows', 'Linux', 'MacOS'],
    imageClassName: 'rounded-xl',
    moreAttribute: 'lazy',
  },
  {
    link: 'https://nordpass.com/download/',
    title: 'Nordpass Desktop',
    src: '/Media/PCSoftwares/Nordpass.png',
    alt: 'Nordpass Desktop',
    os: ['Windows', 'Linux', 'MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://bitwarden.com/download/',
    title: 'Bitwarden',
    src: '/Media/PCSoftwares/Bitwarden.png',
    alt: 'Bitwarden',
    os: ['Windows', 'Linux', 'MacOS'],
    imageClassName: 'rounded-xl',
    moreAttribute: 'lazy',
  },
  {
    link: 'https://zoom.us/download',
    title: 'Zoom',
    src: '/Media/PCSoftwares/Zoom.png',
    alt: 'Zoom Desktop',
    os: ['Windows', 'Linux', 'MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'http://apple.com/itunes',
    title: 'Apple iTunes',
    src: '/Media/PCSoftwares/Itunes.png',
    alt: 'iTunes',
    os: ['Windows'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://support.apple.com/en-sa/103232',
    title: 'iCloud',
    src: '/Media/PCSoftwares/iCloud.png',
    alt: 'Icloud',
    os: ['Windows'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://apps.microsoft.com/detail/9NP83LWLPZ9K?hl=en-us&gl=US',
    title: 'Apple Devices',
    src: '/Media/PCSoftwares/AppleDevices.png',
    alt: 'Apple Devices',
    os: ['Windows'],
    moreAttribute: 'lazy',
  },
  {
    link: 'http://3u.com',
    title: '3U Tools',
    src: '/Media/PCSoftwares/3U.png',
    alt: '3U Tools',
    os: ['Windows', 'MacOS'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://www.win-rar.com/',
    title: 'Winrar',
    src: '/Media/PCSoftwares/Winrar.png',
    alt: 'Winrar',
    os: ['Windows', 'Linux', 'MacOS'],
    imageClassName: 'rounded-md',
    moreAttribute: 'lazy',
  },
  {
    link: 'https://www.memuplay.com/',
    title: 'Memu Play',
    src: '/Media/PCSoftwares/Memu.png',
    alt: 'Memu Play',
    os: ['Windows'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://www.internetdownloadmanager.com/',
    title: 'IDM',
    src: '/Media/PCSoftwares/IDM.png',
    alt: 'Internet Download Manager',
    os: ['Windows'],
    moreAttribute: 'lazy',
  },
  {
    link: 'https://filezilla-project.org/',
    title: 'Filezila',
    src: '/Media/PCSoftwares/Filezila.png',
    alt: 'Filezila',
    os: ['Windows', 'Linux', 'MacOS'],
    moreAttribute: 'lazy',
  },
]

const osIcons = {
  Windows: {
    src: '/Media/OperatingSystems/Windows2.png',
    alt: 'Windows',
  },
  Linux: {
    src: '/Media/OperatingSystems/Linux.png',
    alt: 'Linux',
  },
  MacOS: {
    src: '/Media/OperatingSystems/Apple.png',
    alt: 'MacOS',
  },
}

export default function PCSoftwares() {
  const t = useTranslations('sections.PCSoftwares')
  const [selectedOS, setSelectedOS] = useState('all')

  const filteredPcSoftwares = softwaresList.filter((software) => {
    if (selectedOS === 'all') {
      return true
    }
    return software.os.includes(selectedOS === 'windows' ? 'Windows' : 'MacOS')
  })

  return (
    <>
      <select
        className="block w-full rounded-lg border border-white/20 bg-indigo-400/10 p-1.5 text-center text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
        onChange={(e) => setSelectedOS(e.target.value)}
        value={selectedOS}
      >
        <option value="all">{t('AllOS')}</option>
        <option value="windows">{t('WindowsOnly')}</option>
        <option value="macos">{t('MacOSOnly')}</option>
      </select>

      <div className="grid grid-cols-3 gap-3 xs:grid-cols-4 sm:grid-cols-4 sm:gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-4">
        {filteredPcSoftwares.map((software, id) => (
          <RoundedSectionItem
            key={id}
            link={software.link}
            title={software.title}
            src={software.src}
            alt={software.alt}
            imageClassName={software.imageClassName}
          >
            {software.os.map((os) => (
              <InnerImg key={os} src={osIcons[os].src} alt={osIcons[os].alt} />
            ))}
          </RoundedSectionItem>
        ))}
      </div>
    </>
  )
}
