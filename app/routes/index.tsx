import { ArrowDownIcon } from '@heroicons/react/solid'
import { Client } from '@notionhq/client'
import cn from 'classnames'
import { useLoaderData } from 'remix'
import Employee from '~/features/employee/Employee'
import {
  EmployeeOverview,
  mapToEmployeeOverview,
} from '~/features/employee/model'
import DecorationLine from '~/features/Layout/DecorationLine'
import Footer from '~/features/Layout/Footer'
import Header from '~/features/Layout/Header'
import Main from '~/features/Layout/Main'
import { SectionHeader } from '~/features/Layout/Section'
import conceptPage from '~/images/concept-page.svg'
import finishedPage from '~/images/finished-page.svg'
import heroImage from '~/images/hero.webp'

// TODO: https://github.com/remix-run/remix/pull/2076 — Use patch-package until this is fixed
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

        <section className='mt-64'>
          <SectionHeader title='Jeg bryr meg' />
          <p className='mt-2 text-xl'>
            Når man skal skape digitale løsninger er brukeren det viktigste vi
            har, det er jo tross alt de som skal bruke produktet. Jeg mener at
            de beste løsningene kommer fra tverrfaglige samarbeid med mennesker
            som jobber mot samme mål.
          </p>
          <p className='mt-2 text-xl'>
            I en bransje som endrer seg raskt er det viktig å følge med, derfor
            mener jeg at det å være nysgjerrig og lærevillig er viktige
            egenskaper. Engasjement, samarbeid og deling av kompetanse setter
            jeg høgt.
          </p>
        </section>

        <section className='mt-64 flex flex-col items-center justify-around md:flex-row'>
          <SectionHeader
            title='Fra konsept til produkt'
            subtitle='Jeg bistår i hele prosessen'
          />

          <div className='mt-8 flex flex-col items-center space-y-12'>
            <ProcessImage src={conceptPage} alt='Konsept av en webside' />

            <ArrowDownIcon className='h-16 w-16 text-fuchsia-500' />

            <ProcessImage
              src={finishedPage}
              alt='Ferdig produkt av en webside'
            />
          </div>
        </section>

        <section className='mt-64'>
          <SectionHeader title='Bli kjent med meg' />

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

const ProcessImage = ({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) => {
  return (
    <img
      className={cn('w-72 rounded-xl shadow-lg', className)}
      src={src}
      alt={alt}
    />
  )
}
