
import ProjectDetail from '../../pages/ProjectDetail';

export default async function ProjectDetailPage({
  params,
}: {
  params: { projectId: string };
}) {
  return <ProjectDetail projectId={params.projectId} />;
}
