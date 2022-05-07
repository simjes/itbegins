import React from 'react'

const Main: React.FC = ({ children }) => {
  return (
    <main className='grow'>
      <div className='mx-auto max-w-4xl px-4 xl:px-0'>{children}</div>
    </main>
  )
}

export default Main
