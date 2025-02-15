
import ProjectDetail from '../../pages_backup/ProjectDetail';
import { projects } from '../../data/projects';

type Props = {
  params: {
    projectId: string;
  };
};

export default async function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.projectId);
  if (!project) return null;
  
  return <ProjectDetail projectId={params.projectId} />;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.slug,
  }));
}
