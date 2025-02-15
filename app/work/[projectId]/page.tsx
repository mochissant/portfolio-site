
import ProjectDetail from '../../pages/ProjectDetail';
import { projects } from '../../data/projects';

type Props = {
  params: { projectId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function ProjectDetailPage({ params }: Props) {
  return <ProjectDetail projectId={params.projectId} />;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.slug
  }));
}
