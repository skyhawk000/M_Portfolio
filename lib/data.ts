import { IProject } from '@/types';

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Nest.js',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Epikcart',
        slug: 'epikcart',
        description: 'A multi-vendor e-commerce website',
        techStack: ['React', 'Redux', 'React i18n'],
        image: '/projects/epikcart.jpg',
        liveUrl: 'https://demo.epikcart.siphertech.com/',
    },
    {
        title: 'Resume Roaster',
        slug: 'resume-roaster',
        description: 'A resume building community platform',
        techStack: ['GPT-4', 'Next.js', 'MongoDB'],
        image: '/projects/resume-roaster.jpg',
        liveUrl: 'https://resume-roaster.vercel.app/',
    },
    {
        title: 'Real Estate',
        slug: 'property-pro',
        description: 'A modern real estate listing platform',
        techStack: ['React.js', 'Redux', 'Tailwind CSS', 'React i18n'],
        image: '/projects/property-pro.jpg',
        liveUrl: 'https://demo.propertypro.siphertech.com/',
    },
    {
        title: 'Consulting Finance',
        slug: 'Crenotive',
        description:
            'Creative, eye-catching, and responsive website that is perfect for a business. It contains multiple pages.',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        image: '/projects/consulting-finance.jpg',
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: 'https://crenotive.netlify.app/',
    },
    {
        title: 'devLinks',
        slug: 'devLinks',
        description: 'One of the most challenging projects in Frontend Mentor',
        techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
        image: '/projects/devLinks.jpg',
        sourceCode: 'https://github.com/Tajmirul/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'SOFTWARE ENGINEER (FRONTEND)',
        company: 'Strativ',
        duration: 'Oct 2023 - Dec 2024',
    },
    {
        title: 'FRONTEND ENGINEER',
        company: 'Anchorblock Technology',
        duration: 'Oct 2022 - Dec 2023',
    },
];
