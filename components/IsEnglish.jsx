import { useLocale } from 'next-intl'

export default function IsEnglish() {
  const locale = useLocale()
  return (
    <>
      {locale == 'en' ? (
        <div className="flex items-center justify-center px-2">
          <p dir="ltr" className="text-center">
            Currently, Blog and Projects Pages are optimized for Arabic. You can
            modify the code to make it natively for English.
            <br />
            You can remove the (dir="rtl") in the files in blog and projects
            folders from the divs to make it natively for English.
          </p>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
