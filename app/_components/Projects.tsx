'use client';
import { PROJECTS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState, MouseEvent } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const projectListRef = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [selectedProject, setSelectedProject] = useState<string | null>(
        PROJECTS[0].slug,
    );

    // update imageRef.current href based on the cursor hover position
    // also update image position
    useGSAP(
        (context, contextSafe) => {
            // show image on hover
            if (window.innerWidth < 768) {
                setSelectedProject(null);
                return;
            }

            const handleMouseMove = contextSafe?.((e: MouseEvent) => {
                if (!containerRef.current) return;
                if (!imageContainer.current) return;

                if (window.innerWidth < 768) {
                    setSelectedProject(null);
                    return;
                }

                const containerRect =
                    containerRef.current?.getBoundingClientRect();
                const imageRect =
                    imageContainer.current.getBoundingClientRect();
                const offsetTop = e.clientY - containerRect.y;

                // if cursor is outside the container, hide the image
                if (
                    containerRect.y > e.clientY ||
                    containerRect.bottom < e.clientY ||
                    containerRect.x > e.clientX ||
                    containerRect.right < e.clientX
                ) {
                    return gsap.to(imageContainer.current, {
                        duration: 0.3,
                        opacity: 0,
                    });
                }

                gsap.to(imageContainer.current, {
                    y: offsetTop - imageRect.height / 2,
                    duration: 1,
                    opacity: 1,
                });
            }) as any;

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        },
        { scope: containerRef, dependencies: [containerRef.current] },
    );

    const handleMouseEnter = (slug: string) => {
        if (window.innerWidth < 768) {
            setSelectedProject(null);
            return;
        }

        setSelectedProject(slug);
    };

    return (
        <div className="group/projects relative" ref={containerRef}>
            {selectedProject !== null && (
                <div
                    className="max-md:hidden absolute right-0 top-0 z-[1] pointer-events-none w-[200px] xl:w-[350px] aspect-[3/4] overflow-hidden opacity-0"
                    ref={imageContainer}
                >
                    {PROJECTS.map((project) => (
                        <Image
                            src={project.image}
                            alt="Project"
                            width="400"
                            height="500"
                            className={cn(
                                'absolute inset-0 transition-all duration-500 w-full h-full object-cover',
                                {
                                    'opacity-0':
                                        project.slug !== selectedProject,
                                },
                            )}
                            ref={imageRef}
                            key={project.slug}
                        />
                    ))}
                </div>
            )}

            <div className="flex flex-col max-md:gap-10" ref={projectListRef}>
                {PROJECTS.map((project, index) => (
                    <Link
                        href={`/projects/${project.slug}`}
                        className="project-item group leading-none py-5 md:border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/projects:opacity-30 md:hover:!opacity-100 transition-all"
                        key={project.title}
                        onMouseEnter={() => handleMouseEnter(project.slug)}
                    >
                        {selectedProject === null && (
                            <Image
                                src={project.image}
                                alt="Project"
                                width="400"
                                height="500"
                                className={cn('w-full object-cover mb-10')}
                                ref={imageRef}
                                key={project.slug}
                                loading="lazy"
                            />
                        )}
                        <div className="flex gap-5">
                            <div className="font-anton text-muted-foreground">
                                _{(index + 1).toString().padStart(2, '0')}.
                            </div>
                            <div className="">
                                <h4 className="text-5xl xs:text-6xl font-anton transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
                                    {project.title}
                                </h4>
                                <div className="mt-5 flex flex-wrap gap-3 text-muted-foreground">
                                    {project.techStack.map((tech, idx) => (
                                        <div
                                            className="gap-3 flex items-center"
                                            key={tech}
                                        >
                                            <span className="">{tech}</span>
                                            {idx !==
                                                project.techStack.length -
                                                    1 && (
                                                <span className="inline-block size-2 rounded-full bg-background-light"></span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Projects;
