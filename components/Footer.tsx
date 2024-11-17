import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href="mailto:tasmirolislam@gmail.com"
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    tasmirolislam@gmail.com
                </a>
                <p className="text-muted-foreground">
                    Copyright © {new Date().getFullYear()} Tajmirul
                </p>
            </div>
        </footer>
    );
};

export default Footer;
