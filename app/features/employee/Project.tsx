import Chips from '../chip/Chips'
import { H3 } from '../Heading'
import ITBPortableText from '../sanity/ITBPortableText'

interface Tag {
  label: string
  value: string
}

interface Props {
  title: string
  techTags: Tag[]
  body: any
}

const Project = ({ title, techTags, body }: Props) => {
  return (
    <article className='flex flex-col'>
      <header>
        <H3>{title}</H3>
      </header>

      <ITBPortableText blocks={body} />

      <div className='mt-2'>
        <Chips tags={techTags} />
      </div>
    </article>
  )
}

export default Project
