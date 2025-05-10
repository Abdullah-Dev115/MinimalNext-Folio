'use client'

import { SectionItem } from '../SectionItem'
import InnerImg from '../InnerImg'

const mobileApps = [
  {
    link: 'https://nordpass.com/',
    title: 'Nordpass',
    src: '/Media/MobileApps/Nordpass.png',
    alt: 'Nordpass',
    platforms: ['ios', 'android'],
  },
  {
    link: 'https://bitwarden.com/download/',
    title: 'Bitwarden',
    src: '/Media/MobileApps/Bitwarden.png',
    alt: 'Bitwarden',
    imageClassName: 'rounded-md',
    platforms: ['ios', 'android'],
  },
  {
    link: 'https://ticktick.com/features',
    title: 'TickTick',
    src: '/Media/MobileApps/TickTick.webp',
    alt: 'TickTick',
    imageClassName: 'rounded-md',
    platforms: ['ios', 'android'],
  },
  {
    link: 'https://www.notion.so/mobile',
    title: 'Notion',
    src: '/Media/MobileApps/Notion.png',
    alt: 'Notion',
    platforms: ['ios', 'android'],
  },
  {
    link: 'https://steps.app/',
    title: 'StepsApp',
    src: '/Media/MobileApps/Stepsapp.webp',
    alt: 'StepsApp',
    imageClassName: 'rounded-md',
    platforms: ['ios', 'android'],
  },
  {
    link: 'https://sparkmailapp.com/',
    title: 'Spark Mail',
    src: '/Media/MobileApps/Spark.webp',
    alt: 'Spark Mail',
    imageClassName: 'rounded-md',
    platforms: ['ios'],
  },
  {
    link: 'https://apps.apple.com/us/app/arc-search-find-it-faster/id6472513080',
    title: 'Arc Search',
    src: '/Media/MobileApps/ArcSearch.png',
    alt: 'Arc Search',
    imageClassName: 'rounded-md',
    platforms: ['ios'],
  },
  {
    link: 'https://apps.apple.com/us/app/apple-store/id375380948',
    title: 'Apple Store',
    src: '/Media/MobileApps/AppleStore.webp',
    alt: 'Apple Store',
    imageClassName: 'rounded-md',
    platforms: ['ios'],
  },
  {
    link: 'https://ayahapp.com/ar/',
    title: 'Ayah | آية',
    src: '/Media/MobileApps/Ayah.png',
    alt: 'Ayah',
    platforms: ['ios', 'android'],
  },
  {
    link: 'https://www.greatquran.net/',
    title: 'القرآن العظيم',
    src: '/Media/MobileApps/GreatQuran.webp',
    alt: 'Great Quran',
    imageClassName: 'rounded-md',
    platforms: ['ios', 'android'],
  },
  {
    link: 'https://mobile.yahoo.com/weather',
    title: 'Yahoo Weather',
    src: '/Media/MobileApps/YahooWeather.png',
    alt: 'Yahoo Weather',
    imageClassName: 'rounded-md',
    platforms: ['ios', 'android'],
  },
  {
    link: 'https://realbyteapps.com/',
    title: 'Money Manager',
    src: '/Media/MobileApps/MoneyManager.webp',
    alt: 'Money Manager',
    imageClassName: 'rounded-md',
    platforms: ['ios', 'android'],
  },
  {
    link: 'https://apps.apple.com/sa/app/crate-pro-currency-converter/id909956791?l=ar',
    title: 'cRate Pro',
    src: '/Media/MobileApps/cRate.webp',
    alt: 'cRate Pro',
    imageClassName: 'rounded-md',
    platforms: ['ios'],
  },
  {
    link: 'https://imac.cc/',
    title: 'تحويل التاريخ',
    src: '/Media/MobileApps/DateConverter.webp',
    alt: 'تحويل التاريخ',
    imageClassName: 'rounded-md',
    platforms: ['ios'],
  },
  {
    link: 'https://athkarapp.com/',
    title: 'Athkar - أذكار',
    src: '/Media/MobileApps/Athkar.webp',
    alt: 'Athkar - أذكار',
    imageClassName: 'rounded-md',
    platforms: ['ios'],
  },
  {
    link: 'https://apps.apple.com/us/app/scango-pdf-document-scanner/id6499198824',
    title: 'ScanGo',
    src: '/Media/MobileApps/ScanGo.webp',
    alt: 'ScanGo',
    imageClassName: 'rounded-md',
    platforms: ['ios'],
  },
  {
    link: 'https://downdetector.com/about-us/',
    title: 'Downdetector',
    src: '/Media/MobileApps/DownDetector.webp',
    alt: 'Down Detector',
    imageClassName: 'rounded-md',
    platforms: ['ios', 'android'],
  },
  {
    link: 'https://apps.apple.com/app/id1281374098',
    title: 'Unzip',
    src: '/Media/MobileApps/Unzip.png',
    alt: 'Unzip',
    imageClassName: 'rounded-md',
    platforms: ['ios'],
  },
  {
    link: 'https://www.saudiexchange.sa/#appDtl',
    title: 'Saudi Exchange',
    src: '/Media/MobileApps/SaudiExchange.png',
    alt: 'Saudi Exchange',
    imageClassName: 'rounded-md',
    platforms: ['ios', 'android'],
  },
  {
    link: 'https://smartapp.tuya.com/tuyasmart/',
    title: 'Tuya Smart',
    src: '/Media/MobileApps/TuyaSmart.png',
    alt: 'Tuya Smart',
    imageClassName: 'rounded-md',
    platforms: ['ios', 'android'],
  },
  {
    link: 'https://ncalc-app.web.app/',
    title: 'NCalc fx',
    src: '/Media/MobileApps/NCalc.png',
    alt: 'NCalc fx',
    platforms: ['ios'],
  },
  {
    link: 'https://apps.apple.com/us/app/web-inspector/id1584825745',
    title: 'Web Inspector',
    src: '/Media/MobileApps/WebInspector.png',
    alt: 'Web Inspector',
    imageClassName: 'rounded-md',
    platforms: ['ios'],
  },
  {
    link: 'https://apps.apple.com/us/app/pipifier/id1234771095',
    title: 'PiPifier',
    src: '/Media/MobileApps/PiPifier.png',
    alt: 'PiPifier',
    imageClassName: 'rounded-md',
    platforms: ['ios'],
  },
]

const platformIcons = {
  ios: {
    src: '/Media/OperatingSystems/Apple.png',
    alt: 'iOS',
  },
  android: {
    src: '/Media/OperatingSystems/Android.png',
    alt: 'Android',
  },
}

export default function MobileApps() {
  return (
    <>
      {/* Mobile Apps Section */}
      <div className="grid grid-cols-2 gap-2">
        {mobileApps.map((app, index) => (
          <SectionItem
            key={index}
            link={app.link}
            title={app.title}
            src={app.src}
            alt={app.alt}
            imageClassName={app.imageClassName}
          >
            {app.platforms.map((platform) => (
              <InnerImg
                key={platform}
                src={platformIcons[platform].src}
                alt={platformIcons[platform].alt}
              />
            ))}
          </SectionItem>
        ))}
      </div>
    </>
  )
}
