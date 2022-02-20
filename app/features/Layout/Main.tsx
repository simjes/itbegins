import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <main className='mt-4 grow'>
      <div className='max-w-4xl mx-auto px-4 xl:px-0'>{children}</div>
    </main>
  )
}

export default Main
