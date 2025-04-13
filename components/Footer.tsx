import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {
    const repoStats = await fetch(
        'https://api.github.com/repos/tajmirul/portfolio-2.0',
        {
            next: {
                revalidate: 60 * 60, // 1 hour
            },
        },
    );

    const { stargazers_count, forks_count } =
        (await repoStats.json()) as RepoStats;

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    <a
                        href="https://github.com/Tajmirul/portfolio-2.0"
                        target="_blank"
                        className="leading-none text-muted-foreground hover:underline hover:text-white"
                    >
                        Design & built by Tajmirul Islam
                        <div className="flex items-center justify-center gap-5 pt-1">
                            <span className="flex items-center gap-2">
                                <Star size={18} /> {stargazers_count}
                            </span>
                            <span className="flex items-center gap-2">
                                <GitFork size={18} /> {forks_count}
                            </span>
                        </div>
                    </a>

                    {/* Note: If you are not Tajmirul, use this copyright message instead */}
                    {/* <a href='https://www.me.toinfinite.dev/' className="leading-none text-muted-foreground hover:underline hover:text-white">
                        Design & built by Tajmirul Islam <br />
                        Revised by YOUR NAME

                        <div className="flex items-center justify-center gap-5 pt-1">
                            <span className='flex items-center gap-2'>
                                <Star size={14} /> {stargazers_count}
                            </span>
                            <span className='flex items-center gap-2'>
                                <GitFork size={14} /> {forks_count}
                            </span>
                        </div>
                    </a> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
