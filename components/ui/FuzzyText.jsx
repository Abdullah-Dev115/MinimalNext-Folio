'use client'
// This component is from 21st.dev
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const FuzzyText = ({
  children,
  fontSize = 'clamp(2rem, 10vw, 10rem)',
  fontWeight = 900,
  fontFamily = 'inherit',
  color = '#fff',
  enableHover = true,
  baseIntensity = 0.18,
  hoverIntensity = 0.5,
}) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    let animationFrameId
    let isCancelled = false
    const canvas = canvasRef.current
    if (!canvas) return

    const init = async () => {
      if (document.fonts?.ready) {
        await document.fonts.ready
      }
      if (isCancelled) return

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const computedFontFamily =
        fontFamily === 'inherit'
          ? window.getComputedStyle(canvas).fontFamily || 'sans-serif'
          : fontFamily

      const fontSizeStr =
        typeof fontSize === 'number' ? `${fontSize}px` : fontSize
      let numericFontSize
      if (typeof fontSize === 'number') {
        numericFontSize = fontSize
      } else {
        const temp = document.createElement('span')
        temp.style.fontSize = fontSize
        document.body.appendChild(temp)
        const computedSize = window.getComputedStyle(temp).fontSize
        numericFontSize = parseFloat(computedSize)
        document.body.removeChild(temp)
      }

      // Handle both text and image content
      const content = React.Children.toArray(children)
      let totalWidth = 0
      let maxHeight = numericFontSize

      // First pass: calculate dimensions and load images
      const elements = await Promise.all(
        content.map(async (child) => {
          if (typeof child === 'string') {
            ctx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`
            const metrics = ctx.measureText(child)
            const width = metrics.width
            return {
              type: 'text',
              content: child,
              width,
              height: numericFontSize,
            }
          } else if (React.isValidElement(child) && child.type === Image) {
            const img = new Image()
            await new Promise((resolve) => {
              img.onload = resolve
              img.src = child.props.src
            })
            const height = numericFontSize
            const width = (img.width / img.height) * height
            return { type: 'image', content: img, width, height }
          }
          return null
        })
      )

      // Calculate total width and max height
      elements.forEach((element) => {
        if (element) {
          totalWidth += element.width + 10 // Add 10px spacing
          maxHeight = Math.max(maxHeight, element.height)
        }
      })

      // Create offscreen canvas
      const offscreen = document.createElement('canvas')
      const offCtx = offscreen.getContext('2d')
      if (!offCtx) return

      const extraWidthBuffer = 20
      offscreen.width = totalWidth + extraWidthBuffer
      offscreen.height = maxHeight

      // Draw elements on offscreen canvas
      let currentX = extraWidthBuffer / 2
      elements.forEach((element) => {
        if (!element) return

        if (element.type === 'text') {
          offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`
          offCtx.fillStyle = color
          offCtx.textBaseline = 'middle'
          offCtx.fillText(element.content, currentX, maxHeight / 2)
        } else if (element.type === 'image') {
          offCtx.drawImage(
            element.content,
            currentX,
            (maxHeight - element.height) / 2,
            element.width,
            element.height
          )
        }
        currentX += element.width + 10 // Add spacing
      })

      // Set up main canvas
      const horizontalMargin = 50
      const verticalMargin = 0
      canvas.width = offscreen.width + horizontalMargin * 2
      canvas.height = offscreen.height + verticalMargin * 2
      ctx.translate(horizontalMargin, verticalMargin)

      // Animation setup
      let isHovering = false
      const fuzzRange = 30

      const run = () => {
        if (isCancelled) return
        ctx.clearRect(
          -fuzzRange,
          -fuzzRange,
          offscreen.width + 2 * fuzzRange,
          offscreen.height + 2 * fuzzRange
        )
        const intensity = isHovering ? hoverIntensity : baseIntensity
        for (let j = 0; j < offscreen.height; j++) {
          const dx = Math.floor(intensity * (Math.random() - 0.5) * fuzzRange)
          ctx.drawImage(
            offscreen,
            0,
            j,
            offscreen.width,
            1,
            dx,
            j,
            offscreen.width,
            1
          )
        }
        animationFrameId = window.requestAnimationFrame(run)
      }

      run()

      // Mouse interaction handlers
      const handleMouseMove = (e) => {
        if (!enableHover) return
        const rect = canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        isHovering = x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height
      }

      const handleMouseLeave = () => {
        isHovering = false
      }

      if (enableHover) {
        canvas.addEventListener('mousemove', handleMouseMove)
        canvas.addEventListener('mouseleave', handleMouseLeave)
      }

      return () => {
        if (enableHover) {
          canvas.removeEventListener('mousemove', handleMouseMove)
          canvas.removeEventListener('mouseleave', handleMouseLeave)
        }
      }
    }

    init()

    return () => {
      isCancelled = true
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [
    children,
    fontSize,
    fontWeight,
    fontFamily,
    color,
    enableHover,
    baseIntensity,
    hoverIntensity,
  ])

  return <canvas ref={canvasRef} />
}

export default FuzzyText
