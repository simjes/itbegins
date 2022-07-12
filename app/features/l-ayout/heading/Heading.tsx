import type { HTMLAttributes, ReactNode, Ref } from 'react'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5
type HeadTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

export interface Props extends HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel
  elementRef?: Ref<HTMLHeadingElement>
  children: ReactNode
}

export const H = ({ level, elementRef, ...props }: Props) => {
  const Tag = `h${level}` as HeadTag
  return <Tag ref={elementRef} {...props} />
}

export const H1 = ({ children }: { children: ReactNode }) => (
  <h1 className='mb-2 text-3xl font-bold text-slate-900 dark:text-slate-200 md:text-4xl'>
    {children}
  </h1>
)
export const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className='mb-2 text-2xl font-bold text-slate-900 dark:text-slate-200 md:text-3xl'>
    {children}
  </h2>
)
export const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className='mb-2 text-xl font-bold text-slate-900 dark:text-slate-200 md:text-2xl'>
    {children}
  </h3>
)
export const H4 = ({ children }: { children: ReactNode }) => (
  <h4 className='mb-2 text-lg font-bold text-slate-900 dark:text-slate-200 md:text-xl'>
    {children}
  </h4>
)
export const H5 = ({ children }: { children: ReactNode }) => (
  <h5 className='text-md mb-2 font-bold text-slate-900 dark:text-slate-200 md:text-lg'>
    {children}
  </h5>
)
export const H6 = ({ children }: { children: ReactNode }) => (
  <h6 className='text-md mb-2 font-bold text-slate-900 dark:text-slate-200'>
    {children}
  </h6>
)
