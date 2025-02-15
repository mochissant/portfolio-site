
import ProjectDetail from '../../pages/ProjectDetail';
import { projects } from '../../data/projects';

type PageProps = {
  params: {
    projectId: string;
  };
};

export default function ProjectDetailPage({ params }: PageProps) {
  return <ProjectDetail projectId={params.projectId} />;
}

export function generateStaticParams(): { projectId: string }[] {
  return projects.map((project) => ({
    projectId: project.slug,
  }));
}
