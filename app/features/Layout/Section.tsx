import React, { ReactNode } from 'react'
import DecorationLine from './DecorationLine'

interface SectionProps {
  children: ReactNode
}

export const Section = ({ children }: SectionProps) => {
  return <section className='mt-24'>{children}</section>
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <header className='flex flex-col items-center'>
    <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-200'>
      {title}
    </h2>

    {subtitle && (
      <p className='text-xl md:text-2xl font-bold dark:text-slate-400'>
        {subtitle}
      </p>
    )}

    <DecorationLine />
  </header>
)
