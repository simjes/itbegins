import { BlueskyIcon, GitHubIcon, LinkedInIcon } from '@/components/icons';
import type { ComponentType } from 'react';

type SocialLink = {
  name: string;
  url: string;
  icon: ComponentType;
};

type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
};

type WorkExperience = {
  company: string;
  link: string;
  badges: string[];
  title: string;
  start: string;
  end: string;
  points: string[];
};

type Project = {
  title: string;
  techStack: string[];
  description: string;
  link: {
    href: string;
  };
};

type Certification = {
  name: string;
  providerName: string;
  issueDate: string;
  expirationDate?: string;
};

type Resume = {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: SocialLink[];
  };
  education: Education[];
  work: WorkExperience[];
  skills: string[];
  projects: Project[];
  certificationAndCourse: Certification[];
};

const startOfCareer = new Date(2017, 5, 1);
const today = new Date();
const yearsOfExperience = today.getFullYear() - startOfCareer.getFullYear();

export const RESUME_DATA = {
  name: 'Simon Jespersen',
  initials: 'SJ',
  location: 'Stavanger, Norway',
  locationLink: 'https://www.google.com/maps/place/Stavanger',
  about: 'Senior Frontend Developer',
  summary: `As a front-end developer, I'm passionate about creating user-focused solutions. I thrive when working with experienced peers who also want to provide the best solution for the end user.  I have ${yearsOfExperience} years of web development experience, working with local and remote teams.`,
  avatarUrl: 'https://avatars.githubusercontent.com/u/6494049?v=4',
  personalWebsiteUrl: 'https://github.com/simjes',
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
        name: 'Bluesky',
        url: 'https://bsky.app/profile/simjes.bsky.social',
        icon: BlueskyIcon,
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
      badges: ['Astro', 'React', 'TypeScript', 'React Native', '.NET'],
      title: 'Senior Frontend Developer, Consultant',
      start: '2022',
      end: 'Present',
      points: [
        'Building version 2 of Form Design System at Lyse AS.',
        'Instigator for modernizing the way the developers work on the Norwegian newspapers Stavanger Aftenblad and Bergens Tidende.',
        "Led the frontend development for Zaptec's payment solution for EV charging, and created components for the design system.",
        'Improved performance and maintainability of UXRisk, and suggested further improvements for the team to work on.',
        'Led the migration of Risa Winter Operations from Vaadin to Remix.',
      ],
    },
    {
      company: 'Dfind Consulting',
      link: 'https://www.dfindconsulting.no/',
      badges: ['React', 'TypeScript', 'Angular', '.NET'],
      title: 'Frontend Developer → Senior Frontend Developer, Consultant',
      start: '2019',
      end: '2022',
      points: [
        'Implemented self-help educational content for gambling-addicted players for Norsk Tipping.',
        'Improved and developed new features for the document management system in Norwegian Hull Club.',
        'Helped digitize the complete documentation process of the construction of oil platforms for Aker Solutions.',
      ],
    },
    {
      company: 'Storebrand',
      link: 'https://www.storebrand.no/',
      badges: ['React', 'TypeScript', 'AngularJS'],
      title: 'Senior Frontend Developer, In-house',
      start: '2021',
      end: '2021',
      points: [
        'Upgrading the Customer Investment Portal away from EOL technology.',
      ],
    },
    {
      company: 'Olavstoppen',
      link: 'https://www.olavstoppen.no/en',
      badges: ['React', 'JavaScript'],
      title: 'Frontend Developer, Consultant',
      start: '2019',
      end: '2019',
      points: [
        'Built a dashboard for evidence-based decision-making for Equinors Integrated Operation Center.',
      ],
    },
    {
      company: 'Capgemini Norge',
      link: 'https://www.capgemini.com/no-no/',
      badges: ['Angular', 'TypeScript', '.NET'],
      title: 'Full Stack Developer, Consultant',
      start: '2017',
      end: '2019',
      points: [
        'Developed My Vessel application for the Norwegian Maritime Authority.',
        'Mentor for Summer of Code 2018.',
        'Created a proof of concept for Sevensix in Summer of Code 2017.',
      ],
    },
  ],
  skills: [
    'TypeScript',
    'JavaScript',
    'Astro',
    'React/Next.js/Remix',
    'Tailwind CSS',
    '.NET',
  ],
  projects: [
    {
      title: 'Jenovas SEO',
      techStack: ['TypeScript', 'Astro', 'Tailwind CSS', 'Cloudflare'],
      description:
        'A Norwegian podcast about Final Fantasy and Kingdom Hearts. Built a page to improve the SEO.',
      link: {
        href: 'https://github.com/simjes/jenovas-seo',
      },
    },
    {
      title: 'UX Norge',
      techStack: ['Open Source', 'TypeScript', 'Gatsby', 'Sanity'],
      description:
        'Norwegian community for UX design. Open Source project that I contribute to.',
      link: {
        href: 'https://uxnorge.no/',
      },
    },
    {
      title: 'Tadata',
      techStack: ['Remix', 'TypeScript', 'GraphQL'],
      description:
        'Tadata provides an overview of the available APIs and data sources in Norway. Helped the team structure components and styling. Migrated to Remix and suggested UX improvements.',
      link: {
        href: 'https://tadata.no/',
      },
    },
    {
      title: 'IT Begins',
      techStack: ['TypeScript', 'Remix', 'Sanity', 'Cloudflare'],
      description: 'Marketing and blog page for my own consultancy company.',
      link: {
        href: 'https://github.com/simjes/itbegins',
      },
    },
  ],
  certificationAndCourse: [
    {
      name: 'Learn PUB/SUB Architecture',
      providerName: 'Lane Wagner — boot.dev',
      issueDate: '2024',
      expirationDate: undefined,
    },
    {
      name: 'Designing For Complex UIs + Design KPIs',
      providerName: 'Vitaly Friedmann',
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
} satisfies Resume;
