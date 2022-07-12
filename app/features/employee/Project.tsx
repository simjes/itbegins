import type { Experience } from '~/models/experience'
import Chips from '../chip/Chips'
import { H3 } from '../l-ayout/heading/Heading'
import ITBPortableText from '../sanity/ITBPortableText'

interface Props extends Pick<Experience, 'title' | 'techTags' | 'body'> {}

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
