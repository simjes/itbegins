import type { ReactNode } from 'react'
import React from 'react'

interface Props {
  children: ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <main className='grow'>
      <div className='mx-auto max-w-4xl px-4 xl:px-0'>{children}</div>
    </main>
  )
}

export default Main
