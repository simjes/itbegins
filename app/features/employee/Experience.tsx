import Chips from '../chip/Chips'
import { H3 } from '../Heading'
import ITBPortableText from '../sanity/ITBPortableText'

interface Tag {
  label: string
  value: string
}

interface Props {
  title: string
  startDate: string
  endDate?: string
  jobTag: Tag
  roleTag: Tag
  techTags: Tag[]
  body: any
}

const Experience = ({
  title,
  startDate,
  endDate,
  jobTag,
  roleTag,
  techTags,
  body,
}: Props) => {
  const start = new Date(startDate).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })

  const end = endDate
    ? new Date(endDate).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
      })
    : undefined

  return (
    <article className='flex flex-col'>
      <header>
        <div className='flex flex-col items-baseline sm:flex-row sm:space-x-4'>
          <H3>{title}</H3>
          <div className='font-medium text-cyan-800 dark:text-cyan-400'>
            {start} - {end ?? 'Present'}
          </div>
        </div>
      </header>

      <ITBPortableText blocks={body} />

      <div className='mt-2'>
        <Chips tags={techTags} />
      </div>
    </article>
  )
}

export default Experience
