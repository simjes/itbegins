import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/solid'
import { Client } from '@notionhq/client'
import { useLoaderData } from '@remix-run/react'
import Employee from '~/features/employee/Employee'
import type { EmployeeOverview } from '~/features/employee/model'
import { mapToEmployeeOverview } from '~/features/employee/model'
import DecorationLine from '~/features/Layout/DecorationLine'
import Footer from '~/features/Layout/Footer'
import Header from '~/features/Layout/Header'
import Main from '~/features/Layout/Main'
import { SectionHeader } from '~/features/Layout/Section'
import conceptPage from '~/images/concept-page.svg'
import finishedPage from '~/images/finished-page.svg'
import heroImage from '~/images/hero.webp'

export async function loader({
  context,
}: {
  context: {
    env: { NOTION_EMPLOYEE_DB: string; NOTION_API_SECRET: string }
  }
}) {
  const { env } = context
  const notion = new Client({ auth: env.NOTION_API_SECRET })
  const response = await notion.databases.query({
    database_id: env.NOTION_EMPLOYEE_DB!,
    sorts: [
      {
        property: 'Date Created',
        direction: 'ascending',
      },
    ],
    filter: {
      and: [
        {
          property: 'Status',
          select: {
            equals: 'Active',
          },
        },
      ],
    },
  })
  return response.results.map(mapToEmployeeOverview)
}

export default function Index() {
  const employees: EmployeeOverview[] = useLoaderData()

  return (
    <div className='flex h-full flex-col'>
      <Header />

      <Main>
        <div className='hero-container relative flex items-center'>
          <header className='z-10 flex w-full flex-col justify-center rounded-xl p-4 backdrop-blur-xl sm:w-2/3'>
            <h1 className='text-3xl font-bold text-white md:text-5xl'>
              Teknologiselskap som setter brukeren i fokus
            </h1>
            <p className='mt-2 text-xl font-bold text-slate-100 md:text-2xl'>
              Sammen skaper vi gode løsninger som gjør den digitale hverdagen
              enklere
            </p>

            <DecorationLine className='w-64' type='blue' />
          </header>
          <img
            className='full-width absolute h-full object-cover'
            src={heroImage}
            aria-hidden
            alt='background image'
          />
        </div>

        <section className='mt-20 md:mt-40'>
          <SectionHeader title='Brukerfokusert' />
          <p className='mt-2 text-xl'>
            Når man skal skape digitale løsninger er brukeren det viktigste vi
            har, det er jo tross alt de vi ønsker å hjelpe. De beste løsningene
            kommer fra tverrfaglige samarbeid med mennesker som jobber mot samme
            mål.
          </p>
          <p className='mt-2 text-xl'>
            I en bransje som endrer seg raskt er det viktig å følge med, derfor
            er det å være nysgjerrig og lærevillig viktige egenskaper.
          </p>
        </section>

        <section className='mt-20 flex flex-col items-center justify-around md:mt-40'>
          <div>
            <SectionHeader
              title='Fra konsept til produkt'
              subtitle='Vi bistår i hele prosessen'
            />
            <p className='mt-2 text-xl'>
              IT Begins har lang erfaring, og har jobbet innen lotteri,
              forsikring, fintech, helse, maritim, olje og gass.
            </p>
          </div>

          <div className='mt-8 flex w-full flex-col items-center space-y-12 md:flex-row md:justify-evenly md:space-y-0'>
            <ProcessImage src={conceptPage} alt='Konsept av en webside' />

            <ArrowRightIcon className='hidden h-16 w-16 text-fuchsia-500 md:block' />
            <ArrowDownIcon className='block h-16 w-16 text-fuchsia-500 md:hidden' />

            <ProcessImage
              src={finishedPage}
              alt='Ferdig produkt av en webside'
            />
          </div>
        </section>

        <section className='mt-20 md:mt-40'>
          <SectionHeader title='Hvem er IT Begins' subtitle='CV' />

          <div className='mt-10 flex flex-wrap justify-center gap-6'>
            {employees.map((employee) => (
              <Employee
                key={employee.cvUrl}
                image={employee.image}
                name={employee.name}
                role={employee.role}
                cvUrl={employee.cvUrl}
              />
            ))}
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
