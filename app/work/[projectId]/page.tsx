
import { Project } from '@/app/data/projects';
import ProjectDetail from '../../pages_backup/ProjectDetail';
import { projects } from '../../data/projects';

type Props = {
  params: {
    projectId: string;
  };
};

export default function ProjectDetailPage({ params }: Props) {
  return <ProjectDetail projectId={params.projectId} />;
}

export async function generateStaticParams(): Promise<Array<{ projectId: string }>> {
  const paths = projects.map((project) => ({
    projectId: project.slug,
  }));
  return paths;
}
