import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'tasmirolislam@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Tajmirul, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Tajmirul' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/tajmirul' },
    { name: 'facebook', url: 'https://www.facebook.com/tajmirul.2000' },
];

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
        techStack: ['React', 'Redux', 'React i18n'],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        images: '/projects/images/epikcart.jpg',
        liveUrl: 'https://demo.epikcart.siphertech.com/',
        description:
            'This portfolio showcases a range of web development projects, demonstrating proficiency in creating practical, user-focused applications. From appointment management systems to specialized mobile apps, each project highlights problem-solving skills and technical expertise. Click the arrow to view the Figma Design',
    },
    {
        title: 'Resume Roaster',
        slug: 'resume-roaster',
        description: 'A resume building community platform',
        techStack: ['GPT-4', 'Next.js', 'MongoDB'],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        images: '/projects/images/resume-roaster.jpg',
        liveUrl: 'https://resume-roaster.vercel.app/',
    },
    {
        title: 'Real Estate',
        slug: 'property-pro',
        description: 'A modern real estate listing platform',
        techStack: ['React.js', 'Redux', 'Tailwind CSS', 'React i18n'],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        images: '/projects/images/property-pro.jpg',
        liveUrl: 'https://demo.propertypro.siphertech.com/',
    },
    {
        title: 'Consulting Finance',
        slug: 'Crenotive',
        description:
            'Creative, eye-catching, and responsive website that is perfect for a business. It contains multiple pages.',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        images: '/projects/images/consulting-finance.jpg',
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: 'https://crenotive.netlify.app/',
    },
    {
        title: 'devLinks',
        slug: 'devLinks',
        description: 'One of the most challenging projects in Frontend Mentor',
        techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        images: '/projects/images/devLinks.jpg',
        sourceCode: 'https://github.com/Tajmirul/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Developer',
        company: 'Epikcoders',
        duration: 'Oct 2023 - Dec 2024',
    },
    {
        title: 'FRONTEND ENGINEER',
        company: 'Anchorblock Technology',
        duration: 'Oct 2022 - Sep 2023',
    },
    {
        title: 'Frontend Developer (Part-time)',
        company: 'Branex IT',
        duration: 'Jan 2022 - Oct 2022',
    },
];
