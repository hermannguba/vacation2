type Props = {
  eyebrow?: string
  title: string
  lead?: string
  light?: boolean
}

export function SectionHeading({ eyebrow, title, lead, light }: Props) {
  return (
    <div className="reveal max-w-2xl">
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${
            light ? 'text-honey-soft' : 'text-moss'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl ${
          light ? 'text-white' : 'text-pine-deep'
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p className={`mt-3 text-base leading-relaxed sm:text-lg ${light ? 'text-mist/90' : 'text-muted'}`}>
          {lead}
        </p>
      ) : null}
    </div>
  )
}
