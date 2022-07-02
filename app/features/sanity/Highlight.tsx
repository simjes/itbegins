import type { ReactNode } from 'react'
import React from 'react'

export const Highlight = ({ children }: { children: ReactNode }) => (
  <span className='inline-block -skew-y-2 transform bg-gradient-to-r from-violet-500 to-fuchsia-500 px-1'>
    <span className='inline-block skew-y-2 text-white'>{children}</span>
  </span>
)
