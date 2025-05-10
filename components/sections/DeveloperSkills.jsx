'use client'
import { useTranslations } from 'next-intl'
import { SectionItem } from '../SectionItem'

export default function DeveloperSkills() {
  const t = useTranslations('sections.DeveloperSkills.wantToLearnMore')

  const mainSkills = [
    {
      link: 'https://www.python.org/',
      title: 'Python',
      src: '/Media/DeveloperSkills/Python.png',
      alt: 'Python',
    },
    {
      link: 'https://www.java.com/en/download/',
      title: 'Java',
      src: '/Media/DeveloperSkills/Java.png',
      alt: 'Java',
    },
    {
      link: 'https://www.w3schools.com/html/',
      title: 'HTML',
      src: '/Media/DeveloperSkills/HTML5.svg',
      alt: 'HTML5',
    },
    {
      link: 'https://www.w3schools.com/css/',
      title: 'CSS',
      src: '/Media/DeveloperSkills/css.png',
      alt: 'CSS',
    },
    {
      link: 'https://tailwindcss.com/docs/installation',
      title: 'Tailwind CSS',
      src: '/Media/DeveloperSkills/TailwindCSS.svg',
      alt: 'TailwindCSS',
    },
    {
      link: 'https://www.w3schools.com/js/default.asp',
      title: 'Javascript',
      src: '/Media/DeveloperSkills/Javascript.png',
      alt: 'Javascript',
      imageClassName: 'rounded',
    },
    {
      link: 'https://www.typescriptlang.org/',
      title: 'Typescript',
      src: '/Media/DeveloperSkills/Typescript.png',
      alt: 'Typescript',
    },
    {
      link: 'https://nodejs.org/en',
      title: 'Node JS',
      src: '/Media/DeveloperSkills/NodejS.svg',
      alt: 'Node JS',
    },
    {
      link: 'https://react.dev',
      title: 'React JS',
      src: '/Media/DeveloperSkills/React.png',
      alt: 'ReactJS',
    },
    {
      link: 'https://nextjs.org',
      title: 'Next JS',
      src: '/Media/DeveloperSkills/Nextjs.svg',
      alt: 'Next JS',
    },
    {
      link: 'https://strapi.io/',
      title: 'Strapi',
      src: '/Media/DeveloperSkills/Strapi.png',
      alt: 'Strapi',
    },
    {
      link: 'https://www.sanity.io/',
      title: 'Sanity',
      src: '/Media/DeveloperSkills/Sanity.png',
      alt: 'Sanity',
    },
  ]

  const wantToLearnSkills = [
    {
      link: 'https://reactnative.dev/',
      title: 'React Native',
      src: '/Media/DeveloperSkills/React.png',
      alt: 'React Native',
    },
    {
      link: 'https://www.swift.org/',
      title: 'Swift',
      src: '/Media/DeveloperSkills/Swift.png',
      alt: 'Swift',
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      {/* Developer Skills Section */}
      <div className="grid grid-cols-2 gap-2">
        {mainSkills.map((skill, index) => (
          <SectionItem
            key={index}
            link={skill.link}
            title={skill.title}
            src={skill.src}
            alt={skill.alt}
            imageClassName={skill.imageClassName}
          />
        ))}
      </div>

      <h3 className="text-lg text-zinc-400 sm:text-xl">
        {t('DeveloperSkillsThatIWantToLearn')}
      </h3>

      <div
        className={`grid grid-cols-2 gap-2 [&>*:last-child:nth-child(2n+1)]:col-span-2`}
      >
        {wantToLearnSkills.map((skill, index) => (
          <SectionItem
            key={index}
            link={skill.link}
            title={skill.title}
            src={skill.src}
            alt={skill.alt}
          />
        ))}
      </div>
    </div>
  )
}
