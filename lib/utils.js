import { clsx } from 'clsx'

import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function FormatDate(date) {
  return new Date(date).toLocaleDateString('ar-AE', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
