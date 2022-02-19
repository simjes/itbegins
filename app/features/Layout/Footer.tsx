import React from 'react'

// TODO: ikoner på actions
const Footer = () => {
  return (
    <footer className='py-4'>
      <div className='h-64 py-12 flex flex-col md:flex-row justify-between max-w-4xl mx-auto'>
        <div>Lodde</div>

        <div className='flex flex-col'>
          <a
            className='font-bold underline decoration-2 decoration-sky-500 hover:text-pink-500 transition ease-in-out duration-300 p-1'
            href='mailto:hei@lodde-consulting.no'
          >
            hei@lodde-consulting.no
          </a>
          <a
            className='mt-2 font-bold underline decoration-2 decoration-sky-500 hover:text-pink-500 transition ease-in-out duration-300 p-1'
            href='tel:98620963'
          >
            986 20 963
          </a>
          <a
            className='mt-2 font-bold underline decoration-2 decoration-sky-500 hover:text-pink-500 transition ease-in-out duration-300 p-1'
            href=''
          >
            Her finner du oss
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
