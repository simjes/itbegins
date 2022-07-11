import Chip from './Chip'

interface Tag {
  label: string
  value: string
}

interface Props {
  tags: Tag[]
}

const Chips = ({ tags }: Props) => (
  <ul
    className='flex flex-wrap gap-2'
    role='group'
    aria-label='Technology used in the project'
  >
    {tags.map((tag) => (
      <li key={tag.value}>
        <Chip text={tag.label} />
      </li>
    ))}
  </ul>
)

export default Chips
