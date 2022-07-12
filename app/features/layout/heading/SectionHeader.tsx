import DecorationLine from '../DecorationLine'
import type { HeadingLevel } from './Heading'
import { H } from './Heading'

interface Props {
  title: string
  subtitle?: string
  level?: HeadingLevel
}

export const SectionHeader = ({ title, subtitle, level = 2 }: Props) => (
  <header className='flex flex-col items-center'>
    <H
      className='text-center text-3xl font-bold text-slate-900 dark:text-slate-200 md:text-4xl'
      level={level}
    >
      {title}
    </H>

    {subtitle && (
      <p className='text-center text-xl font-bold dark:text-slate-400 md:text-2xl'>
        {subtitle}
      </p>
    )}

    <DecorationLine />
  </header>
)
