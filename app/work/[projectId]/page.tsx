
import ProjectDetail from '../../pages/ProjectDetail';
import { projects } from '../../data/projects';

type Props = {
  params: { projectId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function ProjectDetailPage(props: Props) {
  return <ProjectDetail projectId={props.params.projectId} />;
}

export function generateStaticParams(): Array<{ projectId: string }> {
  return projects.map((project) => ({
    projectId: project.slug
  }));
}
