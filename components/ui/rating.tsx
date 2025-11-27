import * as React from 'react'
import { Star } from 'lucide-react'

type RatingProps = {
  value: number
  max?: number
  size?: number
  readOnly?: boolean
  onChange?: (v: number) => void
}

export default function Rating({ value, max = 5, size = 16, readOnly = true, onChange }: RatingProps) {
  const [hover, setHover] = React.useState<number | null>(null)
  const display = hover ?? value

  function handleClick(i: number) {
    if (readOnly) return
    onChange?.(i)
  }

  return (
    <div className="flex items-center gap-1" role={readOnly ? 'img' : 'radiogroup'} aria-label={`Rating ${value} of ${max}`}>
      {Array.from({ length: max }).map((_, i) => {
        const idx = i + 1
        const filled = display >= idx
        return (
          <button
            key={idx}
            type="button"
            onClick={() => handleClick(idx)}
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover(null)}
            aria-checked={value === idx}
            className="p-0 bg-transparent border-0 outline-none"
            style={{ width: size + 6, height: size + 6 }}
          >
            <Star
              className={filled ? 'text-accent fill-accent' : 'text-muted-foreground'}
              size={size}
            />
          </button>
        )
      })}
    </div>
  )
}
