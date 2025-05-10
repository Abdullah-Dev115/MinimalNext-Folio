'use client'
import { Suspense, memo } from 'react'
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from './PortableTextComponents'

// memoizing portableTextContent to prevent unnecessary re-renders
const PortableTextContent = memo(function PortableTextContent({ value }) {
  return <PortableText value={value} components={portableTextComponents} />
})

export default function SuspensePortableText({ value }) {
  return (
    <Suspense
      fallback={
        <div className="space-y-3">
          <div className="h-5 w-full rounded bg-gray-300/10"></div>
          <div className="h-5 w-5/6 rounded bg-gray-300/10"></div>
          <div className="h-5 w-4/6 rounded bg-gray-300/10"></div>
        </div>
      }
    >
      <PortableTextContent value={value} />
    </Suspense>
  )
}
