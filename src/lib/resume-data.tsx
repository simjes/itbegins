import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/icons';

const startOfCareer = new Date(2017, 5, 1);
const today = new Date();
const yearsOfExperience = today.getFullYear() - startOfCareer.getFullYear();

// Consider migrating this to CMS
export const RESUME_DATA = {
  name: 'Simon Jespersen',
  initials: 'SJ',
  location: 'Stavanger, Norway',
  locationLink: 'https://www.google.com/maps/place/Stavanger',
  about: 'Senior Frontend Developer | Building user-focused solutions',
  summary: `As a frontend developer, I'm passionate about creating user-focused solutions. I enjoy creating products together with a dedicated team that can give excellent user experiences, adhere to universal design, and enhance the daily lives of users. I have ${yearsOfExperience} years of web development experience, working with local and remote teams.`,
  avatarUrl: 'https://avatars.githubusercontent.com/u/6494049?v=4',
  personalWebsiteUrl: '/',
  contact: {
    email: 'simjes91@me.com',
    tel: '+4798620963',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/simjes',
        icon: GitHubIcon,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/simjes/',
        icon: LinkedInIcon,
      },
      {
        name: 'X',
        url: 'https://twitter.com/itsalwayskos',
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: 'University of Stavanger',
      degree: 'Further Education: Service Innovation and Design Methodology',
      start: '2023',
      end: '2023',
    },
    {
      school: 'University of Oslo',
      degree: "Master's Degree in Informatics: Programming and Networking",
      start: '2015',
      end: '2017',
    },
    {
      school: 'University of Stavanger',
      degree: "Bachelor's Degree in Computer Engineering",
      start: '2012',
      end: '2015',
    },
  ],
  work: [
    {
      company: 'Webstep',
      link: 'https://www.webstep.no/',
      badges: ['Consultant'],
      title: 'Senior Frontend Developer',
      start: '2022',
      end: today.getFullYear(),
      description:
        "Led the frontend development for Zaptec's payment solution for EV charging, and created components for the design system. Improved performance and maintainability of UXRisk, and suggested further improvements for the team to work on. Technologies: React, TypeScript, React Native, WebSockets, .NET.",
    },
    {
      company: 'Dfind Consulting',
      link: 'https://www.dfindconsulting.no/',
      badges: ['Consultant'],
      title: 'Frontend Developer → Senior Frontend Developer',
      start: '2019',
      end: '2022',
      description:
        'Created web applications for companies like ix3 (Aker Solutions), Instech (Norwegian Hull Club) and Norsk Tipping, and was the frontend lead in some projects. Technologies: React, TypeScript, Angular.',
    },
    {
      company: 'Storebrand',
      link: 'https://www.storebrand.no/',
      badges: ['Inhouse'],
      title: 'Senior Frontend Developer',
      start: '2021',
      end: '2021',
      description:
        'Upgrading the Customer Investment Portal away from EOL technology. Technologies: React, TypeScript, AngularJS.',
    },
    {
      company: 'Olavstoppen',
      link: 'https://www.olavstoppen.no/en',
      badges: ['Consultant'],
      title: 'Frontend Developer',
      start: '2019',
      end: '2019',
      description:
        "R&D for Equinor's Integrated Operation Center. Technologies: React, JavaScript.",
    },
    {
      company: 'Capgemini Norge',
      link: 'https://www.capgemini.com/no-no/',
      badges: ['Consultant'],
      title: 'Full Stack Developer',
      start: '2017',
      end: '2019',
      description:
        'Created a proof of concept for Sevensix in Summer of Code 2017. Developed web applications for the Norwegian Maritime Authority. Mentor for Summer of Code 2018. Created frontend related presentations to increase engagement among the developers. Technologies: Angular, TypeScript, .NET.',
    },
  ],
  skills: ['TypeScript', 'JavaScript', 'React/Next.js/Remix', '.NET'],
  projects: [
    {
      title: 'Schibsted Media',
      techStack: ['TypeScript', 'React', 'Astro', 'Svelte', 'Go'],
      description:
        'Norwegian news websites Stavanger Aftenblad and Bergens Tidende',
    },
    {
      title: 'Zaptec',
      techStack: ['TypeScript', 'React', 'React Native', 'OCPP', 'WebSockets'],
      description: 'Payment solution for EV charging with Charge365',
    },
    {
      title: 'UX Norge',
      techStack: ['Open Source', 'TypeScript', 'Gatsby', 'Sanity'],
      description: 'Norwegian community for UX design',

      link: {
        label: 'uxnorge.no',
        href: 'https://uxnorge.no/',
      },
    },
    {
      title: 'UXRisk',
      techStack: ['React', 'TypeScript', 'Cypress', 'WebSockets'],
      description:
        'Build all your GRC and management system workflows on one platform. Rebranded to Dmaze',
      link: {
        label: 'dmaze.com',
        href: 'https://www.dmaze.com/',
      },
    },
    {
      title: 'Winter Operation',
      techStack: ['Remix', 'TypeScript'],
      description:
        'Documentation of discrepancies in operational data related to the maintenance of roads during the winter months',
    },
    {
      title: 'Tadata',
      techStack: ['Side Project', 'Remix', 'TypeScript', 'GraphQL'],
      description:
        'Tadata provides an overview of available APIs and data sources in Norway',

      link: {
        label: 'tadata.no',
        href: 'https://tadata.no/',
      },
    },
    {
      title: 'Spillepuls',
      techStack: ['TypeScript', 'React', 'Cypress', 'Next.js'],
      description:
        'Spillepuls aims to assist players who already have gambling problems by encouraging them to take measures to play less',

      link: {
        label: 'norsk-tipping.no',
        href: 'https://www.norsk-tipping.no/artikler/nytt-verktoy-senker-spillepulsen',
      },
    },
    {
      title: 'IT Begins',
      techStack: [
        'Side Project',
        'TypeScript',
        'Remix',
        'Sanity',
        'Cloudflare',
      ],
      description: 'Marketing and blog page for my own consultancy company',

      link: {
        label: 'github.com',
        href: 'https://github.com/simjes/itbegins',
      },
    },
    {
      title: 'Insify Document',
      techStack: ['JavaScript', 'React', 'Azure Cognitive Search', '.NET'],
      description:
        'Document management system consisting of a web search portal and an Outlook add-in. Rebranded to ETUITY',

      link: {
        label: 'instech.no',
        href: 'https://www.instech.no/etuity',
      },
    },
    {
      title: 'Actively',
      techStack: ['Next.js', 'TypeScript', 'Flutter', 'Dart'],
      description: 'Rewarding physical activity through challenges',
    },
    {
      title: 'CIP',
      techStack: ['React', 'TypeScript', 'AngularJS'],
      description:
        'Customer Investment Portal is a self service portal for buying and selling funds',
      link: {
        label: 'skagenfunds.com',
        href: 'https://www.skagenfunds.com/',
      },
    },
    {
      title: 'Completion',
      techStack: ['TypeScript', 'Angular', 'Cypress'],
      description:
        'Digitizing the complete documentation process during the construction of oil platforms',
    },
    {
      title: 'Almond',
      techStack: ['React', 'JavaScript'],
      description: 'Analyzing sensor data from the oil field',
    },
    {
      title: 'My Vessels',
      techStack: ['Angular', 'TypeScript', '.NET'],
      description:
        'Communication platform for the Norwegian Maritime Authority (NMA) and the shipping industry',

      link: {
        label: 'sdir.no/en',
        href: 'https://www.sdir.no/en/shipping/vessels/my-vessels/',
      },
    },
    {
      title: 'Sevensix',
      techStack: ['Angular', 'TypeScript'],
      description:
        'Proof of concept for a collaborative platform for tennis players and trainers',
    },
  ],
  certificationAndCourse: [
    {
      name: 'Learn PUB/SUB Architecture',
      providerName: 'boot.dev — Lane Wagner',
      issueDate: '2024',
      expirationDate: undefined,
    },
    {
      name: 'Unreal Engine 5 C++ Developer: Learn C++ & Make Video Games',
      providerName: 'Ben Tristem — GameDev.tv',
      issueDate: '2024',
      expirationDate: undefined,
    },
    {
      name: 'Epic React',
      providerName: 'Kent C. Dodds',
      issueDate: '2022',
      expirationDate: undefined,
    },
    {
      name: 'Godot Action RPG',
      providerName: 'Heartbeast — Youtube',
      issueDate: '2021',
      expirationDate: undefined,
    },
    {
      name: 'Web Accessibility',
      providerName: 'Alice Boxhall, Rob Dodson, Michael Wales — Udacity',
      issueDate: '2020',
      expirationDate: undefined,
    },
    {
      name: 'Build an app with SwiftUI Part 1 and 2',
      providerName: 'Meng To — Design Code',
      issueDate: '2020',
      expirationDate: undefined,
    },
    {
      name: 'Complete Intro to Containers',
      providerName: 'Brian Holt — Frontend Masters',
      issueDate: '2020',
      expirationDate: undefined,
    },
    {
      name: 'The Complete Flutter Development Bootcamp Using Dart',
      providerName: 'Angela Yu — App Brewery',
      issueDate: '2020',
      expirationDate: undefined,
    },
    {
      name: 'Testing Javascript',
      providerName: 'Kent C. Dodds',
      issueDate: '2019',
      expirationDate: undefined,
    },
    {
      name: 'Advanced React and GraphQL — Master Package',
      providerName: 'Wesbos',
      issueDate: '2018',
      expirationDate: undefined,
    },
    {
      name: 'CSS Grid',
      providerName: 'Wesbos',
      issueDate: '2018',
      expirationDate: undefined,
    },
    {
      name: 'Xamarin Certified Developer',
      providerName: 'Xamarin',
      issueDate: '2017',
      expirationDate: '2018',
    },
  ],
} as const;
