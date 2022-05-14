import React from 'react'

export interface Props {
  image: string
  name: string
  role: string
  cvUrl: string
}

const Employee = ({ image, name, role, cvUrl }: Props) => {
  return (
    <article className='relative rounded-xl p-1'>
      <div
        aria-hidden
        className='absolute left-0 right-0 top-1/2 -z-10 mx-auto hidden h-52 w-48 rounded-full bg-gradient-to-b from-violet-500
        to-fuchsia-500 blur-xl dark:block'
      />

      <a
        href={cvUrl}
        className='flex transform flex-col rounded-lg bg-white p-6 shadow-md ring-1 ring-slate-800/5 duration-300 ease-in-out hover:scale-105 hover:shadow-lg 
        dark:bg-slate-800/70 dark:shadow-[inset_0_2px_3px_rgba(255,255,255,0.06)] dark:ring-white/[.15] dark:backdrop-blur-xl'
        aria-label={`View ${name}'s CV`}
        target='_blank'
        rel='noreferrer'
      >
        <img
          src={image}
          className='h-64 w-64 rounded-full'
          alt={`Owner at IT Begins, ${name}`}
        />
        <div className='mt-4 text-2xl text-slate-900 dark:text-white'>
          {name}
        </div>
        <div>{role}</div>
      </a>
    </article>
  )
}

export default Employee
