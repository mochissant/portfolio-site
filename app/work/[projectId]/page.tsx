
import { Project } from '@/app/data/projects';
import ProjectDetail from '../../pages/ProjectDetail';
import { projects } from '../../data/projects';

type Props = {
  params: { projectId: string };
};

export default async function ProjectDetailPage({ params }: Props) {
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
