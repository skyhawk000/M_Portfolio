'use client';
import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import React, { useRef } from 'react';
import Markdown from 'react-markdown';

interface Props {
    project: IProject;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectDetails = ({ project }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            gsap.set('.fade-in-later', {
                autoAlpha: 0,
                y: 30,
            });
            const tl = gsap.timeline({
                delay: 0.5,
            });

            tl.to('.fade-in-later', {
                autoAlpha: 1,
                y: 0,
                stagger: 0.1,
            });
        },
        { scope: containerRef },
    );

    // blur info div and make it smaller on scroll
    useGSAP(
        () => {
            gsap.to('#info', {
                filter: 'blur(3px)',
                autoAlpha: 0,
                scale: 0.9,
                position: 'sticky',
                scrollTrigger: {
                    trigger: '#info',
                    start: 'bottom bottom',
                    end: 'bottom top',
                    scrub: 0.5,
                },
            });
        },
        { scope: containerRef },
    );

    // parallax effect on images
    useGSAP(
        () => {
            gsap.utils
                .toArray<HTMLDivElement>('#images > div')
                .forEach((imageDiv, i) => {
                    // const image = imageDiv.querySelector(
                    //     'img',
                    // ) as HTMLImageElement;
                    console.log(imageDiv);

                    gsap.to(imageDiv, {
                        backgroundPosition: () => `center 100%`,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: imageDiv,
                            start: () => (i ? 'top bottom' : 'top 50%'),
                            end: 'bottom top',
                            scrub: true,
                            // invalidateOnRefresh: true, // to make it responsive
                        },
                    });
                });
        },
        { scope: containerRef },
    );

    return (
        <section className="pt-5 pb-14">
            <div className="container" ref={containerRef}>
                <TransitionLink
                    back
                    href="/"
                    className="mb-16 inline-flex gap-2 items-center group h-12"
                >
                    <ArrowLeft className="group-hover:-translate-x-1 group-hover:text-primary transition-all duration-300" />
                    Back
                </TransitionLink>

                <div className="top-0 min-h-[calc(100svh-100px)]" id="info">
                    <div className="flex items-start gap-10 mx-auto mb-10 max-w-[635px]">
                        <h1 className="fade-in-later opacity-0 text-4xl md:text-[60px] leading-none font-anton overflow-hidden">
                            <span className="inline-block">
                                {project.title}
                            </span>
                        </h1>

                        <div className="fade-in-later opacity-0 flex gap-2">
                            {project.sourceCode && (
                                <a
                                    href={project.sourceCode}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="hover:text-primary"
                                >
                                    <Github size={30} />
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="hover:text-primary"
                                >
                                    <ExternalLink size={30} />
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="max-w-[635px] space-y-7 pb-20 mx-auto">
                        <div className="fade-in-later">
                            <p className="text-muted-foreground font-anton mb-3">
                                Year
                            </p>

                            <div className="text-lg">{project.year}</div>
                        </div>
                        <div className="fade-in-later">
                            <p className="text-muted-foreground font-anton mb-3">
                                Description
                            </p>

                            <div className="text-lg">
                                <Markdown>{project.description}</Markdown>
                            </div>
                        </div>
                        {project.role && (
                            <div className="fade-in-later">
                                <p className="text-muted-foreground font-anton mb-3">
                                    My Role
                                </p>

                                <div className="text-lg">
                                    <Markdown>{project.role}</Markdown>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div
                    className="fade-in-later relative flex flex-col gap-2 max-w-[800px] mx-auto"
                    id="images"
                >
                    {project.images.map((image) => (
                        <div
                            key={image}
                            className="relative w-full aspect-[750/400] bg-background-light"
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center 0%',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            {/* <Image
                                src={image}
                                alt={project.title}
                                loading="lazy"
                                layout="fill"
                                className="w-full object-cover object-top transition-all duration-300"
                            /> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
