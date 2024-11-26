import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ArrowAnimation = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const arrow1Ref = useRef<SVGPathElement>(null);
    const arrow2Ref = useRef<SVGPathElement>(null);

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
            duration: 0.5,
            delay: 0.5,
            fill: '#ffffff08',
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
                stroke="#2C2C2C"
                ref={arrow1Ref}
            />
            <path
                className="svg-arrow svg-arrow-2"
                d="M375 1V39.9286L188 110V70.6822L375 1Z"
                stroke="#2C2C2C"
                ref={arrow2Ref}
            />
        </svg>
    );
};

export default ArrowAnimation;
