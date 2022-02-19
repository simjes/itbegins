import React from 'react'
import cn from 'classnames'

interface Props {
  className?: string
}

const DecorationLine = ({ className = 'w-24' }: Props) => {
  return (
    <div
      aria-hidden
      className={cn(
        'h-1 mt-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full',
        className,
      )}
    />
  )
}

export default DecorationLine
