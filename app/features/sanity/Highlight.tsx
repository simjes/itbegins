import type { ReactNode } from 'react'
import React from 'react'

export const Highlight = ({ children }: { children: ReactNode }) => {
  return (
    <span className='relative ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-gradient-to-r before:from-violet-500 before:to-fuchsia-500'>
      <span className='relative skew-y-3 text-white'>{children}</span>
    </span>
  )
}
