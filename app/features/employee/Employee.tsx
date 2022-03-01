import React from 'react'
import { EmployeeOverview } from './model'

const Employee = ({ image, name, role, cvUrl }: EmployeeOverview) => {
  return (
    <article className='bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl p-1 hover:scale-105 hover:shadow-lg transform ease-in-out duration-300'>
      <a
        href={cvUrl}
        className='flex flex-col bg-white dark:bg-slate-900 p-6 rounded-lg'
        aria-label={`Se ${name} sin CV`}
        target='_blank'
        rel='noreferrer'
      >
        <img
          src={image}
          className='w-64 h-64 rounded-full'
          alt={`Bilde av ansatt ${name}`}
        />
        <div className='mt-4 text-2xl text-sky-500'>{name}</div>
        <div className='text-pink-500'>{role}</div>
      </a>
    </article>
  )
}

export default Employee
