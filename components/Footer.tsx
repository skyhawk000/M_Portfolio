import { GENERAL_INFO } from '@/lib/data';
import React from 'react';

const Footer = () => {
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
                <p className="text-muted-foreground">
                    Copyright © {new Date().getFullYear()} Tajmirul
                </p>
            </div>
        </footer>
    );
};

export default Footer;
