import { notFound } from 'next/navigation'

export default function CatchAllPage() {
  notFound()
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}
