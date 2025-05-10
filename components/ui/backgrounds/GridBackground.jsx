'use client'

// used in ContactForm.jsx component

export function GridBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background: 'radial-gradient(circle at top right, #1E40AF, #000000)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  )
}
