
import ProjectDetail from '../../pages/ProjectDetail';

interface Props {
  params: { projectId: string };
}

export default function ProjectDetailPage({ params }: Props) {
  return <ProjectDetail projectId={params.projectId} />;
}
