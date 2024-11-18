// import SectionTitle from '@/components/SectionTitle';
// import Projects from './_components/Projects';
// import Skills from './_components/Skills';
// import Experiences from './_components/Experiences';
// import Banner from './_components/Banner';
// import AboutMe from './_components/AboutMe';

import SectionTitle from '@/components/SectionTitle';
import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Experiences from './_components/Experiences';
import Skills from './_components/Skills';
import Projects from './_components/Projects';

export default function Home() {
    return (
        <>
            <Banner />
            <AboutMe />
            <Skills />
            <Experiences />
            <section className="pb-section" id="selected-projects">
                <div className="container">
                    <SectionTitle title="SELECTED PROJECTS" />

                    <Projects />
                </div>
            </section>
        </>
    );
}
