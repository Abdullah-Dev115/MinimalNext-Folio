'use client'
// Generated by AI

import { useState, useRef, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { ChevronDown, ChevronUp } from '@mynaui/icons-react'

export default function ReadMore({ text, maxHeight = '4.5em' }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef(null)
  const t = useTranslations('read')

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [text])

  const getMaxHeightInPx = () => {
    if (typeof maxHeight === 'string' && maxHeight.endsWith('em')) {
      const emValue = parseFloat(maxHeight)
      return `${emValue * 20}px`
    }
    return maxHeight
  }

  return (
    <div className="flex flex-col">
      <div
        className="relative overflow-hidden transition-all duration-500 ease-out"
        style={{
          height: isExpanded ? `${contentHeight}px` : getMaxHeightInPx(),
        }}
      >
        <div ref={contentRef}>
          <p className="prose-neutral prose whitespace-pre-line px-1 text-lg font-medium leading-normal">
            {text}
          </p>
        </div>

        {!isExpanded ? (
          <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-slate-900 to-transparent">
            <button
              onClick={() => setIsExpanded(true)}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-gray-700/70 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <div className="flex items-center gap-1">
                {t('ReadMore')}
                <ChevronDown className="h-3.5 w-3.5" />
              </div>
            </button>
          </div>
        ) : null}
      </div>

      {isExpanded && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setIsExpanded(false)}
            className="rounded-full border border-white/20 bg-gray-700/70 px-3 py-1 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
          >
            <div className="flex items-center gap-1">
              {t('ReadLess')}
              <ChevronUp className="h-3.5 w-3.5" />
            </div>
          </button>
        </div>
      )}
    </div>
  )
}
