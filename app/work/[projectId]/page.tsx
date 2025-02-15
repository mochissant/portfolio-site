
import { projects } from '../../data/projects';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    projectId: string
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const projectId = params.projectId;
  const project = projects.find(p => p.slug === projectId);
  console.log("params:", params); // ここで params の型を確認
  if (!project) {
    notFound();
  }

  const ProjectLayout = dynamic(
    () => import(`../../components/project-layouts/${projectId}`),
    { 
      loading: () => <div>Loading...</div>,
      ssr: true 
    }
  );

  return <ProjectLayout project={project} />;
}

export function generateStaticParams() {
  return projects.map(project => ({
    projectId: project.slug,
  }));
}
