import type { HeadersFunction, MetaFunction } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import groq from 'groq'
import { Fragment } from 'react'
import Experience from '~/features/employee/Experience'
import Project from '~/features/employee/Project'
import { H1, H2 } from '~/features/Heading'
import DecorationLine from '~/features/Layout/DecorationLine'
import Footer from '~/features/Layout/Footer'
import Header from '~/features/Layout/Header'
import Main from '~/features/Layout/Main'
import LoddeLink from '~/features/LoddeLink'
import ITBPortableText from '~/features/sanity/ITBPortableText'
import { getClient } from '~/lib/sanity/client'
import { imageUrlBuilder } from '~/lib/sanity/image'

export const headers: HeadersFunction = () => {
  return {
    'Cache-Control':
      'max-age=600 s-maxage=86400, stale-while-revalidate=31560000', // TODO
  }
}

export const meta: MetaFunction = () => {
  const title = 'Simon Jespersen CV | IT Begins'
  const description = '' // TODO

  return {
    title,
    description,
    'og:title': title,
    'og:description': description,

    'twitter:title': title,
    'twitter:description': description,
  }
}

export async function loader() {
  const client = getClient()
  const authorRequest = client.fetch(
    groq`*[_type == "author" && slug.current == "simjes"][0]{ name, image, role, cvSummary, links }`,
  )

  const cvExperiencesRequest = client.fetch(
    groq`*[_type == "experience"] | order(sortDate desc)`,
  )

  const [author, cvExperiences] = await Promise.all([
    authorRequest,
    cvExperiencesRequest,
  ])

  // TODO: Typings for sanity query
  const experiences = cvExperiences.filter((x) => !!x.startDate)
  const projects = cvExperiences.filter((x) => !x.startDate)

  return json({ author, experiences, projects })
}

export default function CV() {
  const { author, experiences, projects } = useLoaderData()
  const authorImage = imageUrlBuilder.image(author.image).size(416, 416).url()

  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <Main>
        <div className='space-y-16'>
          <section className='mt-16 flex flex-col items-center'>
            <header className='flex w-full flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
              <div>
                <H1>{author.name}</H1>
                <p className='text-xl'>{author.role}</p>
                <DecorationLine className='w-64' type='purple' />
                <div className='mt-4'>
                  {author.links.map((link, index) => {
                    const isLastLink = index === author.links.length - 1
                    return (
                      <Fragment key={link.href}>
                        <LoddeLink href={link.href} text={link.linkContent} />
                        <span aria-hidden>{!isLastLink && ' — '}</span>
                      </Fragment>
                    )
                  })}
                </div>
              </div>

              <img
                src={authorImage}
                className='h-52 w-52 rounded-full'
                alt={`Author ${author.name}`}
                height={208}
                width={208}
              />
            </header>

            <article>
              <ITBPortableText blocks={author.cvSummary} />
            </article>
          </section>

          <section>
            <H2>Experience</H2>
            <DecorationLine className='w-64' type='purple' />

            <div className='mt-4 space-y-12'>
              {experiences.map((experience) => (
                <Experience key={experience._id} {...experience} />
              ))}
            </div>
          </section>

          <section>
            <H2>Other Projects</H2>
            <DecorationLine className='w-64' type='purple' />

            <div className='mt-4 space-y-12'>
              {projects.map((project) => (
                <Project key={project._id} {...project} />
              ))}
            </div>
          </section>

          <section>
            <p>
              If you want a more detailed CV, please contact me on{' '}
              <LoddeLink href='mailto:hei@itbegins.no' text='hei@itbegins.no' />
            </p>
          </section>
        </div>
      </Main>

      <Footer />
    </div>
  )
}

type Author = {
  name: string
  role: string
  image: any
  cvSummary: any
  links: any
}
