import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import Projects from './_components/Projects';

const MY_STACK = {
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

const MY_EXPERIENCE = [
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

export default function Home() {
    return (
        <>
            {/* start::banner */}
            <section className="relative max-md:pb-36" id="banner">
                <div className="container h-screen min-h-[800px] flex justify-between items-center max-md:flex-col">
                    <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                        <h1 className="leading-[.95] text-6xl sm:text-[80px] font-anton">
                            <span className="text-primary">FRONTEND</span>
                            <br /> <span className="ml-4">DEVELOPER</span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground">
                            Hi! I am{' '}
                            <span className="font-medium text-foreground">
                                Tajmirul
                            </span>
                            . An experienced Fullstack Web Developer based in
                            Bangladesh. With over 2+ years of experience, I help
                            people to grow their business by providing powerful
                            and modern Web solutions.
                        </p>
                        <Button variant="primary" className="mt-9">
                            Hire Me
                        </Button>
                    </div>

                    <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                        <div className="">
                            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                                3+
                            </h5>
                            <p className="text-muted-foreground">
                                Years of Experience
                            </p>
                        </div>
                        <div className="">
                            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                                80+
                            </h5>
                            <p className="text-muted-foreground">
                                Completed Projects
                            </p>
                        </div>
                        <div className="">
                            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                                10K+
                            </h5>
                            <p className="text-muted-foreground">
                                Hours Worked
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* end::banner */}

            <section className="pb-section" id="about-me">
                <div className="container">
                    <h2 className="text-4xl md:text-6xl font-thin mb-20">
                        I believe in a user centered design approach, ensuring
                        that every project I work on is tailored to meet the
                        specific needs of its users.
                    </h2>

                    <p className="pb-3 border-b text-muted-foreground">
                        This is me.
                    </p>

                    <div className="grid md:grid-cols-12 mt-9">
                        <div className="md:col-span-5">
                            <p className="text-5xl">Hi, I&apos;m Tajmirul.</p>
                        </div>
                        <div className="md:col-span-7">
                            <div className="text-lg text-muted-foreground max-w-[450px]">
                                <p>
                                    I&apos;m a 17 year-old passionate fullstack
                                    web developer dedicated to turning ideas
                                    into creative solutions. I specialize in
                                    creating seamless and intuitive user
                                    experiences.
                                </p>
                                <p className="mt-3">
                                    I&apos;m involved in every step of the
                                    process: from discovery and design to
                                    development, testing, and deployment. I
                                    focus on delivering high-quality, scalable
                                    results that drive positive user
                                    experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="my-stack">
                <div className="container">
                    <SectionTitle title="My Stack" />

                    <div className="space-y-20">
                        {Object.entries(MY_STACK).map(([key, value]) => (
                            <div className="grid sm:grid-cols-12" key={key}>
                                <div className="sm:col-span-5">
                                    <p className="text-5xl font-anton leading-none text-muted-foreground uppercase">
                                        {key}
                                    </p>
                                </div>
                                <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                                    {value.map((item) => (
                                        <div
                                            className="flex gap-3.5 items-center leading-none"
                                            key={item.name}
                                        >
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                width="40"
                                                height="40"
                                                className="h-10"
                                            />
                                            <span className="text-2xl capitalize">
                                                {item.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-section" id="my-experience">
                <div className="container">
                    <SectionTitle title="My Experience" />

                    <div className="grid gap-14">
                        {MY_EXPERIENCE.map((item) => (
                            <div key={item.title}>
                                <p className="text-xl text-muted-foreground">
                                    {item.company}
                                </p>
                                <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5">
                                    {item.title}
                                </p>
                                <p className="text-lg text-muted-foreground">
                                    {item.duration}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pb-section" id="selected-projects">
                <div className="container">
                    <SectionTitle title="SELECTED PROJECTS" />

                    <Projects />
                </div>
            </section>
        </>
    );
}
