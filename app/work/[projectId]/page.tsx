
import ProjectDetail from '../../pages/ProjectDetail';
import { projects } from '../../data/projects';

type Props = {
  params: {
    projectId: string;
  };
};

export default async function ProjectDetailPage({ params }: Props) {
  return <ProjectDetail projectId={params.projectId} />;
}

export async function generateStaticParams(): Promise<Array<{ projectId: string }>> {
  return projects.map((project) => ({
    projectId: project.slug,
  }));
}
