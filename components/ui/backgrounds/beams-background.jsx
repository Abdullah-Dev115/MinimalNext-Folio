'use client'

// This background is downloaded from 21st.dev and ajusted by me and AI

import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

// Adjust these values to change the animation
// ===================================================================
// Speed multiplier: Higher values = faster animation (1.0 = normal speed)
const SPEED_MULTIPLIER = 1.5

// Beam density: Controls how many beams are rendered (higher = more beams)
const BEAM_DENSITY = 2

// Base number of beams (will be multiplied by BEAM_DENSITY)
const MINIMUM_BEAMS = 20

// Pulse speed multiplier: Controls how fast the opacity pulses (higher = faster pulse)
const PULSE_SPEED_MULTIPLIER = 2.5

// Beam width range: Controls the min/max width of beams
const MIN_BEAM_WIDTH = 30
const MAX_BEAM_WIDTH_VARIANCE = 60

// Color range: Hue values for the beams (HSL color model)
const BASE_HUE = 190
const HUE_VARIANCE = 70
// ===================================================================

function createBeam(width, height) {
  const angle = -35 + Math.random() * 10 // Beam angle (slightly randomized)
  return {
    // Position: Randomized across the screen with some overflow
    x: Math.random() * width * 1.5 - width * 0.12,
    y: Math.random() * height * 1.5 - height * 0.12,

    // Beam dimensions
    width: MIN_BEAM_WIDTH + Math.random() * MAX_BEAM_WIDTH_VARIANCE,
    length: height * 2.5, // Beam length relative to screen height

    angle: angle, // Rotation angle

    // Movement speed: Base speed + random variance, affected by SPEED_MULTIPLIER
    speed: 0.6 + Math.random() * 1.2,

    // Visual properties
    opacity: 0.12 + Math.random() * 0.05, // Base opacity before pulsing
    hue: BASE_HUE + Math.random() * HUE_VARIANCE, // Color hue with randomization

    // Pulsing effect properties
    pulse: Math.random() * Math.PI * 2, // Random starting phase
    pulseSpeed: (0.02 + Math.random() * 0.03) * PULSE_SPEED_MULTIPLIER, // How fast opacity pulses
  }
}

export function BeamsBackground({
  className,
  // Intensity controls the overall opacity of beams
  // Options: 'subtle', 'medium', 'strong'
  intensity = 'medium',
}) {
  const canvasRef = useRef(null)
  const beamsRef = useRef([])
  const animationFrameRef = useRef(0)
  const [isChrome, setIsChrome] = useState(false)

  // Opacity multiplier based on intensity prop
  const opacityMap = {
    subtle: 0.7, // More transparent
    medium: 0.85, // Balanced visibility
    strong: 1, // Maximum opacity
  }

  // Detect browser
  useEffect(() => {
    // Check if browser is Chrome
    const isChromium = window.navigator.userAgent.indexOf('Chrome') > -1
    const isEdge = window.navigator.userAgent.indexOf('Edg') > -1
    setIsChrome(isChromium && !isEdge)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const updateCanvasSize = () => {
      // Handle high-DPI displays for crisp rendering
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)

      // Create beams based on density setting
      const totalBeams = MINIMUM_BEAMS * BEAM_DENSITY
      beamsRef.current = Array.from({ length: totalBeams }, () =>
        createBeam(canvas.width, canvas.height)
      )
    }

    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    // Reset beam when it goes off screen (reposition at bottom)
    function resetBeam(beam, index, totalBeams) {
      if (!canvas) return beam

      // Position beams in columns for more even distribution
      const column = index % 3
      const spacing = canvas.width / 3

      beam.y = canvas.height + 100 // Start below the visible screen
      beam.x =
        column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5
      beam.width = 100 + Math.random() * 100 // Wider beams when reset

      // Speed when reset, affected by SPEED_MULTIPLIER
      beam.speed = (0.5 + Math.random() * 0.4) * SPEED_MULTIPLIER

      // Distribute colors evenly across beams
      beam.hue = BASE_HUE + (index * HUE_VARIANCE) / totalBeams
      beam.opacity = 0.2 + Math.random() * 0.1
      return beam
    }

    function drawBeam(ctx, beam) {
      ctx.save()
      ctx.translate(beam.x, beam.y)
      ctx.rotate((beam.angle * Math.PI) / 180)

      const pulsingOpacity =
        beam.opacity *
        (0.8 + Math.sin(beam.pulse) * 0.2) *
        opacityMap[intensity]

      // Create gradient for beam with faded edges
      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length)

      gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`) // Transparent at top
      gradient.addColorStop(
        0.1,
        `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`
      )
      gradient.addColorStop(
        0.4,
        `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`
      ) // Full opacity in middle
      gradient.addColorStop(
        0.6,
        `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`
      )
      gradient.addColorStop(
        0.9,
        `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`
      )
      gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`) // Transparent at bottom

      ctx.fillStyle = gradient
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length)
      ctx.restore()
    }

    // Main animation loop
    function animate() {
      if (!canvas || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const totalBeams = beamsRef.current.length
      beamsRef.current.forEach((beam, index) => {
        // Move beam upward, speed affected by SPEED_MULTIPLIER
        beam.y -= beam.speed * SPEED_MULTIPLIER

        // Update pulse phase for opacity animation
        beam.pulse += beam.pulseSpeed

        // Reset beam when it goes off screen
        if (beam.y + beam.length < -100) {
          resetBeam(beam, index, totalBeams)
        }

        drawBeam(ctx, beam)
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup function
    return () => {
      window.removeEventListener('resize', updateCanvasSize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [intensity])

  return (
    <div
      className={cn('relative min-h-screen w-full overflow-hidden', className)}
    >
      {/* Main canvas for beam rendering */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />

      {/* Chrome-optimized blur layer */}
      {isChrome ? (
        <>
          <div className="absolute inset-0 bg-blue-800/10" />
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1), transparent 70%)',
              transform: 'translateZ(0)',
            }}
          />
        </>
      ) : (
        <>
          {/* Full effects for Safari and other browsers */}
          <div className="absolute inset-0 bg-blue-800/10 backdrop-blur-sm" />
        </>
      )}

      {/* Animated opacity layer for additional depth */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          ease: 'easeInOut',
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
    </div>
  )
}
