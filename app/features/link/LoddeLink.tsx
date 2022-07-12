interface Props {
  href: string
  text: string
  ariaLabel?: string
}

const LoddeLink = ({ href, text, ariaLabel }: Props) => {
  return (
    <a
      className='font-bold underline decoration-cyan-500 decoration-2 transition duration-300 ease-in-out hover:text-fuchsia-500 dark:text-white dark:hover:text-fuchsia-500'
      href={href}
      target='_blank'
      aria-label={ariaLabel}
      rel='noreferrer'
    >
      {text}
    </a>
  )
}

export default LoddeLink
