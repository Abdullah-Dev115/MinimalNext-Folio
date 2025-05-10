export default function Video({ src, title }) {
  return (
    <div className="relative mb-8 aspect-video w-full">
      <div className="rounded-xl border border-white/20 bg-indigo-400/10 p-3 backdrop-blur-lg sm:p-4">
        <video
          className="w-full rounded-lg"
          controls
          preload="metadata"
          playsInline
        >
          <source src={src} type="video/mp4" />
          {title}
        </video>
      </div>
    </div>
  )
}
