'use client'
import { SectionItem } from '../SectionItem'

export default function Websites() {
  const websites = [
    {
      link: 'https://www.notion.so/',
      title: 'Notion',
      src: '/Media/Websites/Notion.png',
      alt: 'Notion',
    },
    {
      link: 'https://www.adslgate.com/',
      title: 'Adslgate | البوابة الرقمية',
      src: '/Media/Websites/Adslgate.png',
      alt: 'Adslgate',
    },
    {
      link: 'https://saudiopensourcecommunity.github.io/SaudiOSS/',
      title: 'SaudiOSS | المصادر المفتوحة السعودية',
      src: '/Media/Websites/SaudiOSS.png',
      alt: 'SaudiOSS',
    },
    {
      link: 'https://shots.so/',
      title: 'Shots',
      src: '/Media/Websites/ShotsSo.webp',
      alt: 'Shots',
      imageClassName: 'rounded-md',
    },
    {
      link: 'https://ray.so/icon',
      title: 'Icon Maker by Raycast',
      src: '/Media/Websites/IconMaker.jpeg',
      alt: 'Icon Maker',
      imageClassName: 'rounded-lg',
    },
    {
      link: 'https://excalidraw.com/',
      title: 'Excalidraw',
      src: '/Media/Websites/Excalidraw.png',
      alt: 'Excalidraw',
    },
    {
      link: 'https://monkeytype.com',
      title: 'MonkeyType',
      src: '/Media/Websites/Monkeytype.png',
      alt: 'MonkeyType',
      imageClassName: 'rounded-md',
    },
    {
      link: 'https://www.typingclub.com/sportal/program-3.game',
      title: 'Typing club',
      src: '/Media/Websites/Typingclub.png',
      alt: 'Typing club',
    },
    {
      link: 'https://coderhub.sa/',
      title: 'Coderhub',
      src: '/Media/Websites/Coderhub.png',
      alt: 'Coderhub',
    },
    {
      link: 'https://nanoreview.net/',
      title: 'NanoReview',
      src: '/Media/Websites/NanoReview.png',
      alt: 'NanoReview',
      imageClassName: 'rounded-md',
    },
    {
      link: 'https://pricena.com/',
      title: 'Pricena | برايسنا',
      src: '/Media/Websites/Pricena.png',
      alt: 'Pricena',
    },
    {
      link: 'https://macosicons.com/#/',
      title: 'MacOS Icons',
      src: '/Media/Websites/MacOsIcons.jpeg',
      alt: 'MacOS Icons',
      imageClassName: 'rounded-md',
    },
    {
      link: 'https://alternativeto.net/',
      title: 'AlternativeTo',
      src: '/Media/Websites/AlternativeTo.png',
      alt: 'AlternativeTo',
    },
    {
      link: 'https://speedtest.net/',
      title: 'SpeedTest',
      src: '/Media/Websites/SpeedTest.jpeg',
      alt: 'SpeedTest',
      imageClassName: 'rounded-md',
    },
    {
      link: 'https://www.photopea.com/',
      title: 'Photopea',
      src: '/Media/Websites/Photopea.png',
      alt: 'Photopea',
    },
    {
      link: 'https://www.remove.bg/',
      title: 'Remove BG',
      src: '/Media/Websites/RemoveBg.png',
      alt: 'Remove BG',
    },
  ]

  return (
    <>
      {/* Websites Section */}
      <div className="grid grid-cols-1 gap-2">
        {websites.map((website, index) => (
          <SectionItem
            key={index}
            link={website.link}
            title={website.title}
            src={website.src}
            alt={website.alt}
            imageClassName={website.imageClassName}
          />
        ))}
      </div>
    </>
  )
}
