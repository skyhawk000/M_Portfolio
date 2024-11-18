'use client';
import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react';

interface Props {
    project: IProject;
}

gsap.registerPlugin(useGSAP);

const ProjectDetails = ({ project }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            gsap.set('.fade-in-later', { autoAlpha: 0, y: 50 });
            gsap.set('.project-title', { autoAlpha: 1 });
            const tl = gsap.timeline();

            tl.to('.project-title span', {
                y: 0,
            });
            tl.from('.project-title', {
                y: 200,
                delay: 0.5,
            });

            tl.to('.fade-in-later', {
                autoAlpha: 1,
                y: 0,
                stagger: 0.2,
            });

            // gsap.set('.project-title', { position: 'fixed', })
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

                <div className="flex items-start justify-between mb-10">
                    <h1 className="project-title opacity-0 text-4xl md:text-[100px] font-anton overflow-hidden">
                        <span className="inline-block translate-y-full">
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

                <div className="grid md:grid-cols-12 gap-y-12 mb-10">
                    <div className="md:col-span-7 fade-in-later opacity-0">
                        <p className="text-lg text-muted-foreground font-anton pb-3 border-b mb-4 md:mb-7">
                            Description
                        </p>

                        <p className="text-lg">{project.description}</p>
                    </div>
                    <div className="md:col-span-5 fade-in-later opacity-0">
                        <p className="text-lg text-muted-foreground font-anton pb-3 border-b mb-4 md:mb-7">
                            Technologies
                        </p>

                        <div className="flex gap-x-3 gap-y-2 flex-wrap">
                            {project.techStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 border rounded-full text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <Image
                    src={project.images}
                    alt={project.title}
                    width={700}
                    height={800}
                    loading="lazy"
                    className="fade-in-later opacity-0 w-full"
                />
            </div>
        </section>
    );
};

export default ProjectDetails;
