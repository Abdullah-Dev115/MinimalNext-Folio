import { getLocale, getTranslations } from 'next-intl/server'

import Image from 'next/image'

import HeadersNav from './ui/HeadersNav'
import DeveloperSkills from './sections/DeveloperSkills'
import OperatingSystems from './sections/OperatingSystems'
import Contributions from './sections/Contributions'
import PCSoftwares from './sections/PCSoftwares'
import MobileApps from './sections/MobileApps'
import Websites from './sections/Websites'
import Other from './sections/Other'
import Footer from './Footer'
import ReadMore from './ReadMore'
import SocialButton from './SocialButton'
import Section from './Section'
import ContactForm from './sections/ContactForm'
import ShowMessageCVModal from './ShowMessageCVModal'

import {
  BrandGithub,
  BrandLinkedinSolid,
  EarthSolid,
} from '@mynaui/icons-react'
import { TbBrandWhatsapp } from 'react-icons/tb'
import ArabicAboutContent, {
  EnglishAboutContent,
} from './content/aboutContentAR'
import WorkExperience from './sections/WorkExperience'

export default async function About() {
  const t = await getTranslations()
  const locale = await getLocale()

  const SocialLinks = [
    {
      link: 'https://github.com/',
      icon: <BrandGithub className="size-6 md:size-5" />,
      text: 'GitHub',
      ariaLabel: 'GitHub',
    },
    {
      link: 'https://www.linkedin.com/',
      icon: <BrandLinkedinSolid className="size-6 md:size-5" />,
      text: 'LinkedIn',
      ariaLabel: 'LinkedIn',
    },
    // {
    //   link: 'https://wa.link/',
    //   icon: <TbBrandWhatsapp className="size-6 md:size-5" />,
    //   text: 'WhatsApp',
    //   ariaLabel: 'WhatsApp',
    // },
  ]

  return (
    <>
      <div className="relative flex w-full justify-center text-white">
        {/* Headers Navigation Bar */}
        <HeadersNav />

        <div className="flex w-full items-center justify-center">
          <div className="h-full w-full md:max-w-5xl">
            <div className="relative mx-auto flex flex-col justify-center md:flex-row lg:px-12 xl:space-x-4 xl:px-0">
              {/* Avatar Container */}
              <div className="w-full md:w-1/4">
                {/* Sticky Content */}
                <div className="sticky top-14 mb-6 flex flex-col items-center lg:px-4">
                  <div className="flex flex-col items-center justify-center gap-3">
                    {/* Avatar */}
                    <Image
                      src="/Media/Avatar.jpeg"
                      alt="Avatar"
                      className="rounded-full border border-cyan-700 object-cover shadow-lg"
                      width={155}
                      height={155}
                    />

                    <div className="flex items-center justify-center gap-2 text-sm font-medium lg:text-base">
                      <EarthSolid className="h-6 w-6 text-cyan-400" />
                      {/* Location */}
                      <span className="text-start">
                        {t('personalInfo.location')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex w-full flex-col px-4 md:w-[68%] md:pt-8 lg:w-3/4 lg:px-4">
                {/* Name and Position */}
                <div className="flex flex-col gap-2 text-center md:text-start">
                  <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    {t('personalInfo.name')}
                  </h1>
                  <h2 className="font-regular text-2xl text-zinc-300 sm:text-3xl md:text-4xl">
                    {t('personalInfo.position')}
                  </h2>
                </div>

                {/* Social Buttons */}
                <div className="mt-4 flex justify-center gap-2 font-medium md:mt-8 md:justify-normal">
                  {SocialLinks.map((SocialLink) => {
                    return (
                      <SocialButton
                        key={SocialLink.text}
                        link={SocialLink.link}
                        text={SocialLink.text}
                        aria-label={SocialLink.ariaLabel}
                      >
                        {SocialLink.icon}
                      </SocialButton>
                    )
                  })}

                  <ShowMessageCVModal />
                </div>

                {/* About Me Paragraph */}
                <div className="mt-8 flex flex-col">
                  <ReadMore
                    text={
                      locale == 'en'
                        ? EnglishAboutContent()
                        : ArabicAboutContent()
                    }
                    maxHeight="6.5em"
                  />
                </div>

                {/* Sections */}
                <div className="my-8 flex flex-col gap-12">
                  <Section
                    id="work-experience"
                    title={t('sections.WorkExperience.title')}
                  >
                    <WorkExperience />
                  </Section>
                  <Section
                    id="developer-skills"
                    title={t('sections.DeveloperSkills.title')}
                    subtitle={t('sections.DeveloperSkills.subtitle')}
                  >
                    <DeveloperSkills />
                  </Section>

                  <Section
                    id="operating-systems"
                    title={t('sections.OperatingSystems.title')}
                    subtitle={t('sections.OperatingSystems.subtitle')}
                  >
                    <OperatingSystems />
                  </Section>

                  <Section
                    id="contributions"
                    title={t('sections.Contributions.title')}
                  >
                    <Contributions />
                  </Section>

                  <Section
                    id="pc-softwares"
                    title={t('sections.PCSoftwares.title')}
                    subtitle={t('sections.PCSoftwares.subtitle')}
                  >
                    <PCSoftwares />
                  </Section>

                  <Section
                    id="mobile-apps"
                    title={t('sections.MobileApps.title')}
                    subtitle={t('sections.MobileApps.subtitle')}
                  >
                    <MobileApps />
                  </Section>

                  <Section
                    id="interesting-websites"
                    title={t('sections.Websites.title')}
                    subtitle={t('sections.Websites.subtitle')}
                  >
                    <Websites />
                  </Section>

                  <Section id="other" title={t('sections.Other.title')}>
                    <Other />
                  </Section>

                  <Section id="contactme" title={t('sections.ContactMe.title')}>
                    <ContactForm />
                  </Section>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
