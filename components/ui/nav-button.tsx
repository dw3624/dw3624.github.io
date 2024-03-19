import React from 'react'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export type NavButtonType = {
  variant: 'prev' | 'next'
  slug?: string
  text: string
}

export const NavButton = ({ variant, slug, text }: NavButtonType) => {
  if (slug) {
    return (
      <Link
        href={slug || '#'}
        className="flex flex-1 gap-4 items-center p-4 text-sm text-muted-foreground border hover:text-primary border-primary/20"
      >
        {variant === 'prev' && <ChevronLeft size={20} />}
        <div
          className="flex flex-1 flex-col"
          style={{ textAlign: variant === 'prev' ? 'right' : 'left' }}
        >
          <span className="text-xs text-foreground">
            {variant === 'prev' ? 'Previous' : 'Next'}
          </span>
          <span className="truncate">{text}</span>
        </div>
        {variant === 'next' && <ChevronRight size={20} />}
      </Link>
    )
  }
}
