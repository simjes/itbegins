import type { Experience } from '~/models/experience'
import Chips from '../chip/Chips'
import { H3 } from '../layout/heading/Heading'
import ITBPortableText from '../sanity/ITBPortableText'

interface Props extends Pick<Experience, 'title' | 'techTags' | 'body'> {}

const Project = ({ title, techTags, body }: Props) => {
  return (
    <article className='flex flex-col'>
      <H3>{title}</H3>

      <ITBPortableText blocks={body} />

      <div className='mt-2'>
        <Chips tags={techTags} />
      </div>
    </article>
  )
}

export default Project
