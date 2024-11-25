import { notFound } from 'next/navigation';
import ProjectDetails from './_components/ProjectDetails';
import { PROJECTS } from '@/lib/data';
import { Metadata } from 'next';

export const generateMetadata = ({
    params,
}: {
    params: { slug: string };
}): Metadata => {
    const { slug } = params;
    const project = PROJECTS.find((project) => project.slug === slug);

    return {
        title: `${project?.title} - ${project?.techStack
            .slice(0, 3)
            .join(', ')}`,
        description: project?.description,
    };
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project) {
        return notFound();
    }

    return <ProjectDetails project={project} />;
};

export default Page;
