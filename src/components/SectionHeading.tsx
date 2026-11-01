type Props = {
  eyebrow: string
  title: string
  copy?: string
  light?: boolean
}

export function SectionHeading({ eyebrow, title, copy, light }: Props) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p
        className={`text-xs tracking-[0.32em] uppercase ${light ? 'text-mustard' : 'text-burnt'}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-4xl leading-tight md:text-5xl ${light ? 'text-cream' : 'text-charcoal'}`}
      >
        {title}
      </h2>
      {copy ? (
        <p className={`mt-4 text-base md:text-lg ${light ? 'text-cream/80' : 'text-charcoal/70'}`}>
          {copy}
        </p>
      ) : null}
    </div>
  )
}
