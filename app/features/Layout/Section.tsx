import React from 'react'
import DecorationLine from './DecorationLine'

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <header className='flex flex-col items-center'>
    <h2 className='text-center text-3xl font-bold text-slate-900 dark:text-slate-200 md:text-4xl'>
      {title}
    </h2>

    {subtitle && (
      <p className='text-center text-xl font-bold dark:text-slate-400 md:text-2xl'>
        {subtitle}
      </p>
    )}

    <DecorationLine />
  </header>
)
