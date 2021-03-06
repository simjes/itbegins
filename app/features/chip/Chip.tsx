interface Props {
  text: string
}

const Chip = ({ text }: Props) => (
  <div className='rounded-lg border-2 border-cyan-500 px-2 py-1 font-medium text-cyan-700 dark:border-cyan-400 dark:text-white'>
    {text}
  </div>
)

export default Chip
