// used in PostViews.jsx and ProjectViews.jsx components
const Ping = () => {
  return (
    <div className="absolute -right-1 -top-1">
      <span className="flex size-[11px]">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
        <span className="relative inline-flex size-[11px] rounded-full bg-cyan-500"></span>
      </span>
    </div>
  )
}
export default Ping
