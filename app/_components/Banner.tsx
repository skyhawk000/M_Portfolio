'use client';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ArrowAnimation = () => {
    const svgRef = React.useRef<SVGSVGElement>(null);
    const arrow1Ref = React.useRef<SVGPathElement>(null);
    const arrow2Ref = React.useRef<SVGPathElement>(null);

    useGSAP(() => {
        gsap.set('#banner-arrow-svg', { fill: 'transparent', autoAlpha: 0 });
        gsap.set('.svg-arrow-1', {
            strokeDasharray: arrow1Ref.current?.getTotalLength(),
            strokeDashoffset: arrow1Ref.current?.getTotalLength(),
        });
        gsap.set('.svg-arrow-2', {
            strokeDasharray: arrow2Ref.current?.getTotalLength(),
            strokeDashoffset: arrow2Ref.current?.getTotalLength(),
        });

        const tl = gsap.timeline({ repeat: -1 });

        tl.to('#banner-arrow-svg', { autoAlpha: 1, duration: 0.1 });
        tl.to('.svg-arrow', {
            duration: 2,
            delay: 1,
            strokeDashoffset: 0,
        });
        tl.to('#banner-arrow-svg', {
            duration: 1,
            delay: 0.5,
            fill: '#ffffff06',
        });
        tl.to('#banner-arrow-svg', {
            duration: 1,
            y: 300,
        });
        tl.to('#banner-arrow-svg', {
            duration: 0,
            autoAlpha: 0,
        });
    });

    return (
        <svg
            id="banner-arrow-svg"
            width="376"
            height="111"
            viewBox="0 0 376 111"
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-20 left-1/2 -translate-x-1/2 z-0"
            ref={svgRef}
        >
            <path
                className="svg-arrow svg-arrow-1"
                d="M1 1V39.9286L188 110V70.6822L1 1Z"
                stroke="#ffffff10"
                ref={arrow1Ref}
            />
            <path
                className="svg-arrow svg-arrow-2"
                d="M375 1V39.9286L188 110V70.6822L375 1Z"
                stroke="#ffffff10"
                ref={arrow2Ref}
            />
        </svg>
    );
};

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: true,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">FRONTEND</span>
                        <br /> <span className="ml-4">DEVELOPER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Tajmirul
                        </span>
                        . A creative Frontend Developer with 3+ years of
                        experience in building high-performance, scalable, and
                        responsive web solutions.
                    </p>
                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${GENERAL_INFO.email}&su=${GENERAL_INFO.emailSubject}&body=${GENERAL_INFO.emailBody}`}
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        Hire Me
                    </Button>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            3+
                        </h5>
                        <p className="text-muted-foreground">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            80+
                        </h5>
                        <p className="text-muted-foreground">
                            Completed Projects
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            10K+
                        </h5>
                        <p className="text-muted-foreground">Hours Worked</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
