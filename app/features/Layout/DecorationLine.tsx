import React from 'react'
import cn from 'classnames'

type Type = 'purple' | 'blue'

interface Props {
  type?: Type
  className?: string
}

const DecorationLine = ({ className = 'w-24', type = 'purple' }: Props) => {
  return (
    <div
      aria-hidden
      className={cn(
        'h-1 mt-2 bg-gradient-to-r rounded-full',
        type === 'purple' ? 'from-violet-500 to-fuchsia-500' : '',
        type === 'blue' ? 'from-cyan-500 to-blue-500' : '',
        className,
      )}
    />
  )
}

export default DecorationLine
