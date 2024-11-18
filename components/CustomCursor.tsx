'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const CustomCursor = () => {
    const svgRef = useRef<SVGSVGElement>(null);

    useGSAP((context, contextSafe) => {
        const handleMouseMove = contextSafe?.((e: MouseEvent) => {
            if (!svgRef.current) return;

            const { clientX, clientY } = e;

            gsap.to(svgRef.current, {
                x: clientX,
                y: clientY,
                ease: 'power2.out',
                duration: 0.3,
                opacity: 1,
            });
        }) as any;

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    });

    // cursor shape
    return (
        <svg
            width="33"
            height="38"
            viewBox="0 0 33 38"
            className="fixed top-0 left-0 opacity-0 z-[50] pointer-events-none" // -translate-x-1/2 -translate-y-1/2
            fill="none"
            id="cursor"
            strokeWidth="2"
            opacity="0"
            xmlns="http://www.w3.org/2000/svg"
            ref={svgRef}
        >
            <defs>
                <linearGradient
                    id="grad-1"
                    x1="0"
                    y1="0"
                    x2="20"
                    y2="20"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.2" stopColor="rgb(255, 135, 9)"></stop>
                    <stop offset="0.8" stopColor="rgb(247, 189, 248)"></stop>
                </linearGradient>
            </defs>

            <path
                d="M31.4275 21.2232L2.60356 3.71227L7.1481 37.1308C7.1481 37.1308 10.0262 25.6598 14.8939 22.4706C19.7615 19.2814 31.4275 21.2232 31.4275 21.2232Z"
                stroke="url(#grad-1)"
            />
        </svg>
    );
};

export default CustomCursor;
