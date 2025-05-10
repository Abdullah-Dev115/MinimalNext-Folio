import localFont from 'next/font/local'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getLocale } from 'next-intl/server'
import { Toaster } from 'react-hot-toast'
import NavBar from '@/components/ui/navBar'
import { BeamsBackground } from '@/components/ui/backgrounds/beams-background'

function PersistentBackground() {
  return (
    <div className="fixed inset-0 z-0">
      {/* For more background, explore the folder components/ui/backgrounds */}
      <BeamsBackground />
    </div>
  )
}

const Ibm = localFont({
  src: [
    {
      path: './fonts/ibm/IBMPlexSansArabic-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/ibm/IBMPlexSansArabic-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/ibm/IBMPlexSansArabic-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/ibm/IBMPlexSansArabic-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ibm/IBMPlexSansArabic-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/ibm/IBMPlexSansArabic-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/ibm/IBMPlexSansArabic-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-ibm',
})

export default async function RootLayout({ children }) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    // Change page direction based on the locale
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${Ibm.variable} relative min-h-screen bg-slate-900 font-ibm text-slate-200 antialiased`}
      >
        {/* You can find really cool backgrounds in 21st.dev and www.reactbits.dev */}
        <PersistentBackground />

        {/* Main content */}
        <main className="relative z-40">
          <NextIntlClientProvider messages={messages}>
            <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-40 h-14 bg-gradient-to-t from-neutral-950/80 to-transparent sm:top-0 sm:bg-gradient-to-b" />

            <div className="sticky top-0 z-50">
              <div className="mx-auto flex items-center justify-between px-10 py-4 pb-10">
                <NavBar />
              </div>
            </div>
            <Toaster />
            {children}
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  )
}
