'use client';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const PROJECTS = [
    {
        title: 'E-commerce Website',
        slug: 'e-commerce',
        description: 'A fullstack e-commerce website',
        techStack: ['React', 'Node.js', 'MongoDB'],
        image: '/projects/1.jpg',
    },
    {
        title: 'Portfolio Website',
        slug: 'portfolio',
        description: 'A personal portfolio website',
        techStack: ['React', 'Next.js', 'Tailwind CSS'],
        image: '/projects/2.jpg',
    },
    {
        title: 'Social Media App',
        slug: 'social-media',
        description: 'A fullstack social media app',
        techStack: ['React', 'Node.js', 'MongoDB'],
        image: '/projects/3.jpg',
    },
];

const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [selectedProject, setSelectedProject] = useState(PROJECTS[0].slug);

    // update imageRef.current href based on the cursor hover position
    // also update image position
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            if (!imageContainer.current) return;

            const containerRect = containerRef.current?.getBoundingClientRect();
            const imageRect = imageContainer.current.getBoundingClientRect();
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
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window?.removeEventListener('mousemove', handleMouseMove);
        };
    }, [containerRef.current]);

    return (
        <div className="group/projects relative" ref={containerRef}>
            <div
                className="absolute right-0 top-0 pointer-events-none w-[350px] aspect-[3/4] overflow-hidden"
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
                                'opacity-0': project.slug !== selectedProject,
                            },
                        )}
                        ref={imageRef}
                        key={project.slug}
                    />
                ))}
            </div>

            <div className="">
                {PROJECTS.map((project, index) => (
                    <Link
                        href={`/projects/${project.slug}`}
                        className="group flex gap-5 leading-none py-5 border-b first:!pt-0 last:pb-0 last:border-none group-hover/projects:opacity-30 hover:!opacity-100 transition-all"
                        key={project.title}
                        onMouseEnter={() => setSelectedProject(project.slug)}
                    >
                        <div className="font-anton text-muted-foreground">
                            _{(index + 1).toString().padStart(2, '0')}.
                        </div>
                        <div className="">
                            <h4 className="text-6xl font-anton transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
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
                                            project.techStack.length - 1 && (
                                            <span className="inline-block size-2 rounded-full bg-background-light"></span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Projects;
