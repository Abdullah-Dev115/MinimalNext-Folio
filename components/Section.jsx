export default function Section({ id, title, subtitle, children }) {
  return (
    <div id={id} className="flex scroll-mt-24 flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold xs:text-3xl md:text-4xl">{title}</h2>
        {subtitle && (
          <h3 className="text-lg text-zinc-400 sm:text-xl">{subtitle}</h3>
        )}
      </div>
      {children}
    </div>
  )
}
