import React from 'react'
import { EmployeeOverview } from './model'

const Employee = ({ image, name, role, cvUrl }: EmployeeOverview) => {
  return (
    <article className='rounded-xl p-1 relative'>
      <div
        aria-hidden
        className='absolute -z-10 h-52 blur-xl w-48 left-0 right-0 mx-auto top-1/2 rounded-full hidden dark:block
        bg-gradient-to-b from-violet-500 to-fuchsia-500'
      />

      <a
        href={cvUrl}
        className='flex flex-col p-6 rounded-lg bg-white shadow-md hover:scale-105 hover:shadow-lg transform ease-in-out duration-300 ring-1 ring-slate-800/5 
        dark:ring-white/[.15] dark:shadow-[inset_0_2px_3px_rgba(255,255,255,0.06)] dark:bg-slate-800/70 dark:backdrop-blur-xl'
        aria-label={`Se ${name} sin CV`}
        target='_blank'
        rel='noreferrer'
      >
        <img
          src={image}
          className='w-64 h-64 rounded-full'
          alt={`Bilde av ansatt ${name}`}
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
