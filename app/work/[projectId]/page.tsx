
import { Project } from '@/app/data/projects';
import ProjectDetail from '../../pages/ProjectDetail';
import { projects } from '../../data/projects';

export default function ProjectDetailPage({
  params,
}: {
  params: { projectId: string }
}) {
  return <ProjectDetail projectId={params.projectId} />;
}

type StaticParams = {
  projectId: string;
}[];

export async function generateStaticParams(): Promise<StaticParams> {
  return projects.map((project) => ({
    projectId: project.slug,
  }));
}
