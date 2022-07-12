import type { ReactNode } from 'react'
import React from 'react'
import logoLight from '~/images/logo-light.webp'

const Footer = () => {
  return (
    <footer className='mt-40 bg-slate-900 py-4 text-slate-200 dark:bg-black'>
      <div className='mx-auto flex h-full max-w-4xl flex-col justify-between space-y-10 py-12 px-4 sm:flex-row sm:space-y-0 md:h-64 xl:px-0'>
        <div>
          <div className='aspect-w-3 aspect-h-1'>
            <img
              className='h-full w-full'
              src={logoLight}
              alt='IT Begins logo'
              width={342}
              height={114}
            />
          </div>

          <div className='mt-2 flex space-x-4'>
            <ContactLink text='hei@itbegins.no' to='mailto:hei@itbegins.no' />
            <ContactLink
              ariaLabel={`Go to my twitter`}
              text='@itsalwayskos'
              to='https://twitter.com/itsalwayskos'
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

const ContactLink = ({
  to,
  icon,
  text,
  ariaLabel,
}: {
  to: string
  icon?: ReactNode
  text: string
  ariaLabel?: string
}) => (
  <a
    className='flex items-center space-x-2 py-2 font-bold underline decoration-cyan-500 decoration-2 transition duration-300 ease-in-out hover:text-fuchsia-500'
    href={to}
    target='_blank'
    rel='noreferrer'
    {...{ 'aria-label': ariaLabel }}
  >
    {icon && <div className='h-6 w-6'>{icon}</div>}
    <span>{text}</span>
  </a>
)
