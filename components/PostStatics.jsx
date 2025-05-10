'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { TwitterShareButton, LinkedinShareButton } from 'react-share'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function PostStatics() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const t = useTranslations('postStatics')
  return (
    <div
      // You can remove the () in the files in blog and projects folders from the divs to make it change the direction base in the locale changing in root layout.js

      className="mb-1.5 mt-9 flex items-center justify-between text-base"
    >
      {/* Post Author */}
      <div className="flex items-center justify-start gap-3">
        <div className="flex items-center gap-2">
          <Image
            src="/Media/Avatar.jpeg"
            className="h-10 w-10 rounded-full border border-white/55 md:h-12 md:w-12 lg:h-14 lg:w-14"
            width={56}
            height={56}
            alt="Avatar"
            aria-label="Avatar"
          />
        </div>

        <p className="text-sm font-semibold sm:text-base">{t('author')}</p>
      </div>

      {/* Post Share Buttons */}
      <div className="relative">
        <button
          className="left-0 inline-flex items-center justify-start gap-2 rounded-xl border border-white/15 bg-white/10 px-2 py-2 text-xs font-medium text-gray-300 shadow-xl backdrop-blur-lg transition-all duration-200 hover:border-white/30 hover:bg-white/25 hover:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-gray-400 md:text-sm lg:px-2.5 lg:py-2.5"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>{t('share')}</span>

          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="15.1074"
            height="22.5034"
          >
            <g>
              <rect height="22.5034" opacity="0" width="15.1074" x="0" y="0" />
              <path
                d="M14.7339 9.14746L14.7339 17.4316C14.7339 19.1416 13.8623 20.0049 12.1274 20.0049L2.60645 20.0049C0.871582 20.0049 0 19.1416 0 17.4316L0 9.14746C0 7.4375 0.871582 6.57422 2.60645 6.57422L5.10498 6.57422L5.10498 7.91064L2.62305 7.91064C1.79297 7.91064 1.33643 8.35889 1.33643 9.22217L1.33643 17.3569C1.33643 18.2202 1.79297 18.6685 2.62305 18.6685L12.1025 18.6685C12.9243 18.6685 13.3975 18.2202 13.3975 17.3569L13.3975 9.22217C13.3975 8.35889 12.9243 7.91064 12.1025 7.91064L9.62891 7.91064L9.62891 6.57422L12.1274 6.57422C13.8623 6.57422 14.7339 7.4375 14.7339 9.14746Z"
                fill="#ffffff"
                fillOpacity="0.85"
              />
              <path
                d="M7.36279 13.5054C7.71973 13.5054 8.02686 13.2065 8.02686 12.8579L8.02686 4.33301L7.97705 3.08789L8.5332 3.67725L9.79492 5.02197C9.91113 5.15479 10.0771 5.22119 10.2432 5.22119C10.5835 5.22119 10.8491 4.97217 10.8491 4.63184C10.8491 4.45752 10.7744 4.32471 10.6499 4.2002L7.84424 1.49414C7.67822 1.32812 7.53711 1.27002 7.36279 1.27002C7.19678 1.27002 7.05566 1.32812 6.88135 1.49414L4.07568 4.2002C3.95117 4.32471 3.88477 4.45752 3.88477 4.63184C3.88477 4.97217 4.13379 5.22119 4.48242 5.22119C4.64014 5.22119 4.82275 5.15479 4.93896 5.02197L6.19238 3.67725L6.75684 3.08789L6.70703 4.33301L6.70703 12.8579C6.70703 13.2065 7.00586 13.5054 7.36279 13.5054Z"
                fill="#ffffff"
                fillOpacity="0.85"
              />
            </g>
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="absolute left-0 z-10 mt-2 w-36 overflow-hidden rounded-xl border border-white/20 bg-indigo-400/10 text-white placeholder-gray-400 shadow-md backdrop-blur-2xl focus:border-blue-500">
            <div className="py-1 text-center">
              <div className="block px-1 py-2 text-sm text-zinc-100 transition-all duration-150 hover:bg-indigo-400/15">
                <button
                  dir="ltr"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                    toast(t('copiedToClipboard'), {
                      icon: '✅',
                      duration: '300',
                      position:
                        window.innerWidth < 640 ? 'top-left' : 'bottom-left',
                      style: {
                        borderRadius: '12px',
                        borderWidth: '1px',
                        paddingRight: '1rem',
                        fontSize: '14px',
                        paddingLeft: '1rem',
                        backdropFilter: 'blur(10px)',
                        borderColor: 'rgb(255 255 255 / 0.2)',
                        background: 'rgb(255 255 255 / 0.1)',
                        color: '#fff',
                        marginBottom: window.innerWidth < 640 ? '32px' : '0',
                      },
                    })
                    setIsDropdownOpen(false)
                  }}
                  className="flex w-full items-center justify-center"
                >
                  <span className="ml-1 text-base">{t('copyLink')}</span>
                </button>
              </div>

              <div className="block px-1 py-2 text-sm text-zinc-100 transition-all duration-150 hover:bg-indigo-400/15">
                <TwitterShareButton
                  url={window.location.href}
                  className="flex w-full items-center justify-center hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <span className="ml-1 text-base">Twitter (X)</span>
                </TwitterShareButton>
              </div>

              <div className="block px-1 py-2 text-sm text-zinc-100 transition-all duration-150 hover:bg-indigo-400/15">
                <LinkedinShareButton
                  url={window.location.href}
                  className="flex w-full items-center justify-center hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <span className="ml-1 text-base">LinkedIn</span>
                </LinkedinShareButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
