import Image from 'next/image';
import { projects } from '../data/projects';
import projectImages from '../data/projectImages';
import { notFound } from 'next/navigation';
import StandardLayout from '../components/project-layouts/StandardLayout';
import dynamic from 'next/dynamic';

export default function ProjectDetail({ projectId }: { projectId: string }) {
  const project = projects.find((p) => p.slug === projectId);

  if (!project) {
    notFound();
  }

  if (project.layout === 'custom') {
    const CustomLayout = dynamic(
      () => import(`../components/project-layouts/${project.slug}`),
      { loading: () => <div>Loading...</div> }
    );
    return <CustomLayout project={project} />;
  }

  return <StandardLayout project={project} />;
}