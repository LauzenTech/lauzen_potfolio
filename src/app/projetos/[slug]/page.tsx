import { projects } from '@/data/projects';
import ProjectClient from './ProjectClient';

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    return <ProjectClient params={params} />;
}
