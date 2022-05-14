import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/solid'
import { useLoaderData } from '@remix-run/react'
import groq from 'groq'
import Employee from '~/features/employee/Employee'
import DecorationLine from '~/features/Layout/DecorationLine'
import Footer from '~/features/Layout/Footer'
import Header from '~/features/Layout/Header'
import Main from '~/features/Layout/Main'
import { SectionHeader } from '~/features/Layout/Section'
import conceptPage from '~/images/concept-page.svg'
import finishedPage from '~/images/finished-page.svg'
import { getClient } from '~/lib/sanity/client'
import { imageUrlBuilder } from '~/lib/sanity/image'

export async function loader() {
  const sanityClient = getClient()

  const heroImageRequest = sanityClient.fetch(
    groq`*[_type == "imageAsset" && slug.current == "hero-image"][0]{
      img,
      alt
    }`,
  )

  const employeeRequest = sanityClient.fetch(
    groq`*[_type == "author" && slug.current == "simjes"][0]{ name, image, role, tempUrl }`,
  )

  const [employeeResult, heroImageResult] = await Promise.all([
    employeeRequest,
    heroImageRequest,
  ])

  return {
    employee: employeeResult,
    imageAsset: heroImageResult,
  }
}

export default function Index() {
  const { employee, imageAsset } = useLoaderData()
  const employeeImage = imageUrlBuilder
    .image(employee.image)
    .size(256, 256)
    .url()
  const heroImage = imageUrlBuilder.image(imageAsset.img).url()

  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <Main>
        <div className='hero-container relative flex items-center'>
          <header className='z-10 flex w-full flex-col justify-center rounded-xl p-4 backdrop-blur-xl sm:w-2/3'>
            <h1 className='text-3xl font-bold text-white md:text-4xl'>
              Technology company that puts the user in focus
            </h1>
            <p className='mt-2 text-xl font-bold text-slate-100'>
              Together we create great solutions that make digital everyday life
              easier
            </p>

            <DecorationLine className='w-64' type='purple' />
          </header>
          <img
            className='full-width absolute h-full object-cover'
            src={heroImage}
            aria-hidden
            alt={imageAsset.alt}
          />
        </div>

        <section className='mt-20 md:mt-40'>
          <SectionHeader title='Putting Users at the Center' />
          <p className='mt-2 text-xl'>
            When creating digital solutions, the user is the most important
            thing we have, after all, they are the ones we want to help. The
            best solutions come from interdisciplinary collaborations with
            people who work towards the same goal.
          </p>
          <p className='mt-2 text-xl'>
            In an industry that is changing rapidly, it is important to keep up,
            therefore being curious and willing to learn are important
            qualities.
          </p>
        </section>

        <section className='mt-20 flex flex-col items-center justify-around md:mt-40'>
          <div>
            <SectionHeader
              title='From Concept to Product'
              subtitle='We Assist in the Entire Process'
            />
            <p className='mt-2 text-xl'>
              IT Begins has extensive experience, and has worked in lottery,
              insurance, fintech, health, maritime, oil and gas.
            </p>
          </div>

          <div className='mt-8 flex w-full flex-col items-center space-y-12 md:flex-row md:justify-evenly md:space-y-0'>
            <ProcessImage src={conceptPage} alt='Web page concept' />

            <ArrowRightIcon className='hidden h-16 w-16 text-fuchsia-500 md:block' />
            <ArrowDownIcon className='block h-16 w-16 text-fuchsia-500 md:hidden' />

            <ProcessImage src={finishedPage} alt='Finished web page' />
          </div>
        </section>

        <section className='mt-20 md:mt-40'>
          <SectionHeader title='Who is IT Begins' subtitle='CV' />

          <div className='mt-10 flex flex-wrap justify-center gap-6'>
            <Employee
              image={employeeImage}
              name={employee.name}
              role={employee.role}
              cvUrl={employee.tempUrl}
            />
          </div>
        </section>
      </Main>
      <Footer />
    </div>
  )
}

const ProcessImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <img
      className='w-72 rounded-xl border-4 border-cyan-500'
      src={src}
      alt={alt}
    />
  )
}
