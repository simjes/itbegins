import type { ReactNode } from 'react'

export const H1 = ({ children }: { children: ReactNode }) => (
  <h1 className='text-3xl font-bold text-slate-900 dark:text-slate-200 md:text-4xl'>
    {children}
  </h1>
)
export const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-200 md:text-3xl'>
    {children}
  </h2>
)
export const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className='text-xl font-bold text-slate-900 dark:text-slate-200 md:text-2xl'>
    {children}
  </h3>
)
export const H4 = ({ children }: { children: ReactNode }) => (
  <h4 className='text-lg font-bold text-slate-900 dark:text-slate-200 md:text-xl'>
    {children}
  </h4>
)
export const H5 = ({ children }: { children: ReactNode }) => (
  <h5 className='text-md font-bold text-slate-900 dark:text-slate-200 md:text-lg'>
    {children}
  </h5>
)
export const H6 = ({ children }: { children: ReactNode }) => (
  <h6 className='text-md font-bold text-slate-900 dark:text-slate-200'>
    {children}
  </h6>
)
