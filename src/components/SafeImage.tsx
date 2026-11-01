import { useState } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
}

export function SafeImage({ src, alt, className }: Props) {
  const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading')

  return (
    <div className={`relative overflow-hidden bg-charcoal/10 ${className ?? ''}`}>
      {state === 'loading' ? (
        <div className="absolute inset-0 animate-pulse bg-charcoal/10" aria-hidden />
      ) : null}
      {state === 'error' ? (
        <div className="flex h-full min-h-40 items-center justify-center text-sm text-charcoal/50">
          Image unavailable
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover ${state === 'ready' ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setState('ready')}
          onError={() => setState('error')}
        />
      )}
    </div>
  )
}
