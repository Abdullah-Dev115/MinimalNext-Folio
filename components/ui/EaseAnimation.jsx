'use client'
// This component has been created by AI

import { useEffect, useState, useRef } from 'react'

export default function EaseAnimation({
  children,
  delay = 10,
  duration = 1000,
  translateY = 10,
  easing = 'ease-in-out',
}) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, delay)

      return () => {
        clearTimeout(timer)
      }
    })

    return () => cancelAnimationFrame(raf)
  }, [delay])

  const baseStyles = {
    isolation: 'isolate',
    position: 'relative',
    zIndex: 1,
  }

  const hiddenStyles = {
    ...baseStyles,
    opacity: 1,
    transform: `translateY(${translateY}px)`,
    transition: `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`,
  }

  const visibleStyles = {
    ...baseStyles,
    opacity: 1,
    transform: 'translateY(0)',
    transition: `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`,
  }

  return (
    <div
      ref={elementRef}
      style={isVisible ? visibleStyles : hiddenStyles}
      className="relative isolation-auto"
    >
      {children}
    </div>
  )
}
